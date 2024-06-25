import React from 'react'

const FormField = ({ label, value, onChange, type, name }) => {
    return (
        <label>
            <span>{label}:</span>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    )
}

export default FormField