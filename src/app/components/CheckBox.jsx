import React from 'react';

const CheckBox = ({ property, isChecked, onChange }) => {

    const handleCheckboxChange = (event) => {
        const newCheckedState = event.target.checked;
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
