import { Route, Switch } from 'react-router-dom';
import  Genre  from './pages/genre/Genre';
import  Subgenre  from './pages/subgenre/Subgenre';
import  AddSubgenre  from './pages/addSubgenre/AddSubgenre';
import  Information  from './pages/information/Information';
import { DUMMY_DATA } from './util/data';

function App() {
 console.log(DUMMY_DATA)
  return (
    <Switch>
      <Route path="/" exact={true}><Genre/></Route>
      <Route path="/subgenre" ><Subgenre/></Route>
      <Route path="/addSubgenre"><AddSubgenre/></Route>
      <Route path="/information"><Information/></Route>
    </Switch>
  );
}

export default App;
