
import React from "react";
import TagsInput from "react-tagsinput";
const Sidebar = ({tags,setTags}) => {
    

    const handleTagChange = (tag) => {
      setTags(tag);
    };
    return (
        <div className="col-span-1">
        <div className="form-control w-full px-10">
          <label className="label">
            <span className="label-text text-lg">Categories</span>
          </label>
          <select className="select select-bordered">
            <option disabled selected>
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
          />
        </div>

        <div className="form-control w-full px-10">
          <label className="label">
            <span className="label-text text-lg">Tags</span>
          </label>
          <div className="border rounded-md">
            <TagsInput value={tags} onChange={handleTagChange} />
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
            <option disabled selected>
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