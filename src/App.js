import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Criptos from './cripto_table';
import axios from "axios";
import { useEffect, useState } from 'react';




function App() {


  const [variables, setVariables] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    // const [error2, setError2] = useState(null)
    
    useEffect(() =>
    {
      axios.get("https://api.coincap.io/v2/assets").then((response) => {
          setVariables(response.data.data.slice(0,70));
          setLoading(false);

      }).catch(error => {
          setError(error);
          setLoading(false);
          console.log(error);
      })           
    }, []);
    
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/">
            <br></br><h1>Crypto Currencies At a Glance</h1>
            {variables && <Criptos setvar={setVariables} variables={variables} error={error} loading={loading} ></Criptos>}
            
            
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
