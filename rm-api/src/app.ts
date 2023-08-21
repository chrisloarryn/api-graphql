import { env } from '@/config/environment.js';
import { errorHandler as superTokensErrorHandler } from 'supertokens-node/framework/express/index.js';

import '@/supertokens/index.js';
import { errorMiddleware, corsMiddleware, createContextMiddleware } from '@/middlewares/index.js';
import { initApolloGraphqlServer } from '@/graphql/index.js';

import helmet from 'helmet';
import express, { Router } from 'express';
import cookieParser from 'cookie-parser';
import http from 'http';
import { createTerminus } from '@godaddy/terminus';
import { characterRouter } from '@/modules/character/routes/index.js';

const app = express();

(async () => {
  // IMPORTANT:
  // In case your app is running behind a proxy, you should configure this.
  // Elastic Beanstalk instances for example has an nginx proxy by default.
  // Read more at https://expressjs.com/en/guide/behind-proxies.html
  app.set('trust proxy', true);

  app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));

  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(corsMiddleware());

  app.use(createContextMiddleware());

  const routers: Router[] = [characterRouter];
  app.use(routers);

  app.use(superTokensErrorHandler());
  app.use(errorMiddleware());

  const httpServer = http.createServer(app);

  await initApolloGraphqlServer(app, httpServer);

  createTerminus(httpServer, {
    async onSignal() {
      console.info('server is starting cleanup');
    },
  });

  httpServer.listen(env.PORT, () => {
    console.info(`Server is now up @ ${env.PORT}`);
  });
})();
