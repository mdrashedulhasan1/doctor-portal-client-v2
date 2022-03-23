import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Appointments from './Pages/Home/Appointments/Appointments';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
        <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/appointments'>
            <Appointments></Appointments>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
