import { useState } from 'react'; 

 
 

const useInput = (validateValue) => { 

//valeur par défaut de l'input
  const [enteredValue, setEnteredValue] = useState(''); 

  const [isTouched, setIsTouched] = useState(false); 

  
  //valider les valeurs saisies
  const valueIsValid = validateValue(enteredValue); 

  const hasError = !valueIsValid && isTouched; 

 
//Récupère la valeur de l'input
  const valueChangeHandler = (event) => { 
    setEnteredValue(event.target.value);
    console.log(enteredValue)
  }; 

//Sert a changé le useState quand on est sur un input
  const inputBlurHandler = (event) => { 
    setIsTouched(true); 
    console.log(isTouched)
  }; 

//réinitialiser les valeurs de l'input
  const reset = () => { 
    setEnteredValue(''); 
    setIsTouched(false); 
  }; 

//retourne les valeurs de l'input
  return { 
    value: enteredValue, 
    isValid: valueIsValid, 
    hasError, 
    valueChangeHandler, 
    inputBlurHandler, 
    reset 
  }; 

}; 

 
export default useInput; 