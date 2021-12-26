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
      투두리스트 더 편집야 합니다.  https://react.vlpt.us/mashup-todolist/01-create-components.html
    </TodoTemplate>
    </>
  );
}

export default App;
