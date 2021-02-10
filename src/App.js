
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProfilePage from './components/ProfilePage';
import {UserContext} from './providers/UserProvider';
import UserProvider from './providers/UserProvider';
import Application from './components/Application';

function App() {
  return (
    <UserProvider><Application /></UserProvider>
  );
}

export default App;
