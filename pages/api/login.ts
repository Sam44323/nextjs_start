import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken/';

const KEY = 'THISISTHEKEY';

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.status(404).end('Please enter a some value for authentication!');
    return;
  }
  const { username, password } = req.body;
  console.log(username, password);
  res.status(200).json({
    token: jwt.sign(
      {
        username,
        admin: password === 'somevalue',
      },
      KEY,
      {
        expiresIn: '1h',
      }
    ),
  });
}
