import './Suporte.css'

export default function Suport({funcao}) {
    return (
        <div>
            <h3>Componente que recebera a função para alterar o estado.</h3>
            <button className='Suporte-button' onClick={() => funcao('Valor alterado com sucesso')}>Alterar estado inicial</button>
        </div>
    )
}