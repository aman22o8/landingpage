import {Route,Routes} from 'react-router-dom' 
import HeaderCompnent from './component/HeaderComponent'
import AllProductRoute from './component/AllProductRoute'
import './App.css';


function App() {
  return (
    <div className="App">
      <HeaderCompnent/>
     <Routes>
      <Route path="/" element={ <AllProductRoute/>}/>
     </Routes>

    </div>
  );
}

export default App;
