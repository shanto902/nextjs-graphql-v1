"use client";


import { useState } from "react";
import SingleImageUpload from "@/app/components/SingleImageUpload";
import MultipleImageUpload from "@/app/components/MultipleImageUpload";
import Attributes from "@/app/components/Attributes";
import { BiSave } from 'react-icons/bi';
import ProductTable from "@/app/components/ProductTable";
import Sidebar from "@/app/components/Sidebar";
import TagsFetcher from '@/app/components/TagsFetcher';
import { useBrandsData, useTagsData } from "./hooks/DataFetcher";


export default function Home() {
  const [tags, setTags] = useState([]);
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [isToggleOn, setIsToggleOn] = useState(true);
  const {tags:fetchData} = useTagsData();
 const {brands} = useBrandsData();
  const [checkboxes, setCheckboxes] = useState([]);

  const handleCheckboxChange = (property, isChecked) => {
    setCheckboxes({
        ...checkboxes,
        [property]: isChecked,
    });
};

// console.log(brands)
// console.log(fetchData)
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
            <button className="btn btn-outline"><BiSave/> Save</button>
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

          <div className="mt-10 flex lg:flex-row flex-col w-full gap-5 ">
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
           {attributes.map((attribute)=> <Attributes key={attribute.id} attribute={attribute}  onChange={handleCheckboxChange} selectedAttributes = {selectedAttributes} setSelectedAttributes={setSelectedAttributes}/>)}
          
            </div>

           
          )}
  <ProductTable isToggleOn={isToggleOn}/>

      </div>
        </div>
        <Sidebar tags={tags} setTags={setTags} />
      </div>
    </main>
  );
}
