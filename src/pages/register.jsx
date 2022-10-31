import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';
import { Button, Icon, Input } from '../components';
import useAxios from '../components/hooks/useAxios';

const Register = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   setIsLoading(true);
    //   const regietered = useAxios({
    //     method: 'post',
    //     url: '',
    //     body: {
    //       username,
    //       email,
    //       password
    //     },
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorizarion: `Bearer {token}`
    //     }
    //   });

    //   if(registered) {
    //     useAxios({method: "post", url: "", body: {
    //       username, password
    //     }, headers: })
    //   }

    //   setIsLoading(false);
    //   router.push('/login');
    // } catch (error) {
    //   setUsername('');
    //   setPassword('');
    //   setEmail('');
    // }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="heading-l text-dark-purple-1">
          Immediately feel the
          <br />
          ease of transacting just
          <br />
          by registering
        </h1>
        <p className=" body-s mt-16 text-grey-4 mb-6">Sign up with</p>
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-80 mb-3 mx-auto"
            placeholder="Email"
            type="email"
            prefix={<Icon.EmailOutlined />}
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
          <p className="body-s mt-2 text-red" hidden={isFormValid && true}>
            {message}
          </p>
          <Button
            className="bg-dark-purple-2 text-white mt-14 w-48"
            type="submit"
            disabled={!username || !email || !password || isLoading}
          >
            <span className="font-quicksand font-semibold text-md">
              {isLoading ? 'Loading' : 'Register'}
            </span>
          </Button>
        </form>
        <p className="body-s text-grey-4 mt-3">
          You have account?{' '}
          <span className="text-blue-700">
            <Link href="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
