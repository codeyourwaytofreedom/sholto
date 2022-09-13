import './criptos.css';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faArrowDown, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal';
import Open_favs from './open_favs_button';
import { useDispatch, useSelector } from 'react-redux';
import {add_to_list, remove_from_list} from './redux/fav_list';




const Criptos = ({variables, error, loading, setvar}) => {
    let count = 1;
    const fav_list = useSelector((state) => state.favourites_list.favourites)
    const dispatch = useDispatch()

                 
    
    console.log(fav_list, "after add")

    const [filter, setFilter] = useState(0)
    const [searched_text, setST] = useState("")
    const [ar,setAr] = useState([])
    const heart = <FontAwesomeIcon size={"xl"} icon={faHeart} style={{color:"orange", cursor: 'pointer'}} />
    const brokenheart = <FontAwesomeIcon  size={"xl"} icon={faHeartBroken} style={{color:"black", cursor: 'pointer'}} />
    const arrow = <FontAwesomeIcon  size={"xl"} icon={faArrowDown} style={{color:"black", cursor: 'pointer'}} />
    
   
    
    
    const check_ar = (a) => { 
        if (!fav_list.includes(a))
        {dispatch(add_to_list(a))}
        else{dispatch(remove_from_list(a))}
    }

    function compare (a,b) {
        if ( b.name.toLowerCase() < a.name.toLowerCase())
        return -1;
        if ( b.name.toLowerCase() > a.name.toLowerCase())
        return 1;
        return 0;

    }
    const do_filter = (c) => {
        // console.log(a)
        if(c===0)
        {console.log(5)}

        if(c===1)
        {
                console.log(variables.sort(compare))
                setvar(variables.sort(compare))
                // setvar()
                // console.log(var.sort(compare))

            
                // console.log(variables)
                
        }
    }

    if (error) return `Error: ${error.message}`;
    
    return ( 

            <div className="panel">
            
                <Open_favs></Open_favs>
                {/* <button onClick={ () => dispatch(add_to_list(9))  }>gggg</button> */}

                {loading && <h1>Coins are loading...</h1>}

                    {         variables &&        
                    <div className="searchbar">
                        <input className="searchbar__input" type="text"
                            value={searched_text} required
                            onChange={(e) => {setST(e.target.value)}}
                            placeholder="search for coins"></input>
                            
                            <select onChange={(e) => setFilter(e.target.selectedIndex)} className="filter_dropdown">
                                <option value="bynameA" >&#x21C8; By Name - Ascending </option>
                                <option value="bynameD">&#x21CA; By Name  - Descending </option>
                                <option value="bypriceA">&#x21C8; By Price   - Ascending</option>
                                <option data-image={{}} value="bypriceD">&#x21CA; By Price   - Descending</option>
                            </select>
                    </div>
                }
                {
                    variables &&    searched_text.length > 2 && 
                    <table className='panel__table'>
                    <tbody>
                                <tr className='panel__tablerow--title' key="title">
                                    <th className='panel__tablecell--position'>+</th>
                                    <th className='panel__tablecell'> Favs </th>
                                    <th className='panel__tablecell' >Coin</th>
                                    <th className='panel__tablecell'>Price</th>
                                    <th id='change' className='panel__tablecell--change'>Change</th>

                                </tr>

                    {variables.slice(0,30).map( (varr) =>
                            (   varr.name.toLowerCase().includes(searched_text.toLowerCase()) &&
                                
                            <tr className='panel__tablerow' key={varr.id}>
                                    <th className='panel__tablecell--position'>{count++}</th>
                                    <th onClick={() => check_ar(varr.name)}  className='panel__tablecell'>   { fav_list.includes(varr.name) ? heart : brokenheart}  </th>
                                    <th className='panel__tablecell--name' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>{varr.name}</th>
                                    <th className='panel__tablecell' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>${varr.priceUsd.substring(0, 11)}</th>
                                    <th id='change' className='panel__tablecell--change' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>
                                        {varr.changePercent24Hr.substring(0, 11)} 
                                        </th>

                            </tr>
                                                                 
                            )
                            )}
                    
                    </tbody>
                    </table>
                }

                {
                   variables &&    searched_text.length < 3 && 
                    
                    <table className='panel__table'>
                    <tbody>
                                
                                <tr className='panel__tablerow--title' key="title">
                                    <th className='panel__tablecell--position'>+</th>
                                    <th className='panel__tablecell'>Favs</th>
                                    <th className='panel__tablecell' >Coin</th>
                                    <th className='panel__tablecell'>Price</th>
                                    <th id='change' className='panel__tablecell--change'>Change</th>

                                </tr>
                        {

                            filter===0 ?
                            variables.sort(function (a,b) {
                            if ( a.name.toLowerCase() < b.name.toLowerCase())
                            return -1;
                            if ( a.name.toLowerCase() > b.name.toLowerCase())
                            return 1;
                            return 0;
                    
                        }).map( (varr) =>
                            (      

                                <tr className='panel__tablerow' key={varr.id}>
                                    <th className='panel__tablecell--position'>{count++}</th>
                                    <th onClick={() => check_ar(varr.name)} className='panel__tablecell' >  { fav_list.includes(varr.name) ? heart : brokenheart} </th>
                                    <th className='panel__tablecell--name' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>{varr.name}</th>
                                    <th className='panel__tablecell' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>${varr.priceUsd.substring(0, 11)}</th>
                                    <th id='change' className='panel__tablecell--change' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>
                                        {varr.changePercent24Hr.substring(0, 11)} 
                                        </th>

                                </tr>
                                
                            )
                            )
                            :
                            filter===1 ?
                            variables.sort(function (a,b) {
                                if ( b.name.toLowerCase() < a.name.toLowerCase())
                                return -1;
                                if ( b.name.toLowerCase() > a.name.toLowerCase())
                                return 1;
                                return 0;
                        
                            }).map( (varr) =>
                                (      
    
                                    <tr className='panel__tablerow' key={varr.id}>
                                        <th className='panel__tablecell--position'>{count++}</th>
                                        <th onClick={() => check_ar(varr.name)} className='panel__tablecell' >  { fav_list.includes(varr.name) ? heart : brokenheart} </th>
                                        <th className='panel__tablecell--name' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>{varr.name}</th>
                                        <th className='panel__tablecell' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>${varr.priceUsd.substring(0, 11)}</th>
                                        <th id='change' className='panel__tablecell--change' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>
                                            {varr.changePercent24Hr.substring(0, 11)} 
                                            </th>
    
                                    </tr>
                                    
                                )
                                )
                                :
                                filter===2 ?
                            variables.sort(function (a,b) {
                                if ( parseFloat(a.priceUsd) < parseFloat(b.priceUsd))
                                return -1;
                                if ( parseFloat(a.priceUsd) > parseFloat(b.priceUsd))
                                return 1;
                                return 0;
                        
                            }).map( (varr) =>
                                (      
    
                                    <tr className='panel__tablerow' key={varr.id}>
                                        <th className='panel__tablecell--position'>{count++}</th>
                                        <th onClick={() => check_ar(varr.name)} className='panel__tablecell' >  { fav_list.includes(varr.name) ? heart : brokenheart} </th>
                                        <th className='panel__tablecell--name' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>{varr.name}</th>
                                        <th className='panel__tablecell' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>${varr.priceUsd.substring(0, 11)}</th>
                                        <th id='change' className='panel__tablecell--change' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>
                                            {varr.changePercent24Hr.substring(0, 11)} 
                                            </th>
    
                                    </tr>
                                    
                                )
                                )
                                :
                              
                            variables.sort(function (a,b) {
                                if ( parseFloat(b.priceUsd) < parseFloat(a.priceUsd))
                                return -1;
                                if ( parseFloat(b.priceUsd) > parseFloat(a.priceUsd))
                                return 1;
                                return 0;
                        
                            }).map( (varr) =>
                                (      
    
                                    <tr className='panel__tablerow' key={varr.id}>
                                        <th className='panel__tablecell--position'>{count++}</th>
                                        <th onClick={() => check_ar(varr.name)} className='panel__tablecell' >  { fav_list.includes(varr.name) ? heart : brokenheart} </th>
                                        <th className='panel__tablecell--name' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>{varr.name}</th>
                                        <th className='panel__tablecell' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>${varr.priceUsd.substring(0, 11)}</th>
                                        <th id='change' className='panel__tablecell--change' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>
                                            {varr.changePercent24Hr.substring(0, 11)} 
                                            </th>
    
                                    </tr>
                                    
                                )
                                )
                        }
                    </tbody> 
                    </table>
                }

                <Modal vars={variables}></Modal>
                
            </div>
            
            
     );

     
}

export default Criptos;


// {ar.includes(varr.rank) ? varr.rank : ""}