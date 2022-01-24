
import './App.css';
import{
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom"

import Survey, { Home } from './Components/Survey';
import Location from './Components/Location';
import StarPlanets from './Components/StarPlanets';
import StarPeople from './Components/StarPeople';



function App() {
  return (
    <div className="App">
  <BrowserRouter>

        <Switch>
          <Route path="/">
            <Survey/>   
          </Route>
        </Switch>


        <Switch>
          <Route path="/planets/:id">
            <StarPlanets />
          </Route>
        </Switch>



        <Switch>
          <Route path="/people/:id">
            <StarPeople />
          </Route>
        </Switch>


      </BrowserRouter>


    </div>
  );
}

export default App;
