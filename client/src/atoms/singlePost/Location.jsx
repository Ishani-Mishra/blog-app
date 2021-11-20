import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };


  render() {
    const { location } = this.props;

    return <div>{console.log(location.pathname)}</div>;
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(ShowTheLocation);

export default ShowTheLocationWithRouter;
