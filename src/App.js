import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import logo from './logo.svg';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    
  }
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <TodoTemplate>헬로우!</TodoTemplate>
    </>
  );
}

export default App;
