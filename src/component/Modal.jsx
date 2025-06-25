import { createPortal } from "react-dom"
const Modal = ({isOpen, onClose, title, children}) =>{
    if(!isOpen) return null;
    return createPortal(
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute  top-2 right-3 text-gray-500 hover:text-gray-800 text-3xl hover:cursor-pointer"
        >
          &times;
        </button>
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>,
    document.body
    )
}
export default Modal;