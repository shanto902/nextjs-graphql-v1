import Image from 'next/image';
import React from 'react';
import noImageThumbnail from '@/assets/images/No_Image_Available.jpg'
const MultipleImageUpload = () => {
    return (
        <div>
        <div className=" flex-1 flex flex-col px-10 gap-5">
          <h2 className=" text-lg font-semibold">Gallery Image</h2>
          <div className="avatar">
            <div className="w-24 rounded">
              <Image
              alt="Gallery image"
              src={noImageThumbnail}
                width={100}
                height={100}
              />
            </div>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    );
};

export default MultipleImageUpload;