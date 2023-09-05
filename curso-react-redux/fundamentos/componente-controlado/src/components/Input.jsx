import './Input.css'

export default function Input({funcao, value}) {
    return (
        <form>
            <input type="text" name="text" id="text" onChange={e => funcao(e.target.value)} value={value} />
        </form>
    )
}