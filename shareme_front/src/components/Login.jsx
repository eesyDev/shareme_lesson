import React, { useEffect, useState } from 'react';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { gapi } from 'gapi-script';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import bgVideo from '../assets/share.mp4';
import { setAuthState } from '../redux/slices/authSlice';
import logo from '../assets/logowhite.png';
import { client } from '../client.js';

const Login = () => {
	const navigate = useNavigate();
	const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

	const dispatch = useDispatch();

	const userRed = useSelector((state) => state.authSlice)

	console.log(userRed)

	const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
			setUser(codeResponse)
		},
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
		if (user) {
			axios
				.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
					headers: {
						Authorization: `Bearer ${user.access_token}`,
						Accept: 'application/json'
					}
				})
				.then((res) => {
					setProfile(res.data);
				})
				.catch((err) => console.log(err));
		}
	},[ user ]);

	useEffect(() => {
		if (profile.id) {
			const doc = {
				_id: profile.id,
				_type: 'user',
				userName: profile.name,
				image: profile.picture
			};
	
			client.createIfNotExists(doc)
			.then(() => {
				localStorage.setItem('user', JSON.stringify(doc));
				navigate('/', { replace: true });
			})
			.catch(error => {
				console.error('Create is failed: ', error);
			});
		}
	}, [profile, navigate]);

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
	
	

	return (
		<div className='flex justify-start items-center flex-col'>
			<div className="relative w-full h-full">
				<video
					src={bgVideo}
					type="video/mp4"
					loop
					controls={false}
					muted
					autoPlay
					className='w-full h-full object-cover'
				/>
				<div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
					<div className='p-5'>
						<img src={logo} width="130px" />
					</div>
					<div className=''>
						<button type='button' className='bg-mainColor flex justify-center items-center p-3 rounded-lg outline-none' onClick={login}>
							<FcGoogle/>
							Sign in with Google
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login