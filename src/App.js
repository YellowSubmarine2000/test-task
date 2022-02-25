import './App.sass';
import ToDoList from './components/ToDoList';
import ToDoEdit from './components/ToDoEdit';

function App() {
  return (
    <div className="Wraper">
    <ToDoList date="17.02.2022" time="16:34" content="WARNING in ./src/App.sass (./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[7].use"/>
    <ToDoEdit/>
    </div>
  );
}

export default App;
