import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories:[
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'Cap', 
                    name: 'Шапка'
                },
                {
                    key: 'Hoodie',
                    name: 'Худи',
                },
                {          
                    key: 'Trousers',
                    name: 'Штаны'     
                },
                {
                    key: 'Sneakers',
                    name: 'Кроссовки'
                },
                {          
                    key: 'Home',
                    name: 'Для-дома'
                }
            ]
        }
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.ChangeCategory(el.key)}>
                        {el.name}
                    </div>
                ))} 
            </div>
        )
    }
}

export default Categories