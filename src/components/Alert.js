import PropTypes from "prop-types";

const Alert = ({text}) => (
  <div className="alert alert-primary" role="alert">
    {text}
  </div>
);

export default Alert;
