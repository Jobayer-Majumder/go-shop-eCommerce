import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/home/Home';
import Header from './Components/header/Header';
import AddProduct from './Components/addProduct/AddProduct';
import PrivateRoute from './Components/privateRoute/PrivateRoute';
import CheckOut from './Components/checkOut/CheckOut';
import Login from './Components/login/Login';
import { createContext, useState } from 'react';
import Admin from './Components/admin/Admin';
import ManageProduct from './Components/manageProduct/ManageProduct';
import Orders from './Components/order/Orders';
import NotFound from './Components/notFound/NotFound';
import Deals from './Components/Deals/Deals';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <PrivateRoute path='/orders'>
            <Orders />
          </PrivateRoute>
          <PrivateRoute path='/manageProduct'>
            <ManageProduct />
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Admin />
          </PrivateRoute>
          <PrivateRoute path='/addProduct'>
             <AddProduct />
          </PrivateRoute>
          <PrivateRoute path='/checkOut/:id'>
            <CheckOut />
          </PrivateRoute>
          <Route path='/deals'>
            <Deals />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
