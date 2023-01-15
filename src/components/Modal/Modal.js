import ContentDelete from "./ContentDelete";
import ContentChange from "./ContentChange";

function Modal({ modalDelete }) {
  return <div className="modal">{modalDelete === true ? <ContentDelete /> : <ContentChange />}</div>;
}

export default Modal;
