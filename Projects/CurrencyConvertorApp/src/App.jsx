import { useState } from 'react'
import useCurrency from './hooks/useCurrency'
import './App.css'
import InputBox from './Components/InputBox'

function App() {
  const [FromAmount,setFromAmount] =useState(10);
  const [ToAmount,setToAmount] =useState(0);
  const [FromCurr,setFromCurr] = useState('usd');
  const [ToCurr,setToCurr] = useState('inr')
  const currencyInfo=useCurrency(FromCurr);
  const Options=Object.keys(currencyInfo);
  const AmountDisable =false


  const SwapCurrency=()=>{
    setFromAmount(ToAmount);
    setToAmount(FromAmount);
    setFromCurr(ToCurr);
    setToCurr(FromCurr);
  }

  const convertCurrency=()=>{
    let TempAmount =Math.floor(FromAmount * currencyInfo[ToCurr]);
    setToAmount(TempAmount)
  }
  return (
    <>
     <h1 className="text-cyan-800 bg-gray-950 font-sans font-bold text-3xl">Welcome To Currency Convertor</h1>

     <div className="flex flex-col justify-center items-center space-x-2 h-96 bg-gray-950 bg-opacity-15">
        <div className="flex flex-row justify-center items-center space-x-2 h-96">
        <InputBox Label="From Currency"
                  Amount={FromAmount}
                  Options={Options}
                  SelectedCurr={FromCurr}
                  OnAmountChange={(e) =>{
                    setFromAmount(e)
                  }}
                  OnCurrencyChange={(e) =>{setFromCurr(e)}}
                  AmountDisable={AmountDisable}
                  />
        <button className='items-center bg-cyan-900 text-white font-sans font-bold px-3 h-10 w-16 rounded-2xl shadow-lg
          hover:bg-white hover:text-cyan-900 hover:border-2 hover:border-black' onClick={SwapCurrency} >Swap</button>
        <InputBox Label="To Currency" 
                  Amount={ToAmount} 
                  Options={Options}
                  SelectedCurr={ToCurr}
                  OnAmountChange={(e) =>{
                    setToAmount(e)
                  
                  }}
                  OnCurrencyChange={(e) =>{setToCurr(e)}}
                  />
        </div>
     
      <button className='items-center bg-cyan-900 text-white font-sans font-bold px-3 h-10 w-48 rounded-2xl shadow-lg
          hover:bg-white hover:text-cyan-900 hover:border-2 hover:border-black' onClick={convertCurrency}>Convert {FromCurr.toUpperCase()} To {ToCurr.toUpperCase()}</button>
      </div>
    </>
  )
}

export default App
