import PostBoard from './PostBoard' 
import JsonDiff from './jsondiff/JsonDiff'
import DepthOne from './jsondiff/DepthOne'
import './App.css';
import NavBar from './nav/NavBar';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
    <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={PostBoard()} />
          <Route exact path='/jsondiff' element={JsonDiff()} />
          <Route exact path='/DepthOne' element={DepthOne()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
