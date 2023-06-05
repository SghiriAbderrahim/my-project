import React from 'react';
import Ingredient from './Ingredient';
function Hint(prompt) {
    const { element } = prompt;
    return (
        <div className='hint el'>
            <div className='image'>

                <img src={`./images/${element.id}.png`} alt="logo" />
            </div>
            <p>{element.id}</p>
            <div className="ingredients">
                {element.ingredients.map((e)=>{return <Ingredient el={e}/>})}
            </div>
        </div>
    )
}
export default Hint;