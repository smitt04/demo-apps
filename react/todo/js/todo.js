const ENTER_KEY = 13;

class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: '',
      items: []
    }
  }


  handleKeyDown(event) {
    console.log('key was pressed');
    if (event.keyCide !== ENTER_KEY) {
      return;
    }
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value })
  }

  render() {
    const items = this.state.items.map(item => {
      return (
        <Item item={item} />
      )
    });

    return (
      <div>
        <h1>ToDo</h1>
        <input type="text" placeholder="Add something..." onChange={this.handleChange.bind(this)} onKeyDown={this.handleKeyDown.bind(this)} value={this.state.newTodo} />
        <ul>{items}</ul>
      </div>
    )
  }
}


window.ToDo = ToDo;
