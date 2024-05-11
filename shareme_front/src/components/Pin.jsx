import React, { useState } from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import { urlFor, client } from '../client';

const Pin = ({ pin }) => {
	const [postHovered, setPostHovered] = useState(false);
	const [savingPost, setSavingPost] = useState(false);

	const user = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : '';

	const alreadySaved = pin?.save?.filter((item) => item?.postedBy?._id === user?._id);

	const { postedBy, image, _id, destination } = pin;

	const savePin = (id) => {
		client.patch(id)
		.setIfMissing({save: []})
		.insert('after', 'save[-1]', [{
			_key: uuidv4(),
			userId: user?._id,
			postedBy: {
				_type: 'postedBy',
				_ref:  user?._id
			}
		}]).commit().then(() => {
			console.log('Saved', id)
			// window.location.reload();
		})
	}
	return (
		<div className='m-2'>
			<div className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out'
				onMouseEnter={() => setPostHovered(true)}
				onMouseLeave={() => setPostHovered(false)}
			>

				{
					image && (
						<img src={urlFor(image).width(250).url()} alt='alt' className='w-full' />
					)
				}
				{
					postHovered && (
						<div className='absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-100'>
							<div className='flex items-center justify-between'>
								<div className='flex gap-2'>
									<a href={`${image?.asset?.url}?dl=`}
										download
										onClick={(e) => e.stopPropagation()}
										className='bg-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md'>

										<MdDownloadForOffline />
									</a>
								</div>
								{
									alreadySaved?.length !== 0 ? (
										<button
											className='bg-red-500 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 rounded-full hover:shadow-md outline-none'	
										>
											{pin?.save?.length} Saved
										</button>
									) : (
										<button 
											onClick={() => savePin(_id)}
											className='bg-red-500 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 rounded-full hover:shadow-md outline-none'>
											Save
									</button>
									)
								}
								
							</div>
						</div>
					)
				}
			</div>
			<Link className="flex gap-2  mt-2 items-center">
				<img className='w-8 h-8 rounded-full object-cover' src={postedBy?.image}/>
				<p className='font-semibold capitalize'>{postedBy?.userName}</p>
			</Link>
		</div>
	)
}

export default Pin