import React from "react";
import Modal from "../modal";
//import { connect } from "react-redux";
//import { deleteStream } from "../../actions";

// class StreamDelete extends React.Component {
//   componentDidMount() {
//     this.props.deleteStream(this.props.match.params.id);
//   }
//   render() {
//     return <div></div>;
//   }
// }
// const mapStateToProps = (state, ownProps) => {
//   return {
//     stream: state.streams[ownProps.match.params.id],
//   };
// };

// export default connect(mapStateToProps, { deleteStream })(StreamDelete);

const StreamDelete = () => {
  return (
    <div>
      streamDelete
      <Modal />
    </div>
  );
};
export default StreamDelete;
