import { serialize } from 'cookie';
import { sign } from '../../../utils/jwt';

export default async (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    const token = sign({ username: 'admin', password: 'admin', id: 0 });
    const serialized = serialize('token', token, {
      httpOnly: true,
      path: '/'
    });

    res.setHeader('Set-Cookie', serialized);
    res.status(200).json({ message: 'Success!', id: 0 });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
