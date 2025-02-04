import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Itmes from './components/items';
import Categories from './components/caterogeris';
import SowFullItem from './components/sowFullItem';
import About from './components/about';
import Cot from './components/cot';



class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
        osders: JSON.parse(localStorage.getItem('orders')) || [],   
        currenItems:[],
        itmes:[ 
            {
                id: 1,
                title: "Тример",
                image: "photo_2025-01-24_21-02-47.jpg", 
                category: "Home",   
                size: ['30см'],
                price: "1300"
            },
            {
                id: 2,
                title: "Asics",
                category: "Sneakers",
                image: "(WMNS) Asics Court MZ 1203A127-200.jpg",
                size: ['39', '40', '41'],
                price: "200"
            },
            {
                id: 3,
                title: "Wholesale", 
                category: "Hoodie",
                image: "Wholesale Winter Blank Cotton Fleece Hoodie Unisex Zipper Oversize Cotton Custom Hoodie High Quality Cotton Hoodies For Women - Buy Women Winter Blank Cotton Fleece Hoodie Men Casual Oversize Cotton Custom Hoodie H.jpg",
                size: ['XL', '2XL'],
                price: "330"
            },
            {
                id: 4,
                title: "Ethereum",
                category: "Cap", 
                image: "Bonnet Bombardier Kosta en coton - homme - Gris.jpg",
                size: ['L', 'XL'],
                price: "400"
            },
            {  
                id: 5,
                title: "Wholesale",
                category: "Trousers",
                image: "Елена _ AliExpress plus size.jpg",
                size: ['XL', '2XL'],
                price: "500"
            }
        ],
        sowFullItem: false,
        fulItem:{}
    }
    this.state.currenItems=this.state.itmes
    this.addToCart = this.addToCart.bind(this);
    this.deleteOder = this.deleteOder.bind(this);
    this.ChangeCategory=this.ChangeCategory.bind(this);
    this.onShowFullItem=this.onShowFullItem.bind(this);

  }

  componentDidMount() {
    // Load category from sessionStorage
    const savedCategory = sessionStorage.getItem('currentCategory');
    if (savedCategory && savedCategory !== 'all') {
      this.ChangeCategory(savedCategory);
    }
  }

  render() { 
    return (
      <Router>
        <div className='wrapper'>
          <Header osders={this.state.osders} onDelete={this.deleteOder} />
          
          <Routes>
            <Route path="/" element={
              <>
                <Categories ChangeCategory={this.ChangeCategory}/>
                <Itmes onShowFullItem={this.onShowFullItem} itmes={this.state.currenItems} onAdd={this.addToCart} />
                {this.state.sowFullItem && <SowFullItem item={this.state.fulItem} onAdd={this.addToCart} onShowFullItem={this.onShowFullItem}/>}
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/cot" element={<Cot />} />
            
          </Routes>

          <Footer />
        </div>
      </Router>
    )
  }

  onShowFullItem(item){
    this.setState({fulItem: item})
    this.setState({sowFullItem: !this.state.sowFullItem, fulItem: item})
  }

  ChangeCategory(category){ 
    // Save category to sessionStorage
    sessionStorage.setItem('currentCategory', category);
    
    if(category === 'all'){
      this.setState({currenItems: this.state.itmes})
      return 
    }

    this.setState({
      currenItems: this.state.itmes.filter(el=> el.category === category) 
    })
  }

  deleteOder(id) {
    const updatedOrders = this.state.osders.filter(el => el.id !== id);
    this.setState({osders: updatedOrders}, () => {
      // Update localStorage after deleting order
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
    });
  }

  addToCart(item) {
    let isInArray = false;
    this.state.osders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true;
      }
    })
    
    if(!isInArray) {
      const updatedOrders = [...this.state.osders, item];
      this.setState({osders: updatedOrders}, () => {
        // Update localStorage after adding new item
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
      });
    } else {
      const updatedOrders = this.state.osders.map(el => {
        if(el.id === item.id) {
          el.quantity = (el.quantity || 1) + 1;
        }
        return el;
      });
      this.setState({osders: updatedOrders}, () => {
        // Update localStorage after updating quantity
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
      });
    }
  }
}

export default App;
