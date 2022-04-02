import './App.css';
import PageRenderer from "./components/Folksdev"
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import RouteMe from "./components/RouteMe/RouteMe"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<PageRenderer/>}/>
            <Route path="/direct/:code" element={<RouteMe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
