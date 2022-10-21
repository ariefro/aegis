import React from 'react';
import { Button, Icon, Input } from '../components';

const Login = () => (
  <div className="text-center">
    <h1 className="heading-l text-dark-purple-1 mt-28">
      Welcom to
      <br />
      Lakoste Wallet
    </h1>
    <p className=" body-s mt-16 text-grey-4 mb-6">Sign up with</p>
    <Button className="bg-white mr-5">
      <div className="flex">
        <Icon.Google />
        Google
      </div>
    </Button>
    <Button className="bg-blue-900 text-white">
      <div className="flex">
        <Icon.Facebook />
        Facebook
      </div>
    </Button>
    <div className="text-center mt-9">
      <Input className="w-80 mb-3" placeHolder="Username" type="text" />
      <Input className="w-80" placeHolder="Password" type="password" />
    </div>
    <Button className="bg-dark-purple-2 text-white mt-14 w-48">
      <span className="font-quicksand font-semibold text-md">Login</span>
    </Button>
  </div>
);

export default Login;
