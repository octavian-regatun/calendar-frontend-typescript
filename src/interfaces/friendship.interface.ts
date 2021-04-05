export default interface Friendship {
  _id: string;
  requester: string;
  recipient: string;
  status: FriendshipStatus;
}

enum FriendshipStatus {
  PENDING = "P",
  ACCEPTED = "A",
}
