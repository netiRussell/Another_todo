import React from "react";
import { Todo } from "./Todo";

function TodoList({ todoArray, filterYear, modalToggle }) {
  const filteredData = todoArray.filter(function (value) {
    return value.year.toString() === filterYear.toString() || filterYear.toString().toLowerCase() === "none";
  });

  if (filteredData.length === 0) {
    return <h3 className="text_center">No todos have been found</h3>;
  }

  return (
    <React.Fragment>
      {filteredData.map(function (value) {
        return <Todo modalToggle={modalToggle} text={value.title} year={value.year} key={value.id} id={value.id} />;
      })}
    </React.Fragment>
  );
}

export default TodoList;
