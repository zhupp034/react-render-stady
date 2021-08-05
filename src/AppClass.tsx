import React, { useState } from 'react'

// function ChildCom() {
//   return <ul style={{height: '40px', overflow: 'auto', border: '1px solid red'}}>
//     <li>1</li>
//     <li>2</li>
//     <li>{new Date().getTime()}</li>
//     <li>4</li>
//   </ul>
// }

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  ChildCom() {
    return <ul style={{height: '40px', overflow: 'auto', border: '1px solid red'}}>
      <li>1</li>
      <li>2</li>
      <li>{new Date().getTime()}</li>
      <li>4</li>
    </ul>
  }
  

  render() {
    console.log('render');
    
    return <div className="App">
      <button onClick={() => this.setState({count: this.state.count+1})}>change count</button>
      {this.state.count}
      <this.ChildCom/>
      {/* <ChildCom/> */}
      {this.ChildCom()}
      {/* {ChildCom()} */}
    </div>
  }
}

export default App
