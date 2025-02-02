import React from 'react';
import {editMixingElements, dedectMixing} from '../redux/conterSlice';
import { useDispatch} from 'react-redux';
function Element(prompt){
    const dispatch = useDispatch();
    const {element}=prompt;
    const putElement=(ele)=>{
      let  el = {type:'push',id:ele}
        dispatch(editMixingElements(el));
        dispatch(dedectMixing())
    }
    return (
        <div className='element el' key={element}>
            <div className='image' onClick={()=>{putElement(element)}}>
            <img src={`./images/${element}.png`} alt={element} /> 
            </div>
            <p>{element}</p>
        </div>
        )
}
export default Element;