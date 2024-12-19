import { useRequest } from '../request';
// import type { FriendRequestSend, FriendRequestReturn } from '@/model/dto/FriendRequest/FriendRequest';

// 拒绝好友请求
export function rejectFriendRequest(requestId: number) {
  return useRequest<void>(`/friend-requests/${requestId}/reject`, {
    method: 'POST'
  });
}
