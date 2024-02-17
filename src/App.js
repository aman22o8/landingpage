import HeaderCompnent from './component/HeaderComponent'
import {Switch,Route} from 'react-router-dom' 
import AllProductRoute from './component/AllProductRoute'
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderCompnent/>
      <Switch>
        <Route exact path="/" component={AllProductRoute}/>  
      </Switch>
    </div>
  );
}

export default App;
