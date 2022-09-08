import './criptos.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'




// https://api.coincap.io/v2/assets


const Criptos = ({variables, error, loading}) => {

    const [searched_text, setST] = useState("")

    if (error) return `Error: ${error.message}`;
    
    return ( 

            <div className="panel">
                
                {loading && <h1>Coins are loading...</h1>}

                    {         variables &&        
                    <div className="searchbar">
                        <input className="searchbar__text" type="text"
                            value={searched_text} required
                            onChange={(e) => {setST(e.target.value)}}
                            placeholder="search for coins"></input>
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
                                    <th className='panel__tablecell--position'>{varr.rank}</th>
                                    <th className='panel__tablecell'>   <FontAwesomeIcon icon={faHeart} style={{color:"silver"}} />   </th>
                                    <th className='panel__tablecell--name' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>{varr.name}</th>
                                    <th className='panel__tablecell' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>{varr.priceUsd}</th>
                                    <th id='change' className='panel__tablecell--change' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>
                                        {varr.changePercent24Hr} 
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
                            variables.slice(0,30).map( (varr) =>
                            (      
                                
                                <tr className='panel__tablerow' key={varr.id}>
                                    <th className='panel__tablecell--position'>{varr.rank}</th>
                                    <th className='panel__tablecell'>   <FontAwesomeIcon icon={faHeart} style={{color:"silver"}} />   </th>
                                    <th className='panel__tablecell--name' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>{varr.name}</th>
                                    <th className='panel__tablecell' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>{varr.priceUsd}</th>
                                    <th id='change' className='panel__tablecell--change' style={{color: varr.changePercent24Hr.includes("-") ? "red" : "green"}}>
                                        {varr.changePercent24Hr} 
                                        </th>

                                </tr>
                                
                            )
                            )
                        }
                    </tbody>
                    </table>
                }

            </div>
            
     );

     
}

export default Criptos;


