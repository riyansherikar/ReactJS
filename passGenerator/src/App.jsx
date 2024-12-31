import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLenth] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")
  const [copied,setCopied] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) {
      str += "0123456789"
    }
    if (char) {
      str += "!@#$%^&*(){}?/"
    }

    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * str.length)
      pass += str.charAt(random)
    }



    setPassword(pass)
  }, [length, number, char, setPassword])

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg shadow-lg px-4 py-3 my-3 text-orange-500 bg-gray-600'>
        <h1 className='text-white text-center my-4 text-3xl'>Password Generator</h1>
        <div className='flex shadow mb-4 rounded-lg overflow-hidden'>
          <input type="text" value={password} className='outline-none w-full px-3 py-1' placeholder='Password' readOnly ref={passwordRef} />
          <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-1'>Copy</button>
        </div>
        {copied && (
          <div className="text-green-500 text-center mt-2 transition-opacity opacity-100 animate-fadeIn">
            Copied!
          </div>
        )}
        <div className='flex text-lg gap-x-2 '>
          <div className='flex items-center gap-x1'>
            <input type="range" min={8} max={50} value={length} className='cursor-pointer' onChange={(e) => { setLenth(e.target.value) }} />
            <label>lenth: {length}</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={number} id='numberChange' onChange={() => {
              setNumber((prev) => !prev)
            }} />
            <label htmlFor="numberChange">Number</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={char} id='charChange' onChange={() => {
              setChar((prev) => !prev)
            }} />
            <label htmlFor="charChange">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
