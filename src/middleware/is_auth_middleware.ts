import {MiddlewareFn} from 'type-graphql';
import {MyContext} from '../context/my_context';
import {verify} from 'jsonwebtoken';

export const isAuth: MiddlewareFn<MyContext> = ({context}, next) => {
  const authorization = context.req.headers['authorization'];

  if (!authorization) {
    throw new Error('not authorized');
  }

  try {
    const token = authorization.split(' ')[1];
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    context.payload = payload as any;
  } catch (error) {
    console.log(error);
    throw error;
  }

  return next();
};
