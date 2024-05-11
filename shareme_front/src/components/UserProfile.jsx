import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useParams } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import { userQuery, userCreatedPinsQuery, userSavedPinsQuery } from '../utils/data';


const User = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

const UserProfile = () => {
	const { userId } = useParams();
	const [user, setUser] = useState();
	const [activeBtn, setActiveBtn] = useState('created');
	const [pins, setPins] = useState([])

	useEffect(() => {
		const query = userQuery(userId);

		client.fetch(query).then((data) => {
			setUser(data[0])
		})
	}, [userId]);

	useEffect(() => {
		if (activeBtn === 'created') {
			const query = userCreatedPinsQuery(userId);

			client.fetch(query).then((data) => {
				setPins(data)
			})
		} else {
			const query = userSavedPinsQuery(userId);
			client.fetch(query).then((data) => {
				setPins(data)
			})
		}
	}, [userId, activeBtn])

	console.log(User)

	const logOut = () => {
		googleLogout();
		window.localStorage.removeItem('user');
	};
	const activeBtnStyle = 'bg-red-500 text-white font-bold p-2 rounded-full w-20';
	const notActiveBtnStyle = 'bg-primary mr-4 text-black font-bold p-2 rounded-full w-20';
	return (
		<div className='relative pb-2 h-full justify-center items-center'>
			<div className='flex flex-col pb-5'>
				<div className="relative flex flex-col mb-7">
					<div className="flex flex-col justify-center items-center">
						<img
							className='w-full h-370 shadow-lg object-cover 2xl:height-500'
							src="https://source.unsplash.com/1600x900/?nature,photography,technology" alt="" />
						<img
							className='rounded-full w-20 h-20 mt-10 shadow-xl object-cover'
							src={user?.image} alt="" />
					</div>
					<h1 className='font-bold text-3xl text-center mt-3'>{user?.userName}</h1>
					<div className="absolute top-0 z-1 right-0 p-2">
						{userId === User?._id && (
							<button type='button' className='bg-mainColor flex justify-center items-center p-3 rounded-lg outline-none' onClick={logOut}>
								<FcGoogle />
								Logout
							</button>
						)}
					</div>
				</div>
				<div className="text-center mb-7">
					<button
						className={activeBtn === 'created' ? activeBtnStyle : notActiveBtnStyle}
						onClick={() => setActiveBtn('created')}
					>Created</button>
					<button
						className={activeBtn === 'save' ? activeBtnStyle : notActiveBtnStyle}
						onClick={() => setActiveBtn('save')}
					>Saved</button>
				</div>
				<div className="px-2">
					<MasonryLayout pins={pins} />
				</div>
				{pins?.length === 0 && (
					<p className='flex font-bold justify-center items-center w-full text-1xl mt-2'>No Pins Found</p>
				)}
			</div>
		</div>
	)
}

export default UserProfile