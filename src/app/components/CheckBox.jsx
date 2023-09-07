import React from 'react';

const CheckBox = ({ property, isChecked, onChange, name }) => {

  const [checkedItems, setCheckedItems] = React.useState({}); // Initialize state correctly

  const handleCheckboxChange = (event) => {
    const newCheckedState = event.target.checked;
    
    // Create a copy of the existing checked items object
    const updatedCheckedItems = { ...checkedItems };

    // Check if the 'name' already exists in the object
    if (!updatedCheckedItems[name]) {
        updatedCheckedItems[name] = []; // If not, create a new array
      }
      
      // If newCheckedState is true, add the 'property' to the array; otherwise, remove it
      if (newCheckedState) {
        updatedCheckedItems[name].push(property);
      } else {
        updatedCheckedItems[name] = updatedCheckedItems[name].filter(
          (item) => item !== property
        );
      }
      
      // Update the checked items object
      setCheckedItems(updatedCheckedItems);
      
      // Log the updatedCheckedItems to see the result
      console.log(updatedCheckedItems);
      
      // Call the parent component's onChange function
      onChange(property, newCheckedState);
      
  };

  return (
    <div className="px-5 border-2 border-black join-item">
      <label className="label cursor-pointer">
        <span className="label-text pr-5">{property}</span>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="checkbox"
        />
      </label>
    </div>
  );
};

export default CheckBox;
