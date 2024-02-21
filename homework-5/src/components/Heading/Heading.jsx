import PropTypes from "prop-types";
import "./Heading.scss";

function Heading(props) {
  return (
    <>
      <h3 className="heading">{props.title}</h3>
    </>
  );
}

export default Heading;

Heading.propTypes = {
  title: PropTypes.string,
};
