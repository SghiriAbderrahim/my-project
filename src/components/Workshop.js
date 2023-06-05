import React from 'react';
import Icons from './Icons';
import { editMixingElements,putExistedElements} from '../redux/conterSlice';
import { useSelector, useDispatch } from 'react-redux';
import elementsArr from '../redux/ElementsJson';
function Workshop() {
    const { mixingElements,existedElements } = useSelector((state) => state.alchemy);
    let obj = mixingElements;
    const dispatch = useDispatch();
   
    const deletElement = (id) => {
        let el = { type: 'pop', id: id }
        dispatch(editMixingElements(el));
        
    }
    var mixId;
    var mixImage;
    const dedectMixing = () => {
        let mix = [];
        obj.forEach(element => {
            mix.push(element)
        });
        let mixString = mix.sort().join('');
        elementsArr.forEach((item) => {
            let ing = item.ingredients.sort().join('');
            if (mixString === ing && mixString !== '' ) {
                mixId = item.id
            }
            if(existedElements.includes(item.id)){
                mixImage=mixId;
            }else{
                mixImage=undefined;
            }
        })
        
        
    }
    dedectMixing();
    const mixing = ()=>{
       
        dispatch(putExistedElements(mixId));
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