import React from 'react'

export default function Familia(props) {
    return (
        <div>
            {/* Exemplo para quando se tem um unico filho
            {React.cloneElement(props.children, {...props})} */}

            {/* Para quando se tem mais de um componente filho */}
            {props.children.map((child) => {
                return React.cloneElement(child, {...props})
            })}
        </div>
    )
}