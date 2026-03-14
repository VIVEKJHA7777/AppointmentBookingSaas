import { IJwtUserPayload } from './index.ts';

declare global {
  namespace Express{
    interface Request{
      userId?: string;
    }
  }
}
export {};