import Axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom';
import {Header} from './components';
import {Home, Cart} from './pages'; 
import { setPizzas } from './redux/actions/pizzas'

function App () {
  const dispath = useDispatch(); 
  

  React.useEffect(() => {
    Axios.get('http://localhost:3001/pizzas').then(({data}) => {
     dispath(setPizzas(data)); 
    });
  }, []); 

  return(
    <div className="wrapper">
    <Header /> 
      <div className="content">
        <Route path="/"  component={Home} exact/>
        <Route path="/cart" component={Cart} exact/>
        </div>
    </div>
  );
}


export default App; 


