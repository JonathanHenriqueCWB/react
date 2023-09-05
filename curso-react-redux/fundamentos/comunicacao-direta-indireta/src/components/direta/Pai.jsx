import Filho from "./Filho";

export default function Pai() {

    const titulo = 'Comunicação direta exemplo'
    const texto = 'Texto e titulo passa por parametros como exemplo'

    return (
        <div>
            <Filho titulo={titulo} texto={texto} />
        </div>
    )
}