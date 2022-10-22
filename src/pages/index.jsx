import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  // const handleLogout = () => {
  //   Cookies.remove('test');
  //   router.push('/login');
  // };
  return (
    <div>
      <h1 className="heading-l">You are loged in</h1>
      <button type="button" onClick={() => handleLogout()}>
        Logout
      </button>
    </div>
  );
};

export default Home;
