import React from 'react';
import Icons from './Icons';
function Menu() {
    return (
        <div className="menu">
            <div className="top-bar">
                <div>Progress: 4 / 128</div>
                <div className='hints-icon hover' >{Icons.x}</div>
            </div>
            <div className="menu__items">
                <div className="menu__item"></div>
            </div>
        </div>
    )
}
export default Menu;