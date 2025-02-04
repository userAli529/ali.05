import React, {Component} from 'react'
import Item from './item'
// роширение
export class Items extends Component {
  render() {
    return (
     <main>
        {this.props.itmes && this.props.itmes.map((item) => (
          <Item key={item.id} item={item} onAdd={this.props.onAdd} onShowFullItem={this.props.onShowFullItem}/>
        ))}
     </main>
    )
  } 
}

export default Items