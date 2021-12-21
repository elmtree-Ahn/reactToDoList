import { createGlobalStyle } from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
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
    <TodoTemplate>
      <TodoHead />
      <TodoList />
    </TodoTemplate>
    </>
  );
}

export default App;
