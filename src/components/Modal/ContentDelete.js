import React from "react";

function ContentDelete({ modalToggle }) {
  return (
    <React.Fragment>
      <p>Are you sure?</p>
      <div className="buttons">
        <button className="buttton" onClick={modalToggle}>
          Confirmed
        </button>
        <button className="buttton" onClick={modalToggle}>
          Actually... No
        </button>
      </div>
    </React.Fragment>
  );
}

export default ContentDelete;
