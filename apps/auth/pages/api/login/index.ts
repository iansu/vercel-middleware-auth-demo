import { NextApiRequest, NextApiResponse } from 'next';

const isValidPassword = (password: string) => {
  const validPasswords = process.env.PASSWORDS.split(',').map((password) => password.trim());

  if (validPasswords.includes(password)) {
    return true;
  }
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  if (isValidPassword(body.password)) {
    res.status(201).json({ message: 'Authorized' });
  } else {
    res.status(401).json({ message: 'Invalid password' });
  }
};

export default handler;
