import ContentDelete from "./ContentDelete";
import ContentChange from "./ContentChange";

function Modal({ type }) {
  return <div className="modal">{type === "delete" ? <ContentDelete /> : <ContentChange />}</div>;
}

export default Modal;
