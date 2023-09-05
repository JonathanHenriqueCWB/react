export default function Parent({teste, children}) {
    return (
        <div>
            {
                teste ? children : false
            }
        </div>
    )
}

/* Esse componente irá ou não renderizar seu componente interno
dependendo da propriedade passada pelo pai */