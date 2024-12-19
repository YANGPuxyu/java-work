import { useRequest } from '../request';

import type { FriendRequestSend, FriendRequestReturn } from '@/model/dto/FriendRequest/FriendRequest';

export function sendFriendRequest(data:FriendRequestSend){
  return useRequest<FriendRequestReturn|null>('/friend_requests/sent/{senderUserId}', {
    method: 'POST',
    headers: {
      'Content-Type'  : 'application/json'
    },
    body: JSON.stringify(data)
  })
}
