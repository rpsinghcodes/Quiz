import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <div className="pre">
        <button
          onClick={props.prev}
          style={{ display: props.display != 0 ? "flex" : "none" }}
        >
          Previous
        </button>
      </div>
      <div className="next">
        <button
          onClick={props.next}
          style={{ display: props.display != 9 ? "flex" : "none" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Footer;

//style={{display: 'none'}}
