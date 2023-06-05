import React from 'react';
import Icons from './Icons';
function NavBare() {
    return(
    <div className='NavBare'>

      <label className='search'>
        <div className=' hover'>{Icons.search}</div>
        <input type='search' placeholder='Search'/>
      </label>

        <div className='show-menu hover'>{Icons.menu}</div>

    </div>
    )
}
export default NavBare;