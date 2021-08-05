import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import App2 from './AppClass'
// import './render-test.js'

const Test = () => {
  // const [state, setState] = useState(0)
  // debugger
  return <ul>
  <li>1</li>
  <li>2</li>
  {/* <li><button onClick={() => setState(state+1)}>{state}</button></li> */}
</ul>
}

ReactDOM.render(
  <Test/>,
//   <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
// </ul>,
// {/* <App/>,  */}
document.getElementById('root')
)


const a1 = { name: 'a1', child: null, sibling: null, return: null };
const b1 = { name: 'b1', child: null, sibling: null, return: null };
const b2 = { name: 'b2', child: null, sibling: null, return: null };
const b3 = { name: 'b3', child: null, sibling: null, return: null };
const c1 = { name: 'c1', child: null, sibling: null, return: null };
const c2 = { name: 'c2', child: null, sibling: null, return: null };
const d1 = { name: 'd1', child: null, sibling: null, return: null };
const d2 = { name: 'd2', child: null, sibling: null, return: null };

