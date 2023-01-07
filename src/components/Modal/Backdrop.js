function Backdrop({ setModalState }) {
  return (
    <div
      className="backdrop"
      onClick={function () {
        setModalState(false);
      }}
    ></div>
  );
}

export default Backdrop;
