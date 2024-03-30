import { ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
  id: string;
  openModal: boolean;
};

export const Modal = (props: ModalProps) => {
  return createPortal(
    props.openModal ? (
      <>
        <input
          type="checkbox"
          id={props.id}
          className="modal-toggle"
          defaultChecked={props.openModal}
        />
        <div className="modal" role="dialog">
          <div className="modal-box">{props.children}</div>
        </div>
      </>
    ) : null,
    document.body
  );
};

export default Modal;
