import logo from './logo.svg';
import './App.css';
import './style1.css';
import { Data } from './first';
import { Done } from './sec';
import { Ass } from './firstassignment';
import { Super } from './super';
import { Tech } from './technology';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { In } from './increment';
import {Man} from './mango';

function App() {
  return (
    <div>
      {/* <In/> */}
      <Man/>
      
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Ass/>}/>
          <Route path='/about' element={<Data/>}/>
          <Route path='/clear' element={<Super/>}/>
        </Routes>
      </BrowserRouter> */}
    
    
    </div>
    
  );
}

export default App;
