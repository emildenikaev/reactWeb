import React from 'react'; 

import './post-status-filter.css'

const PostSatusFilter = () => {
  return (
    <div className='btn-group'>
      <button type='button' className="btn btn-info">Все</button>
      <button type='button' className='btn btn-outline-seconary'>Понравилось</button>
    </div>
  )
}

export default PostSatusFilter