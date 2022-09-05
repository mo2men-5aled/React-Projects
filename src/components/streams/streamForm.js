import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamForm extends React.Component {
  //renderError(meta){
  //if(meta.touched&&meta.error){
  // return (
  //       <div className="ui error message">
  //         <div className="header">{meta.error}</div>
  //       </div>
  //     );
  //}
  //}

  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  // Part-19 Vid-5
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui primary button">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = { title: null, description: null };

  if (!formValues.title) {
    errors.title = "You Must Enter a Title";
  }

  if (!formValues.description) {
    errors.description = "You Must Enter a Description";
  }

  return errors;
};

// export default connect()(
//   reduxForm({
//     form: "createStream",
//     validate: validate,
//   })(StreamCreate)
// );
//it equal the othe one

export default reduxForm({
  form: "streamForm",
  validate: validate,
})(StreamForm);
