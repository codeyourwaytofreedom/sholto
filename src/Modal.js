import './modal.css';

const Modal = ({open, close, favs}) => {

    if (open)
    return ( 

        <div className="modal-favs">
            {open}
            <button onClick={close}>Close Modal</button>
            {favs.map((f) =>
                    <p key={f}>{f}</p>
            )}
        </div>

     );
}
 
export default Modal;