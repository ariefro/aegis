import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { logout } from '../store/userSlice';

const LogoutPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(logout())
      .unwrap()
      .then(() => router.replace('/login'));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen gap-2">
      <Image src="/spinner.gif" alt="spinner" width={80} height={80} />
      <p>Logging out</p>
    </div>
  );
};

export default LogoutPage;
