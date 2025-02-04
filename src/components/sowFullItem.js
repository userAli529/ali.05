import React, { Component } from 'react'

export class sowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
        <img src={"/img/" + this.props.item.image} alt={this.props.item.title}  onClick={()=> this.props.onShowFullItem(this.props.item)}/> 
        <h1>{this.props.item.title}</h1>
        <p>{this.props.item.category}</p>       
        <p>{this.props.item.size}</p>
        <h2>{this.props.item.price}сом</h2>
        <div className="add-to-cart" onClick={()=> this.props.onAdd(this.props.item)} >+</div>
        </div>
      </div>
    )
  }
}

export default sowFullItem