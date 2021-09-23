import {useState} from "react";

//rsc
export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = (() => {
        setValues(initialState);
    })

    const handleInputChange = (({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
            //name: e.target.value
        })
    });

    return [
        values,
        handleInputChange,
        reset,
    ];


};
