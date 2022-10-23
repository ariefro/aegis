import { serialize } from 'cookie';

export default async (req, res) => {
  try {
    const seraialized = serialize('token', null, {
      httpOnly: true,
      path: '/',
      maxAge: -1
    });

    res.setHeader('Set-Cookie', seraialized);
    return res.status(200).json({ message: 'You are logged out' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};
