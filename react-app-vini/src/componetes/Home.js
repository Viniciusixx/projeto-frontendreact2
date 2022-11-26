import {
  Main2,
  Mae3,
  Img,
  ImgMais,
  TextCortados,
  ImgLinImg,
  Flextudo,
} from "./styles";
import { useState, useEffect } from "react";
import Carrinho from "./Carrinho";
import Filtro from "./Filtro";
import Main from "./Main/Main";

function Home() {
  const produtos = [
    {
      id: 1,
      nome: "Duplamente Mordomo`s",
      preco: 199.9,

      precoantigo: 274.9,
      imagem: "./astro17.png",
    },

    {
      id: 2,
      nome: "Astro Key Cinza",
      preco: 129.9,
      precoantigo: 189.9,

      imagem: "./astro11.png",
    },

    {
      id: 3,
      nome: "Astro Key Branco",
      preco: 129.9,
      precoantigo: 189.9,

      imagem: "./astro10.png",
    },

    {
      id: 4,
      nome: "Duplamente Astro",
      preco: 199.9,
      precoantigo: 274.9,

      imagem: "./astro16.png",
    },

    {
      id: 5,
      nome: "Astro do Tempo",
      preco: 159.9,
      precoantigo: 219.9,

      imagem: "./astro5.png",
    },

    {
      id: 6,
      nome: "Astro Chaveiro",
      preco: 129.9,
      precoantigo: 189.9,

      imagem: "./astro12.png",
    },

    {
      id: 7,
      nome: "Astro Cheirinho",
      preco: 229.9,
      precoantigo: 299.9,

      imagem: "./astro8.png",
    },

    {
      id: 8,
      nome: "Astro Puri'ar",
      preco: 229.9,
      precoantigo: 299.9,

      imagem: "./astro9.png",
    },

    {
      id: 9,
      nome: "Astro Seu Tempo",
      preco: 149.9,
      precoantigo: 219.9,

      imagem: "./astro3.png",
    },

    {
      id: 10,
      nome: "Jogador Astro",
      preco: 149.9,
      precoantigo: 219.9,

      imagem: "./astro2.png",
    },

    {
      id: 11,
      nome: "Astro de volta ao Lar",
      preco: 159.9,
      precoantigo: 229.9,

      imagem: "./astro6.png",
    },
    {
      id: 12,
      nome: "Os 3 Astros",
      preco: 289.9,
      precoantigo: 379.9,

      imagem: "./astro13.png",
    },
    {
      id: 13,
      nome: "Contemplem a Lua",
      preco: 289.9,
      precoantigo: 379.9,

      imagem: "./astro14.png",
    },
    {
      id: 14,
      nome: "Contemplem o Sol",
      preco: 289.9,
      precoantigo: 379.9,

      imagem: "./astro15.png",
    },
    {
      id: 15,
      nome: "Jogador Astro Cinza",
      preco: 149.9,
      precoantigo: 219.9,

      imagem: "./astro4.png",
    },
    {
      id: 16,
      nome: "Astro pra lua Branco",
      preco: 149.9,
      precoantigo: 189.9,

      imagem: "./astro1.png",
    },
    {
      id: 16,
      nome: "Astro do Equilibrio",
      preco: 199.9,
      precoantigo: 274.9,

      imagem: "./astro18.png",
    },
  ];
  const [carrinho, setCarrinho] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [valorMinimo, setValorMinimo] = useState("");
  const [valorMaximo, setValorMaximo] = useState("");
  const [ordem, setOrdem] = useState("");

  const onChangeCarrinho = (event) => {
    setCarrinho(event.target.value);
  };

  const onChangeOrdem = (event) => {
    setOrdem(event.target.value);
  };

  //FUNÇÃO PARA COMPRA DE PRODUTOS NO CARRINHO
  const compraProduto = (produto) => {
    const novoCarrinho = [...carrinho];
    const produtoAdicionado = produto;

    const produtoExistente = novoCarrinho.find((produto) => {
      return produto.id === produtoAdicionado.id;
    });
    if (produtoExistente) {
      produtoExistente.quantidade++;
      produtoExistente.precototal =
        produtoExistente.quantidade * produtoExistente.preco;
    } else {
      novoCarrinho.push({
        ...produtoAdicionado,
        quantidade: 1,
        precototal: produtoAdicionado.preco,
      });
    }
    setCarrinho(novoCarrinho);
  };

  useEffect(() => {
    if (carrinho.length > 0) {
      const listaStringCarrinho = JSON.stringify(carrinho);
      localStorage.setItem("carrinho", listaStringCarrinho);
    }
  }, [carrinho]);

  useEffect(() => {
    const novoCarrinho = JSON.parse(localStorage.getItem("carrinho"));
    if (novoCarrinho !== null) {
      setCarrinho(novoCarrinho);
    }
  }, []);

  const somaTela = (produtos) => {
    produtos
      .filter((produto) => {
        return produto.nome.includes(pesquisa);
      })
      .filter((produto) => {
        return produto.preco >= valorMinimo;
      })
      .filter((produto) => {
        return valorMaximo ? produto.preco <= valorMaximo : produto;
      })
      .map((produto, index) => {
        return produto.length;
      });
  };
  return (
    <Flextudo>
      <Filtro
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        minimo={valorMinimo}
        setMinimo={setValorMinimo}
        maximo={valorMaximo}
        setMaximo={setValorMaximo}
      />
      
      <Main2>
      <div className="boxcentral-topo">
          <div>
            <h3>Quantidade de Produtos:</h3>
            <p>{produtos.length} produtos</p>
          </div>
          <div>
            <select
              value={ordem}
              onChange={onChangeOrdem}
              className="boxcentral-topo-select"
            >
              <option value="">Ordenar por</option>
              <option value="Maior">Preço: do maior para o menor</option>
              <option value="Menor">Preço: do menor para o maior</option>
            </select>
          </div>
        </div>
        <Mae3>
            
          {produtos
            //Busca de produto pelo nome
            .filter((produto) => {
              return produto.nome.includes(pesquisa);
            })
            //filtrar produtos a partir do menor valor
            .filter((produto) => {
              return produto.preco >= valorMinimo;
            })
            //filtrar produtos a partir do menor valor
            .filter((produto) => {
              return valorMaximo ? produto.preco <= valorMaximo : produto;
            })
            //Ordenar do maior e do menor
            .sort((a, b) => {
              switch (ordem) {
                case "Maior":
                  if (a.preco < b.preco) {
                    return 1;
                  } else {
                    return -1;
                  }
                case "Menor":
                  if (a.preco < b.preco) {
                    return -1;
                  } else {
                    return 1;
                  }
              }
            })
            // Comando para renderizar todos os produtos da loja
            .map((produto, index) => {
              return (
                <div key={index}>
                  <Img src={produto.imagem} alt="Produto-Loja" />
                  <ImgMais className="imagemmais">
                    <h1>{produto.nome}</h1>

                    <span
                      onClick={() => compraProduto(produto)}
                      onChange={onChangeCarrinho}
                    >
                      <svg
                        width="40"
                        height="40"
                        class="aaaaa"
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
                        <path d="M12 8.25v7.5"></path>
                        <path d="M15.75 12h-7.5"></path>
                      </svg>
                    </span>
                  </ImgMais>

                  <TextCortados className="textoscortados">
                    <ImgLinImg className="imglinimg">
                      <h2>R$ {produto.preco}0</h2>
                      <h4 className="vinicorte">R$ {produto.precoantigo}0</h4>
                    </ImgLinImg>
                    <p>POR TEMPO LIMITADO!</p>
                  </TextCortados>
                </div>
              );
            })}
        </Mae3>
      </Main2>
      <Carrinho cesta={carrinho} setCesta={setCarrinho} />
    </Flextudo>
  );
}

export default Home;
