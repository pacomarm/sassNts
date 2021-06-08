import { useState } from "react"

export const useForm = ( initialState={} ) => {
    
    const [values, setValues] : [values: any, setValues: any] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setValues(newFormState);
        
    }

    const handleInputChange = ({target}: {target:any}) => {
    setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values, handleInputChange, reset]
}