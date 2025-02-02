import React from 'react';
import Icons from './Icons';
import { editMixingElements,putExistedElements,dedectMixing} from '../redux/conterSlice';
import { useSelector, useDispatch } from 'react-redux';

function Workshop() {
    const { mixingElements, mixImage } = useSelector((state) => state.alchemy);
    let obj = mixingElements;
    const dispatch = useDispatch();
   
    const deletElement = (id) => {
        let el = { type: 'pop', id: id }
        dispatch(editMixingElements(el));
        dispatch(dedectMixing())
    }
    
    
    
    const mixing = ()=>{
       
        dispatch(putExistedElements());
    }
    return (
        <div className="workshop">
            <div className="cell" >
                <img onClick={() => { deletElement(obj[0]) }} src={`./images/${obj[0]}.png`} alt={obj[0]} />
            </div>
            <div className="cell" >
                <img onClick={() => { deletElement(obj[1]) }} src={`./images/${obj[1]}.png`} alt={obj[1]} />
            </div>
            <div className="cell" >
                <img onClick={() => { deletElement(obj[2]) }} src={`./images/${obj[2]}.png`} alt={obj[2]} />
            </div>
            <div className="arrow">{Icons.arrow}</div>
            <div onClick={() => { mixing(obj) }} className="palette">
                <img src={`./images/${mixImage}.png`} alt={mixImage} />

                {Icons.mix}
            </div>
        </div>
    )
}
export default Workshop;