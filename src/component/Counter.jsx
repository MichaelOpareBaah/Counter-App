import React, {  useState } from 'react'

export default function Counter() {
  const[count, setCount]=useState(0)
  const[saveCount, setSaveCount]= useState([])
  function handleIncrement(){
    setCount(item=>item+1)
   }
  function handleDecrement(){
     if(count>0){
      setCount(item=>item-1)
    } else{
      alert('Count is zero and can not be decreased')
    }
   }
    function handleSave(){
        if(count===0){
             alert('Count is zero and can not be saved, Increase to save.')
        }else{
            setSaveCount(item=>[...item, count + ", "])
            setCount(0)
         }
    }
    // localStorage.setItem('countLocal',saveCount);
    // const showStoredItems= localStorage.getItem('countLocal')

    
  return (
    <section className='container' >
      <h1>Counter App</h1>
      <p className='count'>{count}</p>
      <div className='btns'>
        <button className='increment-btn' onClick={handleIncrement}>Increment</button>
        <button className='decrement-btn' onClick={handleDecrement}>Decrement</button>
      </div>
      <button className='save-btn' onClick={handleSave}>Save Count</button>
      <p className='saved-items'>Saved Counts:{saveCount}</p>
      
    </section>
  )
}
