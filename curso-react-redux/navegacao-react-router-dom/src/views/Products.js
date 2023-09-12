import { useParams } from 'react-router-dom'

function Products(){

    const {id} = useParams()

    return (
        <div>
            Págian de produtos, ID informado:
            <strong>{id}</strong>
        </div>
    )
}

export default Products