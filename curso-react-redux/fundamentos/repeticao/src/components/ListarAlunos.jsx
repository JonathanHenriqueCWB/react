import alunos from '../data/alunos'

export default function ListarAlunos() {

    console.log(alunos[0].nome)

    return (
        <div>
            <nav>
                <ul>
                    {alunos.map((a, i) => {
                        return (
                            <li key={i}>Nome: {a.nome} Nota: {a.nota}</li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}