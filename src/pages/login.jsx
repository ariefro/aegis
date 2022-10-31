// import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon, Input } from '../components';
import { authenticate } from '../store/userSlice';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [isCredentialValid, setIsCredentialValid] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(authenticate({ username, password })).unwrap();
      router.push('/');
    } catch (err) {
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="heading-l text-dark-purple-1">
          Welcom to
          <br />
          Lakoste Wallet
        </h1>
        <p className=" body-s mt-16 text-grey-4 mb-6">Sign in with</p>
        <Button className="bg-white mr-5" disabled>
          <div className="flex">
            <Icon.Google className="mr-1" />
            Google
          </div>
        </Button>
        <Button className="bg-blue-900 text-white" disabled>
          <div className="flex">
            <Icon.Facebook />
            Facebook
          </div>
        </Button>
        <form className="mt-9" onSubmit={(e) => handleSubmit(e)}>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="w-80 mb-3 mx-auto"
            placeholder="Username"
            type="text"
            prefix={<Icon.ProfileOutlined />}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-80 mx-auto"
            placeholder="Password"
            prefix={<Icon.SquaredKey />}
            suffix={
              <buton
                onClick={() => setIsShowPassword((prevState) => !prevState)}
              >
                <Icon.Hidden
                  className={`${!isShowPassword && `stroke-blue-400`}`}
                />
              </buton>
            }
            type={isShowPassword ? 'text' : 'password'}
          />
          <p className="body-s mt-2 text-red" hidden={!error && true}>
            Username or Password is incorrect
          </p>
          <Button
            className="bg-dark-purple-2 text-white mt-14 w-48"
            type="submit"
            disabled={!username || !password || isLoading}
          >
            <span className="font-quicksand font-semibold text-md">
              {isLoading ? 'Loading' : 'Login'}
            </span>
          </Button>
        </form>
        <p className="body-s text-grey-4 mt-3">
          Don&apos;t have an account yet?{' '}
          <span className="text-blue-700">
            <Link href="/register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
