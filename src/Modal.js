import './modal.css';

const Modal = ({ open, close, favs, vars }) => {
    
    
    if (open)
        return (

            <div className="modal-favs">
                <button onClick={close}>Close Modal</button>
                {
                   favs.map((f) =>  vars.map((v) => v.name === f && 
                   
                   <div className='modal-favs__favitem' key={v.rank}>
                            <div className="modal-favs__favitem--cell"> {v.name}</div>
                            <div className="modal-favs__favitem--cell">{v.priceUsd} </div>
                            <div className="modal-favs__favitem--cell">{v.changePercent24Hr} </div>
                   </div> )) 
                    

                }
            </div>

        );
}

export default Modal;