import { useRequest } from '../request';
import type { FriendRequestSend, FriendRequestReturn } from '@/model/dto/FriendRequest/FriendRequest';

// 获取发送的好友请求列表
export function getSentRequests(senderUserId: number) {
  return useRequest<FriendRequestReturn[]>(`/friend-requests/sent/${senderUserId}`, {
    method: 'GET'
  });
}
