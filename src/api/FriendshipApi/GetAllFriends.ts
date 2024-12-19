import { useRequest } from '../request';
import type { FriendshipSend, FriendshipReturn } from '@/model/dto/Friendship/Friendship';

// 添加好友
export function addFriend(data: FriendshipSend) {
  return useRequest<FriendshipReturn | null>('/friendships', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}
