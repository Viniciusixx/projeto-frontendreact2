import {BoxLateralCarrinho} from "./styles"

function Carrinho (props){

    let totalCarrinho = 0

   
    const somaCarrinho = ()=>{
        for (let i = 0;i<props.cesta.length;i++){
            totalCarrinho += props.cesta[i].precototal
        }
        return
    }

    const removeItem = (produto)=>{
        const buscaItem = props.cesta.filter((item) => item !== produto)
        props.setCesta(buscaItem)
    }
    const compraFeita = ()=>{
        alert(`Parabéns pela compra! O valor ficou em R$ ${totalCarrinho.toFixed(2)} reais`)
    }

    somaCarrinho()

    return(
        <BoxLateralCarrinho>
        <h2>Carrinho:</h2>
        
            {props.cesta.map((produto,index)=>{
            return(
                <div key={index} onClick={()=>removeItem(produto)}>
                <p><span>+{produto.quantidade} </span><span>{produto.nome} </span><span> <b>{produto.precototal.toFixed(2)}</b></span></p>
                </div>
            )
            
        })}
        
        <p><b>Valor total: R$ {totalCarrinho.toFixed(2)}</b></p>
        <button onClick={compraFeita}>Comprar</button>
        </BoxLateralCarrinho>
    )
}


export default Carrinho