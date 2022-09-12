import { useDispatch, useSelector } from 'react-redux';
import { fav_close, fav_open } from './redux/favourites_management';

const Open_favs = () => {

    const is_favs_open = useSelector((state) => state.favs_switch.is_it_open)
    const dispatch = useDispatch()
   
    function do_switch(){
      if (is_favs_open)
      {dispatch(fav_close())}
      if (!is_favs_open)
      {dispatch(fav_open())}
   }

    return ( 

        <button className="open_favs_button" onClick={()=> do_switch()}>Favourites</button>

     );
}
 
export default Open_favs;