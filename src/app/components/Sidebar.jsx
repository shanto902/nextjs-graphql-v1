"use client"
import React, { useState } from "react";

import {TagsFetcher} from "./TagsFetcher";
import { useBrandsData, useCategoriesData} from "../hooks/DataFetcher";



const Sidebar = ({tags,setTags}) => {
    const  {brandsData} = useBrandsData();
    const  {categoriesData} = useCategoriesData();
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const categoriesName = categoriesData.map((category) => category.name);
    
      const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    
        const brandNames = brandsData.map((brand) => brand.name);
        const matchingBrands = brandNames.filter((brand) =>
          brand.toLowerCase().includes(value.toLowerCase())
        );
    
        setSuggestions(matchingBrands);
      };
    
      const handleSuggestionClick = (brand) => {
        setInputValue(brand);
        setSuggestions([]);
      };
    
      
    
    return (
        <div className="col-span-1">
        <div className="form-control w-full px-10">
          <label className="label">
            <span className="label-text text-lg">Categories</span>
          </label>
          <select className="select select-bordered">
            <option disabled defaultValue={'Pick one'}>
              Pick one
            </option>

            {/* Will Generated from API  */}
            { categoriesName.map((categoriesName, index)=> <option key={index}>{categoriesName}</option>)}
          </select>
        </div>

        <div className="form-control w-full px-10">
      <label className="label">
        <span className="label-text text-lg">Brands</span>
      </label>
      <div className="relative">
  <input
    type="text"
    placeholder="Ex: Samsung"
    className="input input-bordered w-full"
    value={inputValue}
    onChange={handleInputChange}
  />
  {suggestions.length > 0  && inputValue.length > 0 && (
    <ul className="absolute left-0 mt-2 py-2 bg-white border border-gray-300 shadow-lg rounded-md w-52">
      {suggestions.map((brand, index) => (
        <li
          key={index}
          className="cursor-pointer px-4 py-2 hover:bg-blue-100"
          onClick={() => handleSuggestionClick(brand)}
        >
          {brand}
        </li>
      ))}
    </ul>
  )}
</div>

    </div>

        <div className="form-control w-full px-10">
          <label className="label">
            <span className="label-text text-lg">Tags</span>
          </label>
          <div className="border rounded-md">
          <TagsFetcher tags={tags} setTags={setTags} />
            
          </div>
        </div>


        <div className="form-control w-full px-10">
          <label className="label">
            <span className="label-text text-lg">Minimum Quantity Purchase</span>
          </label>
          <input
            type="number"
            placeholder="Ex: 1"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full px-10">
          <label className="label">
            <span className="label-text text-lg">Stock Option</span>
          </label>
          <select className="select select-bordered">
            <option disabled defaultValue={'Pick one'}>
              Pick one
            </option>
            <option>Show stock with value</option>
            <option>Only show stock status</option>
            <option>Hide Stock</option>
          </select>
        </div>

      </div>
    );
};

export default Sidebar;