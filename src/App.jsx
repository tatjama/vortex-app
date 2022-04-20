import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import GenreContext  from './store/genre-context';
import Layout from './components/layout/Layout';
import  Genre  from './pages/genre/Genre';
import  Subgenre  from './pages/subgenre/Subgenre';
import  AddSubgenre  from './pages/addSubgenre/AddSubgenre';
import  Information  from './pages/information/Information';
import Success from './pages/success/Success';

function App() {

  const genreCtx = useContext(GenreContext);
  const genre = genreCtx.selectedGenre;
  const subgenre = genreCtx.selectedSubgenre;
  const isAddSubgenreShow = genreCtx.isAddSubgenreShow;

  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}><Genre/></Route>
        {genre && <Route path="/subgenre" ><Subgenre/></Route>}
        {isAddSubgenreShow && <Route path="/addSubgenre"><AddSubgenre/></Route>}
        {genre && subgenre&& <Route path="/information"><Information/></Route>}
        <Route path="/success"><Success/></Route>
      </Switch>
    </Layout>
  );
}

export default App;
