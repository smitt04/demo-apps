class Item extends React.Component {
  render() {
    return (<li>{this.props.item.name}</li>)
  }
}

window.Item = Item
