import React from 'react';
import {useEffect,useState} from "react"

const Counter = () => {

    const [counter,setCounter]=useState(0)
    const [date,setDate]=useState(new Date())

    useEffect(()=>{
        document.title=`Clicked ${counter}`
    },[counter])

    const handleIncrement=()=>{
        console.log("increasing")
        setCounter((prevCounter)=>prevCounter+1)
    }

    const tick=()=> {
        setDate(new Date())
    }

    useEffect(()=>{
        let end=setInterval(tick, 1000);
        console.log("Clock Ticking")

        return ()=>{
            clearInterval(end)
        }
    },[])

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleIncrement}>Add Two</button>
            <h3>{date.toLocaleTimeString()}</h3>
        </div>
    );
};

export default Counter;