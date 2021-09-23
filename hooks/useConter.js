//custom hook no es mas que una funcion
import {useState} from "react";

export const useConter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState);
//factor = 1
    const increment = () => {
        setCounter(counter + 1);
    }
//factor = 1
    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

};