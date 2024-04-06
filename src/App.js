import React from 'react';
import "./App.css"

class App extends React.Component {
   constructor(){
    super();
    this.state = {
      count:0
    }
   }
render(){
  return (
    <>
    <h1>Counter App</h1>
    <h2>Count: {this.state.count} </h2>
    <button onClick={()=>{
      this.setState({
        count:this.state.count+1
      })
    }}>Increment</button>
    <button  onClick={()=>{
      this.setState({
        count:this.state.count-1
      })
    }}>Decrement</button>
    </>
   )
}
 
}

export default App