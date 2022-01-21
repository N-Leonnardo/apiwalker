
import './App.css';
import{
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom"

import { Home } from './Components/Home';
import Location from './Components/Location';



function App() {
  return (
    <div className="App">
  <BrowserRouter>

        <Switch>

          <Route path="/home">
            <Home/>   
          </Route>
          



        </Switch>
        
        <Switch>
          <Route path="/:city/:coloritem/:backcolor">
            <Location />
          </Route>
        </Switch>
        
        <Switch>
          <Route path="/:city/:coloritem">
            <Location />
          </Route>
        </Switch>

        <Switch>
          <Route path="/:city/">
            <Location />
          </Route>
        </Switch>


      </BrowserRouter>


    </div>
  );
}

export default App;
