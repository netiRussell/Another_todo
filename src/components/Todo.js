function Todo({ text }) {
  const deleteHandler = function () {
    console.log("Clicked");
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <button className="buttton" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
}

export { Todo };
