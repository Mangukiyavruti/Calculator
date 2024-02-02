import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [val, setval] = useState("")
  let [val1, setval1] = useState("")
  let [ans, setans] = useState("")


  const btnhandler = () => {
    setans(parseInt(val) + parseInt(val1))
  }

  const btnhandler1 = () => {
    setans(parseInt(val) - parseInt(val1))
  }

  const btnhandler2 = () => {
    setans(parseInt(val) * parseInt(val1))
  }

  const btnhandler3 = () => {
    setans(parseInt(val) / parseInt(val1))
  }

  return (
  
    <div className='App'>
      Text1:-<input type='text' onChange={(e) => { setval(e.target.value) }}></input><br></br>
      Text2:-<input type='text' onChange={(e) => { setval1(e.target.value) }}></input><br></br>
      Answer:-<input type='text' value={ans} ></input><br></br>

      <div className='button'>
      <input type='button' value={'+'} onClick={btnhandler}></input>
      <input type='button' value={'-'} onClick={btnhandler1}></input>
      <input type='button' value={'*'} onClick={btnhandler2}></input>
      <input type='button' value={'/'} onClick={btnhandler3}></input><br></br>
      </div>
    </div>
  
    
  )
}

export default App;
