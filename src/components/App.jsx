import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friends/FriendList';
import { getRandomHexColor } from 'components/Statistics/Statistics';
import user from 'data-files/user.json';
import data from 'data-files/data.json';
import friends from 'data-files/friends.json';

export const App = () => (
  <>
    <Profile data={user} />
    <Statistics data={data} title='Upload stats' backgroundColor={getRandomHexColor} />
    <FriendList data={friends} />
  </>
);
