import { useRequest } from '../request';
import type { FriendRequestSend, FriendRequestReturn } from '@/model/dto/FriendRequest/FriendRequest';

export function getReceivedRequests(receiverUserId: number) {
  return useRequest<FriendRequestReturn[]>(`/friend-requests/received/${receiverUserId}`, {
    method: 'GET'
  });
}
