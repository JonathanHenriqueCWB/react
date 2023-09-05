import React from 'react'
import './Exemplo2.css'

export default class Exemplo2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numero: props.numeroInicial
        }
    }

    incrementar = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    render() {
        return (
            <div className='Exemplo2'>
                <h2>Exemplo 02 - Class Components</h2>
                <h4>Exemplo de class componente com estado utilizando um construtor</h4>
                <hr />
                <p>
                    Nesse caso o estado e declarado 
                    <strong> dentro do construtor</strong>, 
                    juntamente com o super passando as propriedades a ser utilizado
                    na classe
                </p>
                <p>
                    Diferente da classe sem construtor, essa os os paramentros
                    das propriedades são pegas no construtor
                </p>
                <p>Valor inicial: {this.state.numero}</p>
                <button onClick={() => this.incrementar()}>Incrementar valor</button>
                <small>
                    Obs: Em ambos os casos na chamada do evento e utilizado o this.evento,
                    fazer um bind ou transformar as funções todas em arrow function. Uma das três
                    soluções deverá ser adota para evitar erro de endereço de memório.
                </small>
            </div>
        )
    }
}