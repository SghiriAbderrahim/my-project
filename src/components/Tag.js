import React from 'react';
import { NavLink } from 'react-router-dom';
function Tag(prompt){
    const {type}=prompt;
return(
    <NavLink to={(type === "All")?"/":`/${type}`}>
        <div className="tag">{type}</div>
    </NavLink>
)
}
export default Tag;