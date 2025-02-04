import React, { Component } from 'react'
// главный
export class item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSize: this.props.item.size[0] // выбираем первый размер по умолчанию
    }
  }

  handleSizeChange = (e) => {
    this.setState({ selectedSize: e.target.value })
  }

  render() {
    return (
      <div className='item'>
        <img src={"/img/" + this.props.item.image} alt={this.props.item.title}  onClick={()=> this.props.onShowFullItem(this.props.item)}/> 
        <h1>{this.props.item.title}</h1>
        <p>{this.props.item.category}</p>
        <select value={this.state.selectedSize} onChange={this.handleSizeChange}>
          {Array.isArray(this.props.item.size) 
            ? this.props.item.size.map(size => (
                <option key={size} value={size}>{size}</option>
              ))
            : <option value={this.props.item.size}>{this.props.item.size}</option>
          }
        </select>
        <h2>{this.props.item.price}сом</h2>
        <div className="add-to-cart" onClick={()=> this.props.onAdd({...this.props.item, size: this.state.selectedSize})} >+</div>
      </div>
    )
  } 
}

export default item