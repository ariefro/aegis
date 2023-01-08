import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import toast from 'react-hot-toast';
import { Button, Icon, Input } from '../components';
import { authenticate } from '../store/userSlice';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    const loadingToast = toast.loading('Loading');
    e.preventDefault();
    const res = await dispatch(authenticate({ username, password })).unwrap();
    if (res) {
      router.push(`/home/${res.wallet[0].id}`);
      toast.success('Welcome!');
    } else {
      toast.error(res.message);
      setUsername('');
      setPassword('');
    }
    toast.dismiss(loadingToast);
  };

  useEffect(() => {
    router.prefetch('/home/[id]');
  }, []);

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
            className="mb-3 mx-auto"
            placeholder="Username"
            type="text"
            prefix={<Icon.ProfileOutlined />}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="mx-auto"
            placeholder="Password"
            prefix={<Icon.SquaredKey />}
            suffix={
              <button
                type="button"
                onClick={() => setIsShowPassword((prevState) => !prevState)}
              >
                <Icon.Hidden
                  className={`${!isShowPassword && `fill-blue-400`}`}
                />
              </button>
            }
            type={isShowPassword ? 'text' : 'password'}
          />
          <Button
            className="bg-dark-purple-2 text-white mt-14 w-48"
            type="submit"
            disabled={!username || !password || loading}
          >
            <span className="font-quicksand font-semibold text-md">
              {loading ? 'Loading' : 'Login'}
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
