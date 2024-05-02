import React, { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

import { categories } from '../utils/data';

const CreatePin = () => {
  const [category, setCategory] = useState();

  console.log(category)
  return (
    <div className='flex flex-col justify-center items-center mt-5 lg:h-4/5'>
      <div className="flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5">
        <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
          <div className="flex flex-col justify-center items-center border-2 border-dotted border-gray-300 w-full h-420">
            <label>
              <div className='flex flex-col items-center justify-center h-full'>
                <div className='flex flex-col items-center justify-center'>
                  <p className='font-bold text-2xl'>
                    <AiOutlineCloudUpload/>
                  </p>
                  <p className='text-lg'>Click to upload</p>
                </div>
                <p className='mt-32 text-gray-400'>
                  Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or TIFF less than 20MB
                </p>
              </div>
              <input type="file" name="upload-image" className='w-0 h-0'/>
            </label>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-5 lg:pl-5 mt-5 w-full">
          <input 
            type="text" 
            placeholder='Add title'
            className='outline-none text-2xl sm:text-3xl font-bold border-b-2 border-gray-300 p-2'
          />
          <input 
            type="text" 
            placeholder='Tell everyone what the Pin about'
            className='outline-none text-base sm:text-lg font-bold border-b-2 border-gray-300 p-2'
          />
          <input 
            type="text" 
            placeholder='Add a destination link'
            className='outline-none text-base sm:text-lg font-bold border-b-2 border-gray-300 p-2'
          />
          <div className="flex flex-col">
            <div>
              <p className='mb-2 font-bold text-lg sm:text-xl'>
                Choose Pin Category
              </p>
              <select className='outline-none w-4/5 text-base border-b-2 p-2 border-gray-300 rounded-md cursor-pointer' onChange={(e) => setCategory(e.target.value)}>
                <option value="others" className='sm:text-bg bg-white'>Select Category</option>
                {
                  categories?.map(cat => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))
                }
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePin