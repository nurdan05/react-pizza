import React from 'react';
import { Route } from 'react-router-dom';
import {Header} from './components';
import {Home,Cart} from './pages';
import SideBar from './components/navBar';
import Admin from './components/admin';
function App() { 
  const [searchInput, setSearchInput] = React.useState('')
  return (
    <div className="App">
    <div className="wrapper">
      <SideBar />
      <div className="content">
       <Header searchInput={searchInput} setSearchInput={setSearchInput} />
       <Route path="/" render={() => <Home searchInput={searchInput} setSearchInput={setSearchInput} />} exact />
       <Route path="/Cart" component={Cart} exact />
       <Route path="/admin" component={Admin} exact />

      </div>
    </div>
    </div>
  );
}



export default  App;
