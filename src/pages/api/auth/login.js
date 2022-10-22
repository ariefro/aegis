import { serialize } from 'cookie';

export default async (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTUxNjIzOTAyMn0.7pdDOjbISbfYZryCd1hFW7yvEh5MnS9LlICHEETXrds';
    const serialized = serialize('token', token, {
      https: true,
      path: '/'
    });

    res.setHeader('Set-Cookie', serialized);
    res.status(200).json({ message: 'Success!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
