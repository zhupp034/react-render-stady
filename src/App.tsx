import React, { useCallback, useState } from 'react'
import logo from './logo.svg'
import './App.css'

let ChildCom = () => {
  console.log(1234);
  
  return <ul style={{height: '40px', overflow: 'auto', border: '1px solid red'}}>
    <li>{new Date().getTime()}</li>
    <li>2</li>
    <li>3</li>
    <p>4</p>
  </ul>
}

const ChildComCopy = () => {
  console.log(1234);
  
  return <ul style={{height: '40px', overflow: 'auto', border: '1px solid red'}}>
    <li>{new Date().getTime()}</li>
    <li>2</li>
    <li>3</li>
    <p>4</p>
  </ul>
}


function App() {
  let [count, setCount] = useState(0)
  // const ChildCom2 = useCallback(
  //   () => {
  //     console.log(22222);
  //     return <ul style={{height: '40px', overflow: 'auto', border: '1px solid red'}}>
  //       <li>1</li>
  //       <li>2</li>
  //       <li>{new Date().getTime()}</li>
  //       <li>4</li>
  //     </ul>
  //   },
  //   [],
  // )

  const ChildCom2 = () => {
    // debugger
    // console.log(22222);
    return <ul style={{height: '40px', overflow: 'auto', border: '1px solid red'}}>
      <li>{new Date().getTime()}</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  }
  console.log(2333);
  // debugger

  function test() {
    setCount(count+1)
    // ChildCom = ChildComCopy
  }
  

  return (
    <div>
      <ChildCom2 />
      {/* <ChildCom/> */}
      <button onClick={test}>change count</button>
      
      {/* {ChildCom2()} */}
      
      
    </div>
  )
}

export default App
