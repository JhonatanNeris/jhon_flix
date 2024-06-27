import { useState } from 'react';

function useForm(valoresIniciais) {

    const [values, setValues] = useState(valoresIniciais)

    const setValue = (chave, valor) => {
        setValues({
            ...values,
            [chave]: valor,

        })
    }

    const handleChange = (info) => {
        setValue(
            info.target.getAttribute('name'),
            info.target.value
        )
    }

    function clearForm() {
        setValues(valoresIniciais);
    }

    return {
        values,
        handleChange,
        clearForm,
    }

}

export default useForm;