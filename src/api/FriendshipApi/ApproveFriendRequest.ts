import { useRequest } from '../request';
// import type { FriendRequestSend, FriendRequestReturn } from '@/model/dto/FriendRequest/FriendRequest';

// 同意好友请求
export function approveFriendRequest(requestId: number) {
  return useRequest<void>(`/friend-requests/${requestId}/approve`, {
    method: 'POST'
  });
}
