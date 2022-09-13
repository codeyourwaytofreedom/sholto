import './modal.css';
import { useDispatch, useSelector } from 'react-redux';
import { fav_close } from './redux/favourites_management';

const Modal = ({vars }) => {

    const outer_shell_styles = {
        position:"fixed",
        top:0,
        left:0,
        bottom:0,
        right:0,
        backgroundColor: "black",
        opacity: 0.9,
        zIndex:100,
        overflow: "auto"       


    }
    const is_favs_open = useSelector((state) => state.favs_switch.is_it_open)
    const fav_list = useSelector((state) => state.favourites_list.favourites)
    const dispatch = useDispatch()
    
    if (is_favs_open)
        return (
            <div className="modal_outer_shell" style={outer_shell_styles}>

                        <div className="modal-favs">
                            <button className='button_close_modal' onClick={()=> dispatch(fav_close())}>Close</button><br></br><br></br>
                            {
                            fav_list.length < 1 ? <h1 style={{color:"white"}}>No Favourite Coins Yet!</h1> :
                            fav_list.map((f) =>  vars.map((v) => v.name === f && 
                            
                            <div className='modal-favs__favitem' key={v.rank}>
                                        <div className="modal-favs__favitem__cell--name"> {v.name}</div>
                                        <div className="modal-favs__favitem__cell">${v.priceUsd.substring(0, 11)} </div>
                                        <div className="modal-favs__favitem__cell" style={{color: v.changePercent24Hr.includes("-") ? "red" : "#9ACD32"}}>{v.changePercent24Hr.substring(0, 11)} </div>
                            </div> )) 
                                

                            }
                        </div>

            </div>

           

        );
}

export default Modal;