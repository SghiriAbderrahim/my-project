import React from 'react';
import Element from './Element';

import { useSelector } from 'react-redux';

function Elements(){
    const { existedElements } = useSelector((state) => state.alchemy);
  let obj = existedElements;
    return(
        <div className="elements">
           {
            obj.map((el) => {
                return(<Element element={el}/>)
                
            })
           //elementsArr.filter(el => obj.includes(el.id)).map(el =><Element element={el}/>)
        }
        </div>
    )
}
export default Elements;