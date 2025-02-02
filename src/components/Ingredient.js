import React from 'react';
function Ingredient(prompt) {
    const {el}=prompt;
    return (
        <div className="ingredient">
            <div className='image'>
            <img src={`./images/${el}.png`} alt={el} />
            </div>
            <p className="title">{el}</p>
        </div>
    )
}
export default Ingredient;