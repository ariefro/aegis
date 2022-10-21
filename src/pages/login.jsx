import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Icon, Input } from '../components';

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="heading-l text-dark-purple-1">
          Welcom to
          <br />
          Lakoste Wallet
        </h1>
        <p className=" body-s mt-16 text-grey-4 mb-6">Sign up with</p>
        <Button className="bg-white mr-5" disabled>
          <div className="flex">
            <Icon.Google />
            Google
          </div>
        </Button>
        <Button className="bg-blue-900 text-white" disabled>
          <div className="flex">
            <Icon.Facebook />
            Facebook
          </div>
        </Button>
        <form className="mt-9">
          <Input
            className="w-80 mb-3 mx-auto"
            placeHolder="Username"
            type="text"
            prefix={<Icon.ProfileOutlined />}
          />
          <Input
            className="w-80 mx-auto"
            placeHolder="Password"
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
          <Button className="bg-dark-purple-2 text-white mt-14 w-48">
            <span className="font-quicksand font-semibold text-md">Login</span>
          </Button>
        </form>
        <p className="body-s text-grey-4 mt-3">
          Don&apos;t have an account yet?{' '}
          <span className="text-blue-700">
            <Link href="/">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
