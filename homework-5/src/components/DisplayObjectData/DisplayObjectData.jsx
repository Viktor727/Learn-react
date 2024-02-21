import PropTypes from "prop-types";

export  const DisplayObjectData = ({ dataObject }) => {
  const renderData = (data) => {
    if (typeof data === "object" && data !== null) {
      return (
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {renderData(value)}
            </li>
          ))}
        </ul>
      );
    }
    return <span>{data}</span>;
  };

  return <div>{renderData(dataObject)}</div>;
};

DisplayObjectData.propTypes = {
  dataObject: PropTypes.object.isRequired,
};
