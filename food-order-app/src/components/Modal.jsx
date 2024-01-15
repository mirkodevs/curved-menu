import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import CartComponent from "./CartComponent";
import { Checkout } from "./Checkout";
const Modal = forwardRef(function Modal(props, ref) {
  const modalRef = useRef()
  function closeModal() {
    modalRef.current.close()
  }
  function checkout() {
    props.goCheckout()
  }
  useImperativeHandle(ref, () => {
    return {
      open() {
        modalRef.current && modalRef.current.showModal()
      },
      close(){
modalRef.current.close()

      }
    };
  }, []);
  return (
    createPortal(<dialog  ref={modalRef} className="modal cart">
      {props.isCartOpen ? <CartComponent /> : props.isCheckout  && <Checkout />}

      <div className="modal-actions">
        <button className="text-button" onClick={closeModal}>Close</button>
        <button className="button" onClick={checkout}>Go to checkout</button>
      </div>
    </dialog >, document.getElementById("modal"))
  )

})
export default Modal