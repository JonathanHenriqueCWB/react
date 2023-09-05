import React from 'react'
import './Exemplo1.css'

export default class Exemplo1 extends React.Component {

    state = {
        numero: this.props.numeroInicial
    }

    incrementar = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    render() {
        return (
            <div className='Exemplo1'>
                <h2>Exemplo 01 Class Components</h2>
                <h4>Exemplo de class componente com estado sem constutor na classe</h4>
                <hr />
                <p>
                    Para utilizar estado em um class componente sem construtor, basta
                    apenas usar o <strong>state</strong>, nao precisa declarar o estado,
                    por padrão já se pode utilizar o <strong>state e setState</strong> para
                    persirtir dados no estado da aplicação.
                </p>
                <p>
                    Como não tem arumentos para pegar as propriedades, se utiliza do 
                    <strong> this.nomePropriedade</strong>, para se ter acesso as propriedades
                </p>
                <p>Valor inicial: {this.state.numero}</p>
                <button onClick={() => this.incrementar()}>Incrementar valor</button>
            </div>
        )
    }
}