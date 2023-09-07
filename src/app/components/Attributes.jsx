import React, { useState } from 'react';
import CheckBox from './CheckBox';
import ProductTable from './ProductTable';


const Attributes = ({attribute, isChecked, onChange, selectedAttributes, setSelectedAttributes}) => {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const toggleSwitch = () => {
      setIsToggleOn(!isToggleOn);
    };
    
    
    return (
        <div className=' grid grid-cols-3 items-center'>
          <div className=" col-span-1 form-control mt-4 max-w-fit justify-self-end ">
            <label className="label cursor-pointer px-10">
              <span className="label-text text-lg pr-5">{attribute?.name}</span>
              <input
                type="checkbox"
                className={`toggle ${isToggleOn ? 'checked' : ''}`}
                onChange={toggleSwitch}
              />
            </label>
            
          </div>

          {!isToggleOn && (
            <div className="mt-4 p-2 px-10 col-span-2 join">
        {attribute?.properties.map((property, index) => (
            <CheckBox
              key={index}
              name={attribute.name}
              selectedAttributes = {selectedAttributes} setSelectedAttributes={setSelectedAttributes}
              property={property}
              onChange={(isChecked) => onChange(attribute.name, property, isChecked)} // Pass the attribute name along with property and isChecked
            />
          ))}
            </div>
          )}
         
        </div>
    );
};

export default Attributes;