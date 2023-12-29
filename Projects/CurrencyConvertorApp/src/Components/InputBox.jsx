import React from 'react'
import { useEffect } from 'react'

function InputBox({Label,Amount=0, Options=[],SelectedCurr,OnAmountChange,OnCurrencyChange,AmountDisable=true}) {
  return (
	<>
    <div className=" flex flex-col rounded-3xl justify-center items-center bg-cyan-900 text-xl text-white w-96 h-36
    shadow-2xl">
    
    <label className='font-sans font-bold '>{Label}</label>
    <div className=" flex flex-row rounded-3xl justify-center items-center w-96 h-36
    shadow-2xl space-x-1">
    <input className='rounded-xl w-16 text-black text-center mx-5' type='number' disabled={AmountDisable}
    value={Amount} onChange={((e)=>OnAmountChange && OnAmountChange(parseInt(e.target.value)))} />

    <label htmlFor="CurrencyOption">Select Currency </label>

    <select className='w-16 rounded-xl text-zinc-800' name="CurrencyOption" id="CurrencyOption" value={SelectedCurr} 
      onChange={((e)=>OnCurrencyChange && OnCurrencyChange(e.target.value))} >
      {Options.map((curr)=>{
        
        return <option className='w-5 text-black rounded-xl' key={curr} value={curr}>{curr}</option>

      })}
    </select>
    </div>
    </div>
  </>  
  )
}

export default InputBox