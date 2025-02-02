import { createSlice } from '@reduxjs/toolkit';
import elementsArr from '../redux/ElementsJson';
let mixId;
let mixImage;
let settings = { darkMode: true, color: 180, language: "en" };
let existedElements = ["water", "soil", "air", "fire"];
let mixingElements = [];
if (localStorage.getItem('existedElements')) {
  let item = localStorage.getItem('existedElements');
  existedElements = JSON.parse(item);
}
if (localStorage.getItem('settings')) {
  let item = localStorage.getItem('settings');
  settings = JSON.parse(item);
}

const setItem = (name, donne) => {
  let item = JSON.stringify(donne);
  localStorage.setItem(name, item);
}

export const counterSlice = createSlice(
  {
    name: 'alchemy',
    initialState: {
      mixingElements: mixingElements,
      existedElements: existedElements,
      settings: settings,
      mixId: mixId,
      mixImage: mixImage,
    },
    reducers: {
      changeSettings: (state, action) => {
        switch (action.payload.type) {
          case "color":
            state.settings.color = action.payload.value;
            break;

          case "darkMode":
            state.settings.darkMode = !state.settings.darkMode;
            break;

          case "language":
            state.settings.language = action.payload.value;
            break;
          default:
            console.log('error in settings');
        }
        setItem('settings', state.settings);
      },
      editMixingElements: (state, action) => {

        switch (action.payload.type) {
          case "push":
            if (state.mixingElements.length < 3) {
              state.mixingElements.push(action.payload.id)
            }
            break;
          case "pop":
            state.mixingElements.splice(state.mixingElements.indexOf(action.payload.id), 1);
            break;
          default:
            console.log('error in mixing elements')
            break;
        }
        
      },
      putExistedElements: (state,action)=>{
        if(!state.existedElements.includes(state.mixId) && state.mixId !== undefined){
         state.existedElements.push(state.mixId);
         state.mixingElements=[];
        }
      },
      dedectMixing: (state, action) => {
        let mix = [];
        state.mixingElements.forEach(element => {
            mix.push(element)
        });
        let mixString = mix.sort().join('');
        let check=false;
        elementsArr.forEach((item) => {
            let ing = item.ingredients.sort().join('');
            if (mixString === ing && mixString !== '' ){
                state.mixId = item.id
                check=true;
             }
            
            }) 
        if(!check){
             state.mixId=undefined;
        }    
           
         if(state.existedElements.includes(state.mixId)){
              state.mixImage=state.mixId;
          }else{
            state.mixImage=undefined;
          }     
    },
    },
  }
);

export const { changeSettings, editMixingElements,putExistedElements,dedectMixing } = counterSlice.actions;

export default counterSlice.reducer;
