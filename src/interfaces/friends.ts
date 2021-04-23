import FriendshipStatus from '@/enums/friendshipStatus';
import User from './user';

export default interface Friend {
  user: User;
  status: FriendshipStatus;
}
