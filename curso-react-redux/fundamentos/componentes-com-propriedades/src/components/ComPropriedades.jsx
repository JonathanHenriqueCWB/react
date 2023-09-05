export default function ComPropriedades({titulo, texto}) {
    return (
        <>
            <>{titulo}</>
            <>{texto}</>
            <p style={{color: "blue"}}>
                Esse titulo e texto está sendo passado via propriedades, e recebidas
                em seus parametros
            </p>
        </>
    )
}