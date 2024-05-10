import React, { useState } from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

import { urlFor } from '../client';

const Pin = ({ pin }) => {
  const [postHovered, setPostHovered] = useState(true);
  const [savingPost, setSavingPost] = useState(false);

  const { postedBy, image, _id, destination } = pin;
  return (
    <div className='m-2'>
      <div className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out'>
        {
          image && (
            <img src={urlFor(image).width(250).url()} alt='alt' />
          )
        }
        {
          postHovered && (
            <div className='absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-100'>
              <div className='flex items-center'>
                <div className='flex gap-2'>
                  <a href={`${image?.asset?.url}?dl=`} 
                      download 
                      onClick={(e) => e.stopPropagation()}
                      className='bg-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md'>
                    
                    <MdDownloadForOffline />
                  </a>
                </div>

              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Pin