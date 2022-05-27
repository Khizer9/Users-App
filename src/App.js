import './App.css';
import { BrowserRouter, Route, Routes, useHistory } from "react-router-dom";
import UsersList from './components/UsersList';
import { GET_USERS_DATA, GET_USERS_DATA_SUCCESS } from './store/actions/users.action';
import UserProfile from './components/UserProfile';
const App = () => {
  return (
    <div className='top'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UsersList />} />
          <Route path='/user-profile' element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );


}
export default App;
