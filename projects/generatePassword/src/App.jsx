import { useState,useCallback,useEffect,useRef} from 'react'


function App() {
  let [length,setLength]=useState(6);
  const [number,setNumber]=useState(false);
  const [character,setCharacter] = useState(false);
  const [password,setPassword] = useState('');

  //ref hook
  const passRef =useRef(null);

  const passwordGen = useCallback(()=>{
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number){
      str += '0123456789';
    }
    if(character){
      str += '!@#$%^&*(){}[]>.?/';
    }

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char);
    }
    setPassword(pass);

  } , [length,number,character,setPassword])

  const copyPass = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const generateNewPass = useCallback(()=>{
    passwordGen();
  },[passwordGen])

  useEffect(()=>{
    passwordGen();
  },[length,number,character,passwordGen])

  return (
    <div className='w-full h-screen'
    style={{backgroundColor:'black'}}>
      <div className='w-full flex flex-wrap justify-center top-16 inset-x-0 px-2'>
        <div className='w-full max-w-85 mx-auto shadow-md rounded-xl px-4 py-5 my-8 text-orange-500 bg-slate-100'>
          <h1 className='text-center text-black'>PASSWORD GENERATOR</h1>
          <div className='flex shadow rounded-xl overflow-hidden mb-4 py-10 px-3 bg-slate-600'>
            <input 
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3 rounded-md'
            placeholder='password'
            readOnly
            ref={passRef}></input>
            <button onClick={copyPass} className='bg-green-800 gap-20 rounded-md flex px-5 hover:bg-green-950 text-green-100 justify-center py-2'>Copy</button>
          </div>
          <div className='flex flex-wrap w-auto justify-center rounded-xl py-2'>
              <button 
              onClick={generateNewPass}
              className='flex flex-wrap bg-orange-400 w-auto px-2 py-4 hover:bg-orange-900 rounded-xl text-black '>Generate New Password</button>
          </div>
          <div className='flex shadow px-5 gap-x-5 justify-center py-4'>
            <div className='flex items-center gap-x-1'>
              <input
              type='range'
              max={20}
              min={6}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
             />
              <label >Lenght : {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
              type='checkbox'
              defaultChecked={number}
              id='number-input'
              onChange={()=>{setNumber(prev => !prev)}}
             />
              <label >Number</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
              type='checkbox'
              defaultChecked={character}
              id='character-input'
              onChange={()=>{setCharacter(prev => !prev)}}
             />
              <label >Character</label>
            </div>

          </div>
        </div>
      </div>
    </div>
    
  )
}

export default App
