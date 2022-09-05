import React from "react";
import Modal from "../modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const id = this.props.match.params.id;
    return (
      //<React.Fragment></React.Fragment> ===<></>

      //<React.Fragment> is a component holds more than one element but not as a div
      //because semantic ui can't style the repeated divs in a right way
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => {
            this.props.deleteStream(id);
          }}
        >
          Delete
        </button>
        <Link to={"/"} className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you wnat to delete this stream";
    }
    return `Are you sure you wnat to delete this stream with title: ${this.props.stream.title}`;
  }
  render() {
    return (
      <Modal
        title={"Delete Stream"}
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => {
          history.push("/");
        }}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
