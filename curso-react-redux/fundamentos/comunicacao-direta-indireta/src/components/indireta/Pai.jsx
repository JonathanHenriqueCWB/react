import Filho from "./Filho";

export default function Pai(){

    function fornecerInfo(texto) {
        // console.log(texto)
        alert(texto)
    }

    return (
        <div>
            <Filho quandoClicar={fornecerInfo}/>
        </div>
    )
}