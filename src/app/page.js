"use client";

import Sidebar from "./components/Sidebar";
import { useState } from "react";
import SingleImageUpload from "./components/SingleImageUpload";
import MultipleImageUpload from "./components/MultipleImageUpload";
import Attributes from "./components/Attributes";
import ProductTable from "./components/ProductTable";
export default function Home() {
  const [tags, setTags] = useState([]);
  const [isToggleOn, setIsToggleOn] = useState(true);

  const [checkboxes, setCheckboxes] = useState([]);

  const handleCheckboxChange = (property, isChecked) => {
    setCheckboxes({
        ...checkboxes,
        [property]: isChecked,
    });
};

  const attributes = [
    {
      id: "1",
      name: 'Color',
      properties:["Black","Blue","Red"]
    },
    {
      id: "2",
      name: 'Size',
      properties:["4/64","6/128","8/128"]
    }
  ]
  const toggleSwitch = () => {
    setIsToggleOn(!isToggleOn);
  };
  return (
    <main>
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full">
        <div className="col-span-2">
          <div className="flex flex-row justify-between w-full items-center p-5">
            <h2 className="text-2xl">Add new Product</h2>
            <button className="btn btn-success">Save</button>
          </div>
      <div className="overflow-y-auto max-h-[90vh] ">
      <div>
            <div className="form-control w-full px-10">
              <label className="label">
                <span className="label-text text-lg">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Ex: 1"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full px-10">
              <label className="label">
                <span className="label-text text-lg">Unite Price</span>
              </label>
              <input
                type="text"
                placeholder="Ex: 1"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-row w-full">
         <MultipleImageUpload />
         <SingleImageUpload/>
          </div>

          <div className="form-control mt-4 max-w-fit ">
            <label className="label cursor-pointer px-10">
              <span className="label-text text-2xl pr-5">Attributes</span>
              <input
                type="checkbox"
                className={`toggle ${isToggleOn ? 'checked' : ''}`}
                onChange={toggleSwitch}
              />
            </label>
          </div>

          {!isToggleOn && (
            <div className="rounded-lg px-5">
           {attributes.map((attribute)=> <Attributes key={attribute.id} attribute={attribute}  onChange={handleCheckboxChange}/>)}
          
            </div>

           
          )}
  <ProductTable/>
      </div>
        </div>
        <Sidebar tags={tags} setTags={setTags} />
      </div>
    </main>
  );
}
