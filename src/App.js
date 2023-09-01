
import { useContext } from 'react';
import Content from './Content';
import { themeContext } from './ThemeContext';

function App() {
  const context = useContext(themeContext)
  console.log(context);
  return (
    <div className="App">
      <button onClick={context.toggleTheme}>Toggle</button>
      <Content />
    </div>
  );
}

export default App;
