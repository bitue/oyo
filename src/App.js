import { BrowserRouter, Route, Switch } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import CreateService from "./components/CreateService/CreateService";
import Footer from "./components/Footer/Footer";
import Galary from "./components/Galary/Galary";
import ManageOrders from "./components/ManageOrders/ManageOrders";
import Mybooking from "./components/Mybooking/Mybooking";
import Mybookings from "./components/Mybookings/Mybookings";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import Notify from "./components/Notify/Notify";
import Payment from "./components/Payment/Payment";
import Services from "./components/Services/Services";
import Signin from "./components/Signin/Signin";
import AuthProvider from "./Context/AuthProvider";
import Privateroute from "./Privateroute/Privateroute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Nav></Nav>
              <Banner></Banner>
              <Services></Services>
              <Galary></Galary>
              <Notify></Notify>
              <Footer></Footer>



            </Route>
            <Route exact path='/home'>
              <Nav></Nav>
              <Banner></Banner>
              <Services></Services>
              <Galary></Galary>
              <Notify></Notify>
              <Footer></Footer>


            </Route>

            <Privateroute exact path='/my-bookings'>
              <Nav></Nav>
              <Mybookings></Mybookings>
              <Footer></Footer>


            </Privateroute>

            <Privateroute exact path='/manageOrder'>
              <Nav></Nav>
              <ManageOrders></ManageOrders>
              <Footer></Footer>


            </Privateroute>
            <Privateroute exact path='/createService'>
              <Nav></Nav>
              <CreateService></CreateService>
              <Footer></Footer>


            </Privateroute>

            <Privateroute path='/my-booking/:id'>
              <Nav></Nav>
              <Mybooking></Mybooking>
              <Footer></Footer>


            </Privateroute>

            <Route path='/sign-in'>
              <Nav></Nav>
              <Signin></Signin>
              <Footer></Footer>

            </Route>

            <Route path='/payment'>
              <Nav></Nav>
              <Payment></Payment>
              <Footer></Footer>


            </Route>
            <Route path='*'>
              <NotFound></NotFound>

            </Route>

          </Switch>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
