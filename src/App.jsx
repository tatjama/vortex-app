import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import  Genre  from './pages/genre/Genre';
import  Subgenre  from './pages/subgenre/Subgenre';
import  AddSubgenre  from './pages/addSubgenre/AddSubgenre';
import  Information  from './pages/information/Information';
import { DUMMY_DATA } from './util/data';

function App() {
 console.log(DUMMY_DATA)
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}><Genre/></Route>
        <Route path="/subgenre" ><Subgenre/></Route>
        <Route path="/addSubgenre"><AddSubgenre/></Route>
        <Route path="/information"><Information/></Route>
      </Switch>
    </Layout>
  );
}

export default App;
