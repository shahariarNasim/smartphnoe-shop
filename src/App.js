import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './pages/Shared/Navigation/Navigation';
import Products from './pages/Products/Products';
import NotFound from './pages/NotFound/NotFound';
import Reviews from './pages/Reviews/Reviews';
import Footer from './pages/Footer/Footer';
import Details from './pages/Products/Details';
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute"
import AuthProvider from './contexts/AuthProvider/AuthProvider'
import Order from "./pages/Order/Order"
import AddService from './pages/AddService/AddService'
import ManageOrders from './pages/Order/ManageOrders'
import Pay from './pages/Payment/Pay';
import ManageProduct from './pages/Products/ManageProduct';
import MakeAdmin from './pages/MakeAdmin/MakeAdmin';
import UpdateOrder from './pages/Order/UpdateOrder';
import Allreviews from './pages/Reviews/Allreviews';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path="/Home">
              <Home></Home>
            </Route>

            <Route path="/Products">
              <Products></Products>
            </Route>

            <Route path="/Reviews">
              <Reviews></Reviews>
            </Route>

            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>

            <PrivateRoute path="/Details/:id">
              <Details></Details>
            </PrivateRoute>

            <PrivateRoute path="/Order">
              <Order></Order>
            </PrivateRoute>

            <PrivateRoute path="/ManageOrders">
             <ManageOrders></ManageOrders>
            </PrivateRoute>

            <PrivateRoute path='/Allreviews'>
              <Allreviews></Allreviews>
            </PrivateRoute>

          

            <PrivateRoute path="/MakeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/Orders/Update/:id">
              <UpdateOrder></UpdateOrder>
            </PrivateRoute>

            <Route path="/manageproduct">
              <ManageProduct></ManageProduct>
            </Route>
            <Route path="/AddService">
              <AddService></AddService>
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>

            <Route path="/Register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
