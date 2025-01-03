import { useAsyncRequest } from '../request';

import { type LoginReturn, type LoginSend } from '@/model/dto/UserApi/Login';

export function Login(data: LoginSend) {
  return useAsyncRequest<LoginReturn>(
    '/users/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
    false
  );
}
