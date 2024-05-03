import React, { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

import { categories } from '../utils/data';
import { client } from '../client';

const CreatePin = () => {
  const [category, setCategory] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [destination, setDestination] = useState('');
  const [imageAsset, setImageAsset] = useState();
  const [wrongType, setWrongType] = useState(false)

  console.log(imageAsset);

  const uploadImage = (e) => {
    const selectedImage = e.target.files[0]
    if (selectedImage.type === 'image/png' || selectedImage.type === 'image/svg' || selectedImage.type === 'image/jpg' || selectedImage.type === 'image/jpeg' || selectedImage.type === 'image/gif' || selectedImage.type === 'image/tiff') {
      setWrongType(false)
    } else {
      setWrongType(true)
    }
    setImageAsset()
  }

  return (
    <div className='flex flex-col justify-center items-center mt-5 lg:h-4/5'>
      <div className="flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5">
        <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
          <div className="flex flex-col justify-center items-center border-2 border-dotted border-gray-300 w-full h-420">
            {
              !imageAsset ? (
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
              <input 
                type="file" 
                name="upload-image" 
                className='w-0 h-0'
                onChange={uploadImage}
                />
            </label>
              ) : (
                <div className='relative h-full'>
                  <img src={imageAsset?.url}/>
                </div>
              )
            }
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-5 lg:pl-5 mt-5 w-full">
          <input 
            type="text" 
            placeholder='Add title'
            className='outline-none text-2xl sm:text-3xl font-bold border-b-2 border-gray-300 p-2'
            onChange={(event) => setTitle(event.target.value)}
          />
          <input 
            type="text" 
            placeholder='Tell everyone what the Pin about'
            className='outline-none text-base sm:text-lg font-bold border-b-2 border-gray-300 p-2'
            onChange={(event) => setDescription(event.target.value)}

          />
          <input 
            type="text" 
            placeholder='Add a destination link'
            className='outline-none text-base sm:text-lg font-bold border-b-2 border-gray-300 p-2'
            onChange={(event) => setDestination(event.target.value)}

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