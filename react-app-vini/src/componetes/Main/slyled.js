import  styled  from "styled-components";

export const Main2 = styled.main`
display: flex;
    justify-content: center;
`

export const Mae3 = styled.div`
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    justify-content: space-evenly;
    padding: 30px 100px 40px 100px;
    column-gap:  23px;
    row-gap: 20px;
    max-width: 1100px;
    
    background-color: rgba(0, 0, 0, 0.308);
  margin-bottom: 200px;
  border-radius: 0px 0px 200px 200px;

  div{
    width: 200px;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.767);
    border-radius: 200px 200px 10px 40px;
    padding: 3px;
    border: 2px solid rgb(2, 2, 2);

  }
  h1{
    color: rgb(0, 2, 0);
    font-size: 1.4rem;
    font-family: 'Modern Antiqua', sans-serif;
  }
  svg{
    stroke:rgba(255, 166, 0, 0.801);
    margin: 0;
    padding: 3px;
    
    background-color: rgba(254, 254, 254, 0);
  }
  svg:hover{
    padding: 0px;
    
    stroke:rgb(255, 166, 0);
  }
  svg:active{
    padding: 8px;
    stroke:rgb(255, 166, 0);
  }
  h2{
    font-size: 1.6rem;

  }
  p{
    color: rgb(255, 0, 0);
    font-size: 0.8rem;
    text-align: center;
    font-family: 'Aclonica', sans-serif;

  }
`

export const Img = styled.img`
    border-radius: 200px;
    padding: 5px ;
    background-color: rgba(0, 0, 0, 0.412);
    width: 190px;
    height: 190px;
    transition: all 0.3s ease-in-out;
    :hover{
        padding: 5px ;
    background-color: rgba(0, 0, 0, 0.932);
    -webkit-transform: scale(1.4);
      transform: scale(1.4);
    }
    :active{
    padding: 2px ;
    background-color: rgba(0, 0, 0, 0.932);
    transition: all 0.01s ease-in-out;
  }
`
export const ImgMais = styled.section`
display: flex;
    justify-content: space-evenly;
`
export const TextCortados = styled.section`
display: flex;
    align-items: flex-end;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ImgLinImg = styled.section`
 display: flex;
 align-items: flex-end;
`
