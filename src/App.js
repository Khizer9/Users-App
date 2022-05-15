import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import users from './constants/userConstant';
import UsersList from './components/UsersList';
import Header from './components/Header';

import TodoList from './components/TodoList';

const App = () => { 
  
  return (
   <div className='top'>
     <div className='Header'>
        <Header />
     </div>
     <div>
       <UsersList />
     </div>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsersList/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </div>
  ); 
 

}
export default App;
