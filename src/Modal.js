import './modal.css';

const Modal = ({ open, close, favs, vars }) => {
    
    
    if (open)
        return (

            <div className="modal-favs">
                <button className='button_close_modal' onClick={close}>Close Modal</button><br></br><br></br>
                {
                   favs.map((f) =>  vars.map((v) => v.name === f && 
                   
                   <div className='modal-favs__favitem' key={v.rank}>
                            <div className="modal-favs__favitem__cell--name"> {v.name}</div>
                            <div className="modal-favs__favitem__cell">${v.priceUsd} </div>
                            <div className="modal-favs__favitem__cell" style={{color: v.changePercent24Hr.includes("-") ? "red" : "#9ACD32"}}>{v.changePercent24Hr.substring(0, 11)} </div>
                   </div> )) 
                    

                }
            </div>

        );
}

export default Modal;