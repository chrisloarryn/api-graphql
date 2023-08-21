import { Options, createProxyMiddleware } from 'http-proxy-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import runMiddleware from './run-middleware';

const proxy =
  (options: Options) => async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res, createProxyMiddleware(options));
    res.end();
  };

export default proxy;
