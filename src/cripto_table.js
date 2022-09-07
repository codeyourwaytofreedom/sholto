import './criptos.css';
import { useState } from "react";


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

                    <div>
                        
                    </div>

                </div>
                }

                {
                    variables &&    searched_text !== "" && 
                    
                    variables.slice(0,30).map( (varr) =>
                            (   searched_text.length > 2 && varr.name.toLowerCase().includes(searched_text.toLowerCase()) &&
                                    console.log(varr.name) 
                                                                 
                            )
                            )
                }

                {
                    variables &&    searched_text === "" && 
                    
                    <table className='panel__table'>
                    <tbody>
                                
                                <tr className='panel__tablerow--title' key="title">
                                    <th className='panel__tablecell--position'>x</th>
                                    <th className='panel__tablecell' >Coin</th>
                                    <th className='panel__tablecell'>Price</th>
                                    <th id='change' className='panel__tablecell--change'>Change</th>

                                </tr>
                        {
                            variables.slice(0,30).map( (varr) =>
                            (      
                                    
                                <tr className='panel__tablerow' key={varr.id}>
                                    <th className='panel__tablecell--position'>{varr.rank}</th>
                                    <th className='panel__tablecell--name' >{varr.name}</th>
                                    <th className='panel__tablecell'>{varr.priceUsd}</th>
                                    <th id='change' className='panel__tablecell--change'>
                                        {varr.changePercent24Hr.includes("-") ? "a" : "b"} 
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


