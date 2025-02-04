import React, { Component } from 'react'
import  {FaTrash} from "react-icons/fa" 
// корзина
export class Oder extends Component {
  render() {


 return (
  <div className='item'>
    <img src={"/img/" + this.props.item.image} alt={this.props.item.title} />
    <h1>{this.props.item.title}</h1>
    <p>Размер: {this.props.item.size}</p>   
    <h2>{this.props.item.price}сом</h2>
    <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
  </div>
)

  }
}

export default Oder