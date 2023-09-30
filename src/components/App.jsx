import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friends/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from 'data-files/user.json';
import data from 'data-files/data.json';
import friends from 'data-files/friends.json';
import transactions from 'data-files/transactions.json';

export const App = () => (
  <>
    <Profile data={user} />
    <Statistics data={data} title='Upload stats'/>
    <FriendList data={friends} />
    <TransactionHistory data={transactions} />;
  </>
);
