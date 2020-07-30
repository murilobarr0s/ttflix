import React from "react";

function FormField({label,type,fieldType,name,value,onChange}){
    return (
        <div>
            <label>
                {label} :
                <input 
                type={type}
                fieldType={fieldType}
                name={name}
                value = {value}
                onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField;