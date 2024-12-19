import { useRequest } from '../request';
// import type { FriendshipSend, FriendshipReturn } from '@/model/dto/Friendship/Friendship';


// 移除好友
export function removeFriend(userId: number, friendId: number) {
  return useRequest<void>(`/friendships/users/${userId}/friends/${friendId}`, {
    method: 'DELETE'
  });
}
