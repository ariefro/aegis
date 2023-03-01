import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { logout } from '../store/userSlice';

const LogoutPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(logout())
      .unwrap()
      .then(() => router.replace('/login'));
  }, []);

  return null;
};

export default LogoutPage;
