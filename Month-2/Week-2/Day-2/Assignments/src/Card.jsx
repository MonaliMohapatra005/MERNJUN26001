import React from 'react'

function Card({flower}) {
  return (
    <>
    <div className="w-[250px] p-2 shadow-2xl rounded-lg hover:scale-105 transition-all duration-500">
      <div className=" w-full flex justify-center">
            <img 
            className="w-32 h-32 rounded-full object-cover border-1 border-purple-300 shadow-lg"
            src={flower.img} alt={flower.name} />
        </div>
      <p className="text-center font-bold text-gray-700">
             {flower.tittle}
        </p>
        <p className="text-center text-gray-500">
            {flower.desc}
        </p>
      <button className="p-3 w-full bg-purple-500 rounded-xl mt-2 text-white font-bold hover:bg-purple-400 cursor-pointer">
            view
        </button>
    </div>
    
    </>
  )
}

export default Card