import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/Slice'  // ✅ named exports se actions import

function Count(){
    
//   const [count, setCount]= useState(0)
//   const handleDecrement=()=>{
//     setCount(count - 1)
//   }
//   const handleIncrement=()=>{
//     setCount(count + 1)
//   }
  

    const count = useSelector((state)=> state.counter)
    const dispatch = useDispatch()

  return(
    <>
    <div>
      <h1>Count is {count}</h1>
      <button onClick={()=> dispatch(decrement())}>decreament</button>
      <button onClick={()=> dispatch(increment())}>Increament</button>
    </div>
    </>
  )
}
export default Count