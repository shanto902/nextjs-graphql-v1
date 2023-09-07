import React from 'react';

const ProductTable = ({isToggleOn}) => {
    return (
        <div className="overflow-x-auto">
      {
        !isToggleOn ?   <table className="table">
        {/* head */}
        <thead className=' bg-black text-white'>
          <tr>
            <th>Attribute</th>
            <th>SKU</th>
            <th>Stock</th>
            <th>Purchase Price</th>
            <th>Selling Price</th>
            <th>Discount type</th>
            <th>Discount Amount</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>None</td>
            <td>Ex. CBD23X14</td>
            <td>Ex. 100</td>
            <td>Ex. 1370</td>
            <td>Ex. 1370</td>
            <td>Flat</td>
            <td>Ex. 1370</td>
            <td><button className='btn btn-outline'>Upload</button></td>
          </tr>

        </tbody>
      </table> : <div></div>
      }
      </div>
    );
};

export default ProductTable;