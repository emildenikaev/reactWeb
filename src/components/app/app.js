import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostSatusFilter from '../post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

  const data = [{label: 'Going to learn React', important: true, id: 'wrwer'},
                {label: 'Good', important: false, id: 'fghfg'},
                {label: 'Just do it', important: false, id: 'rewt'},
];

  return (
  <div className='app'>
    <AppHeader></AppHeader>
    <div className='search-panel d-flex'>
      <SearchPanel></SearchPanel>
      <PostSatusFilter></PostSatusFilter>
    </div>
    <PostList posts={data}></PostList>
    <PostAddForm></PostAddForm>
  </div>)
}

export default App;