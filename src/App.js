import { useEffect, useState } from 'react';
import './App.css';


function App() {
const [amount,setAmount] = useState(1)
const [fromCurrency,setFromCurrency] = useState('USD')
const [toCurrency,setToCurrency] = useState('EUR')
const [isLoading,setIsLoading] = useState(false)
const [converted,setConverted] = useState()

  useEffect(()=>{
    async function fetchMyCurrency (){
      setIsLoading(true)
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
      const data = await res.json()
      setConverted(data.rates[toCurrency])
      setIsLoading(false)
  
    }
    if(fromCurrency== toCurrency) return setConverted(amount)
    fetchMyCurrency()
  },[fromCurrency,toCurrency])

  return (

 <div className="App"> 
       <div className='head' style={{display:"flex"}}>
        <input type='text' onChange={(e)=>setAmount(e.target.value)} value={amount}/> 

        <select value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)}>
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
          <option value='CAD'>CAD</option>
        </select>

        <select value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)}>
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
          <option value='CAD'>CAD</option>
        </select>
        
      </div>

   {isLoading ? <h1 style={{color:"white"}} >Loading...</h1> : <div> <h1 style={{color:"white"}}>{converted}</h1> <h4 style={{color:"yellow"}}>({toCurrency})</h4></div>}  
         
    </div> 
  

  );
}

export default App;
