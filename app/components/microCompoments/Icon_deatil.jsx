import React from 'react'
import Image from "next/image";
const Icon_deatil = ({ srcIcon, alt, title, para ,children,list}) => {
  return (
    <div className="profile_detail__2X3nM flex items-start">
     {children}

      <div className="mx-2 space-y-1">
        <h3 className="text-sm font-bold capitalize">{title}</h3>
        {list ? list.map((e,i)=>{
          return(
            <p className='text-base' key={`listItem${Math.random()*i}`}>{e} <br/></p>
          )
        }):<div className="text-base">{para}</div>}

      </div>
    </div>
    
  )
}

export default Icon_deatil