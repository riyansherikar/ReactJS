 import { useState } from "react"


function App() {

  const [counter, setCounter] = useState(0)

  const Addvalue = () => {
    if(counter == 20){
      setCounter(counter = 20)
    }
    else{
      setCounter(counter + 1)
    }
  }

  const RemoveValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
    else{
      setCounter(counter = 0)
    }
  }

  
  return(
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={Addvalue}>Add</button>
      <button onClick={RemoveValue}>Remove</button>
    </>
  )
  
}

export default App
