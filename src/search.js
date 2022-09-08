import { useState } from "react";

const Search = ({variables, loading, error}) => {

const [searched_text, setST] = useState("")

if (error) return `Error: ${error.message}`;
 
    return (

        <div className="searchbar">
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
                
            {variables.slice(0,30).map( (varr) =>
                    (   varr.name.toLowerCase().includes(searched_text.toLowerCase()) &&
                            
                    <tr className='panel__tablerow--title' key={varr.id}>
                            <th className='panel__tablecell--position'>{varr.rank}</th>
                            <th className='panel__tablecell' >{varr.name}</th>
                            <th className='panel__tablecell'>{varr.priceUsd}</th>
                            <th id='change' className='panel__tablecell--change'>{varr.changePercent24Hr}</th>
                        </tr>
                    // console.log(varr.name) 
                                                        
                    )
                    )}
            </tbody>
            </table>
            }

        </div>


    );
}


export default Search;