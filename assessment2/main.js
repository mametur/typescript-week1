import { encryptText } from './modules/encrypt.js';
let shiftValue, textValue;

const shiftElement = document.getElementById('shift');
const textElement = document.getElementById('plaintext');
const decryptedElement = document.getElementById('encryptedtext');


const getShiftValue = shiftElement.addEventListener("change", (e)=> {
   shiftValue = e.target.value;
   console.log('shiftValue', shiftValue)
});

const getTextValue = textElement.addEventListener("keyup", (e)=> {
    textValue = e.target.value;
    if (shiftValue){
       const result =  encryptText(textValue,shiftValue);
       decryptedElement.value = result;
    }
   console.log('textValue', textValue)
});

