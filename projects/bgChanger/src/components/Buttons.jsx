

// eslint-disable-next-line react/prop-types
function Button({setColor}) {
 

    return (
        <div 
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 bg-slate-300 rounded-2xl text-slate-50 px-3 py-2">
                <button onClick={()=>setColor('Red')} className="flex flex-wrap justify-center rounded-xl gap-2 hover:bg-red-500 text-red-100 px-3 py-2">Red</button>
                <button onClick={()=>setColor('Blue')} className="flex flex-wrap justify-center rounded-xl gap-2 hover:bg-blue-600 text-green-100 px-3 py-2">Blue</button>
                <button onClick={()=>setColor('Green')} className="flex flex-wrap justify-center rounded-xl gap-2 hover:bg-green-600 text-green-100 px-3 py-2">Green</button>
                <button onClick={()=>setColor('Yellow')} className="flex flex-wrap justify-center rounded-xl gap-2 hover:bg-yellow-500 text-yellow-100 px-3 py-2">Yellow</button>
                <button onClick={()=>setColor('Black')} className="flex flex-wrap justify-center rounded-xl gap-2 hover:bg-black text-white px-3 py-2">black</button>
            </div>
        </div>
    )
  }
  
  export default Button