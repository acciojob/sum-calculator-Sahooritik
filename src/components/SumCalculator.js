import React, { useEffect, useState } from "react";


const SumCalculator = () =>{
    let [sum ,setSum] = useState([])
    let [ans , setAns] = useState(0)

    useEffect(()=>{
        setAns(ans + sum[sum.length-1] || 0)
    },[sum])
     

    return (
        <div>
        <h1>Sum Calculator</h1>

         <input type="number" onChange={(e)=>{
            setSum([...sum , +e.target.value])
         }}/>
       <p>Sum: {ans}</p>

        </div>
    )
}

export default SumCalculator