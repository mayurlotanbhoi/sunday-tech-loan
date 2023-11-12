import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import { Home } from './Pages';
import { Data } from './Data';

const LoanContext = createContext()

function App() {

  const [selectSubProdect, setSelectSubProdect] = useState(false)
  const [flatPayout , setflatPayout] = useState([...Data])
  const [finalData, setFinalData] = useState([])
  
  return (
    <LoanContext.Provider value={{finalData, setFinalData,selectSubProdect, setSelectSubProdect, flatPayout , setflatPayout}}>
    <div>
    <Home/>
    </div>
    </LoanContext.Provider>
  );
}


export default App;
export {LoanContext}
