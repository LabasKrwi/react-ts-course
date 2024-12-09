import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';

function App() {
  return (
    <div>
      <BrowserRouter>
            <div>
              <NavLink to='/users'>Пользователи</NavLink>
              <NavLink to='/todos'>Список дел</NavLink>
            </div>
            <Routes>
              <Route path='/users' element={<UserPage/>}/>
              <Route path='/todos' element={<TodosPage/>}/>
              <Route path='/users/:id' element={<UserItemPage/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
