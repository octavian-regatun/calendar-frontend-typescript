import FriendshipStatus from '@/enums/friendshipStatus';

export default interface Friendship {
  requester: string;
  recipient: string;
  status: FriendshipStatus;
}
