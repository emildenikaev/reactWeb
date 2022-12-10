import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostSatusFilter from '../post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {
  return (
  <div className='app'>
    <AppHeader></AppHeader>
    <div className='search-panel d-flex'>
      <SearchPanel></SearchPanel>
      <PostSatusFilter></PostSatusFilter>
    </div>
    <PostList></PostList>
    <PostAddForm></PostAddForm>
  </div>)
}

export default App;