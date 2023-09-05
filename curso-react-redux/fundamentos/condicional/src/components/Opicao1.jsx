export default function Opcao1({renderizar}) {
    return (
        <div>
            {
                renderizar ? <ComponenteSuport /> : <p>O componente não foi renderizado</p>
            }
        </div>
    )
}

const ComponenteSuport = () => <p>Compoente Suporte renderizado</p>