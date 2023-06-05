import React from 'react';
import {editMixingElements} from '../redux/conterSlice';
import { useDispatch} from 'react-redux';
function Element(prompt){
    const dispatch = useDispatch();
    const {element}=prompt;
    const putElement=(ele)=>{
      let  el = {type:'push',id:ele}
        dispatch(editMixingElements(el));
    }
    return (
        <div className='element el'>
            <div className='image' onClick={()=>{putElement(element)}}>
            <img src={`./images/${element}.png`} alt={element} /> 
            </div>
            <p>{element}</p>
        </div>
        )
}
export default Element;