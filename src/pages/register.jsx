import { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { Button, Icon, Input } from '../components';
import { register } from '../store/userSlice';

const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.loading);
  const { push } = useRouter();

  const [email, setEmail] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(
      register({ email, username, password })
    ).unwrap();
    if (res.code === 200) {
      toast.success('Register success, please login');
      push('/login');
    } else {
      toast.error(res.message);
      setUsername('');
      setPassword('');
      setEmail('');
    }
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
            className="mb-3 mx-auto"
            placeholder="Username"
            type="text"
            prefix={<Icon.ProfileOutlined />}
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="mb-3 mx-auto"
            placeholder="Email"
            type="email"
            prefix={<Icon.EmailOutlined />}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="mx-auto"
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
