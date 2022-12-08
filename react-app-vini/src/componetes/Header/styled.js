import  styled  from "styled-components";


export const HeaderComplete = styled.header`
display: flex;


  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(55, 55, 55);
  border-radius: 20px;
  margin: 40px 70px 0px 70px;
  @media screen and (max-device-width: 930px){
    width: 791px;
    margin: 62px ;
  }
`
export const TamanhoSub = styled.header`
display: flex;
    width: 100%;
    justify-content: center;
    color: rgb(255, 255, 255);
  font-family: 'Nosifer', sans-serif;
`
export const H1p3 = styled.h1`
line-height:20px;
    align-items: center;
    display: flex;
    width: 100%;
    color: rgb(255, 251, 2);
    font-family: 'Nabla', sans-serif;
    font-size: 2rem;
    margin-top: 20px;
    justify-content: space-between;
    white-space: nowrap;
    @media screen and (max-device-width: 1074px){
      font-size: 1.8rem;
      width: 80%;
    }
    @media screen and (max-device-width: 942px){
      font-size: 1.6rem;
    }
    @media screen and (max-device-width: 878px){
      font-size: 1.4rem;
    }
`
export const Aha3 = styled.h3`
    list-style: none;
    border: 1px solid rgb(0, 0, 0);
    background-color: rgba(255, 166, 0, 0.404);
    border-radius: 7px;
    font-size: 24px;
    margin: 2px 0px;
    padding: 2px 10px;
    padding-bottom: 1px;
    transition: all 0.3s ease-in-out;
    :hover{
    background-color: rgba(255, 166, 0, 0.61);
    padding-left: 5px;
    padding-right: 5px;
    transition: transform 0.3s ease;

  }
  :active{
    background-color: rgb(255, 166, 0);
    padding-left: 20px; 
    padding-right: 20px;
  }
`

