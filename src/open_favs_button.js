const Open_favs = ({open, setOpen}) => {

    const change_fav_open = () => {

       if (!open)
       {setOpen(true)}
       if(open)
       {setOpen(false)}

    }
    return ( 

        <button className="open_favs_button" onClick={change_fav_open}>Favourites</button>

     );
}
 
export default Open_favs;