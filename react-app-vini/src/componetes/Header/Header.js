import React from "react";
import { HeaderComplete, H1p3, Aha3, TamanhoSub} from "./styled";



function Header() {
    return(
        <>
        <HeaderComplete className="class1header">
        
        <H1p3 className="h1ep">
          <div id="botoes">
            <a href="/">
              <svg
                width="57"
                height="57"
                class="aaaaa"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-width="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727v0Z"></path>
                <path d="M15.857 15.86 21 21.001"></path>
              </svg>
            </a>
          </div>

          <h1>ASTRO DEV'S</h1>

          <div>
            <a href="/">
              <svg
                width="57"
                height="57"
                class="aaaaa"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12v6"></path>
                <path d="M15 15H9"></path>
                <path
                  d="M3.75 8.25A.75.75 0 0 0 3 9v10.125c0 1.418 1.207 2.625 2.625 2.625h12.75c1.418 0 2.625-1.149 2.625-2.566V9a.75.75 0 0 0-.75-.75H3.75Z"
                  clip-rule="evenodd"
                ></path>
                <path d="M7.5 8.25v-1.5a4.5 4.5 0 0 1 4.5-4.5v0a4.5 4.5 0 0 1 4.5 4.5v1.5"></path>
              </svg>
            </a>
          </div>
        </H1p3>
        <div>
          <TamanhoSub className="tamanhosub">
            O ESPAÇO PERFEITO PARA OS DEV'S DAS ESTRELAS
          </TamanhoSub>
        </div>

        <ul className="class2ul">
          <Aha3>
            <a href="/">Menu</a>
          </Aha3>
          <Aha3>
            <a href="/">Contato</a>
          </Aha3>
          <Aha3>
            <a href="/">Produtos</a>
          </Aha3>
          <Aha3>
            <a href="/">Conheça a AstroDev`s</a>
          </Aha3>
        </ul>
        
        <input type="checkbox" id="active"/>
          <label for="active" class="menu-btn"><span></span></label>
          <label for="active" class="close"></label>
          <div class="wrapper">
          <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Dev's</a></li>
          </ul>
          </div>
          <div class="content">
                <div class="title"/>

          </div>
      </HeaderComplete>
        </>
    )
}

export default Header