import "./App.css";
import {createGlobalStyle} from "styled-components"
import Main from "./componetes/Main/Main";
import Header from "./componetes/Header/Header";
import Footer from "./componetes/Footer/Footer";


export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: 'Montserrat', sans-serif;
  li{
  list-style: none;
}
}`
function App() {
  return (
    <div>
      
      <GlobalStyled/>
      <Header/>
      <Main/> 
       <Footer/>

    </div>
    

  );
}

export default App;
