
import { Button, Divider } from "antd";
import React from "react";
import { Checkbox } from "antd";

const AccordianCheckBox = ({
  title,
  options,
  onChange
}) => {

  
  return (
    <>
      <details className="group px-5">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <span className="text-paraColor font-semibold">
            {title}
          </span>
          <span className="transition group-open:rotate-180">
            <svg fill="none" height={24} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </summary>
        <div className="text-neutral-600 mt-3 group-open:animate-fadeIn">
        </div>

        <div className="acc-deatils text-neutral-600 mt-3 group-open:animate-fadeIn ">
        
          <Checkbox.Group
            options={options}
            onChange={onChange}
            style={{ rowGap: '1rem' }}
            className="checkBox-Custom"
          />
          <br />
          <br />
         
        </div>
      </details>

      <Divider className="bg-gray-300" />
    </>
  )
}

export default AccordianCheckBox