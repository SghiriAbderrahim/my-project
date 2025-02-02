import React from 'react';
import Icons from './Icons';
import Hint from './Hint';
import elementsArr from '../redux/ElementsJson';
import { useSelector } from 'react-redux';

function Hints(){
let hints=[];
    const { existedElements } = useSelector((state) => state.alchemy);
  let obj = existedElements;

  elementsArr.forEach((el)=>{
let check = el.ingredients.every((e) => {
  return  obj.includes(e);
})
if(check && !obj.includes(el.id)){
    if(!hints.includes(el)){
    hints.push(el);
    } 
}
  });
  
    let toggle=true;
    const hintsToggle=()=>{
        const Icon1= document.querySelector('.hints-icon .hintIcon');
        const Icon2= document.querySelector('.hints-icon .x');
        const hintsDiv= document.querySelector('.hints-div');
        if(toggle){
            hintsDiv.style.height='100vh';
            Icon1.style.display="none";
            Icon2.style.display="block";
        }else{
            hintsDiv.style.height='6vh';
            Icon2.style.display="none";
            Icon1.style.display="block";
        }
        toggle=!toggle;
    }
    return(
        <div className="hints-div">
<div className="top-bar">
    <div>Hints: 3</div>
<div className='hints-icon hover' onClick={()=>{hintsToggle()}}>{Icons.hint} {Icons.x}</div>
</div>
<div className="hints">
{hints.map(el =><Hint element={el}/>)}


</div>
        </div>
    )
}
export default Hints;