//import ToDo from './js/todo.js'

console.log(ToDo)

class App extends React.Component {
  render() {
    return (
      <div>
        <ToDo />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
