import { useState } from "react";

const Search = () => {
const [searched_text, setST] = useState("")

const [dummy] = useState([]) 



 
    return (

        <div className="searchbar">
            <input className="searchbar__text" type="text"
                value={searched_text} required
                onChange={(e) => { setST(e.target.value)}}
                placeholder="search for coins"></input>

            <div>
                
                    { dummy?.filter(name => name.toLowerCase().includes(searched_text.toLowerCase())).map(filteredName => (
                        <li key={filteredName}>
                        {filteredName}
                        </li>
                    ))}
            </div>

        </div>


    );
}


export default Search;