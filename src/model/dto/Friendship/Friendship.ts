export interface FriendshipSend {
    userId: number;
    friendId: number;
    CreatedAt: Date;
}

export interface FriendshipReturn {
    id: number;
    userId: number;
    friendId: number;
    createdAt: Date;
}
