import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home/Home'
import AuthProvider from './Context/AuthProvider';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ServiceDetail from './components/Home/ServiceDetail/ServiceDetail';
import TakingInfo from './components/TakingInfo/TakingInfo';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Registration from './components/Registration/Registration';
import News from './components/News/News';
import Contacts from './components/Contact/Contacts';
import Test from './components/Test/Test';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header />
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route exact path='/home'>
              <Header />
              <Home></Home>
              <Footer></Footer>
            </Route>
            <PrivateRoute exact path='/services/:serviceId'>
              <Header />
              <ServiceDetail></ServiceDetail>
              <Footer></Footer>
            </PrivateRoute>
            <Route exact path='/login'>
              <Header />
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route exact path='/reg'>
              <Header />
              <Registration />
              <Footer></Footer>
            </Route>
            <PrivateRoute exact path='/info/:name'>
              <Header />
              <TakingInfo></TakingInfo>
              <Footer></Footer>
            </PrivateRoute>
            <Route exact path='/news'>
              <Header />
              <News />
              <Footer></Footer>
            </Route>
            <Route exact path='/contact'>
              <Header />
              <Contacts />
              <Footer></Footer>
            </Route>
            <Route path='/test'>
            <Header />
              <Test></Test>
              <Footer></Footer>
            </Route>


            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
