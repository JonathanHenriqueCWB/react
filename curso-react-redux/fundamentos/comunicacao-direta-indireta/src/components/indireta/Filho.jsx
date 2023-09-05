export default function Filho(props) {
    
    const texto ='Texto passado do compoente filho para componente pai'

    return (
        <div>
            <p>Componete filho - comunicação indireta</p>
            <button onClick={() => props.quandoClicar(texto)}>
                Fornecer informações
            </button>
        </div>
    )
}