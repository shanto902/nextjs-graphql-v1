"use client"
import React, { useState } from "react";

import {TagsFetcher} from "./TagsFetcher";
import { useBrandsData, useTagsData } from "../hooks/DataFetcher";



const Sidebar = ({tags,setTags}) => {
    const  {brandsData, loading} = useBrandsData();
    // const brandsData = ["Samsung", "Apple", "Google", "Microsoft",]
    // 
    // if (!loading) {
    //     // When loading is false, you can safely map the data
    //     brandNames = brandsData.map((brand) => brand.name);
    //     console.log(brandNames);
    //   }
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
      
    
      const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    
        if(loading) {}
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
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </div>

        <div className="form-control w-full px-10">
      <label className="label">
        <span className="label-text text-lg">Brands</span>
      </label>
      <input
        type="text"
        placeholder="Ex: Samsung"
        className="input input-bordered w-full"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div >
      {suggestions.length > 0 && (
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          {suggestions.map((brand, index) => (
            <li key={index} onClick={() => handleSuggestionClick(brand)}>
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