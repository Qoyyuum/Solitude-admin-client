
import './App.css';
import SignIn from './components/SignIn';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserProvider from './providers/UserProvider';
import Application from './components/Application';

function App() {
  return (
    <UserProvider><Application /></UserProvider>
  );
}

export default App;
