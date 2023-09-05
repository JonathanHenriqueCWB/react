const Componente = () => {
    return (
        <>
            <h1>Componente simples</h1>
            <p>
                Um componente é similar a uma função javascript, ou seja,
                é um <strong>componente funcional</strong>, é possivel criar
                componentes de classe, porem o <strong>javascript </strong>
                tratará todos com uma função, no caso de um compoente de classe
                é possivel explorar um construtor na classe. Todo componente React
                retorna código <strong>JSX</strong>
            </p>
            <p>Por padrão todos os componentes devem ser criados dentro de
                um diretorio chamado <strong>components</strong>,que deverá ficar
                detro do diretório <strong>src</strong>. Por padrão a primeira
                letra da nomeclatura de um componente deverá ser maiuscula,
                ou deverá seguir o padrão <strong>CamelCase</strong> se for um nome composto.
            </p>
            <p>Um componente poderá ser utilizado mais de uma vez</p>
            <p>
                Esse compoente está utilizando um <strong>React fragment </strong>
                ao invez de uma div. Ao fazer isso o componente herda toda a formatação
                de seu <strong>container pai</strong>, ou seja, qualquer estilo aplicado
                na div que envolve esse componente la no <strong> App componente </strong>
                será aplicado nesse compoente.
            </p>
        </>
    )
}

export default Componente