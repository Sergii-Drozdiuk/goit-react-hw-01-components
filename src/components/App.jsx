import { Profile } from 'components/Profile/Profile';
import user from 'data-files/user.json';

export const App = () => (
  <>
    <Profile data={user} />
  </>
);
