import React from "react";

function ContentDelete() {
  return (
    <React.Fragment>
      <p>Are you sure?</p>
      <div className="buttons">
        <button className="buttton">Confirmed</button>
        <button className="buttton">Actually... No</button>
      </div>
    </React.Fragment>
  );
}

export default ContentDelete;
