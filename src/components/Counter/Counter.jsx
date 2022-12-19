import React, {useState} from 'react'


export default function Counter() {
    const [count, setCount] = useState(0);
    const [specific, setSpecific] = useState(0);

    const handleaddition = (e) => {
        setCount(count + 1)
    }

    const handleminus = (e) => {

        setCount(count - 1)
    }

    const handlereset = (e) => {

        setCount(0)
    }
    
    const handleinput = (e) => {

        setCount(parseInt(count) + parseInt(specific))
    }

    const handleChange = (e) => {
                   setSpecific(e.target.value) 
      };
      
    

    return (
        <div className="container flex flex-col justify-center items-center gap-8 h-screen my-5">
            <div className='card shadow-lg overflow-hidden rounded text-center my-5'>
                <div className='card-body'>

        
        <h1 className='font-bold text-3xl '> Counter</h1>
        <div className='my-5'>

        
                
        <h1 className={count > 0 ? "my-5 text-green-500 positive font-bold text-3xl" : count < 0 ? "my-5 text-red-500 animate-pulse font-bold text-3xl" : "my-5 font-bold text-3xl"}>
          {count}
        </h1>
        <div>
          <button class='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-2xl cursor-pointer mx-6' onClick={() => {handleminus()}}>-</button>
          <button class='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg text-2xl cursor-pointer mx-6' onClick={() => {handleaddition()}}>+</button>
          <button class='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg text-2xl cursor-pointer mx-6' onClick={() => {handlereset()}}> Reset </button>

        <div className='my-5'>
          <input
              onChange={handleChange}
              placeholder="0"
              className="  appearance-none block my-5 mx-16 text-center w-half bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />

            <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-2xl cursor-pointer mx-6' onClick={() => {handleinput()}}> Add </button>    
            </div>
            </div>
        </div>
        </div>
        </div>
      </div>
        )
    }