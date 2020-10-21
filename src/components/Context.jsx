import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Air Jordan",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9415db98-d31b-4099-a5f6-9a051a8a651b/air-jordan-1-mid-se-mens-shoe-P7bjRV.jpg",
                "description": "Basketball Shoe",
                "content": "Lorem ipsum dolor sit amet, vero placerat voluptatibus vis in, his eius gubergren cu. Vim ferri probatus ea. Sed ne semper dissentiet, mea assum mucius civibus cu, ut mel option singulis. Vim no labitur aliquid accumsan, no errem veritus eloquentiam vix. Sea ne facer lobortis. Esse quot nullam ea mea, duo cu nobis labitur instructior, ex nec omnis dolorem.",
                "price": 150,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Kobe AD NXT",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a8cda810-eab2-4542-861f-ad668faf895d/kobe-ad-nxt-basketball-shoe-mjMpsD.jpg",
                "description": "Basketball Shoe",
                "content": "Lorem ipsum dolor sit amet, vero placerat voluptatibus vis in, his eius gubergren cu. Vim ferri probatus ea. Sed ne semper dissentiet, mea assum mucius civibus cu, ut mel option singulis. Vim no labitur aliquid accumsan, no errem veritus eloquentiam vix. Sea ne facer lobortis. Esse quot nullam ea mea, duo cu nobis labitur instructior, ex nec omnis dolorem.",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike React Infinity Run Fly",
                "src": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/59342fd3-52a2-46a8-839d-593342fa381d/react-infinity-run-flyknit-womens-running-shoe-c54NMG.jpg",
                "description": "Women's Running Shoe",
                "content": "Lorem ipsum dolor sit amet, vero placerat voluptatibus vis in, his eius gubergren cu. Vim ferri probatus ea. Sed ne semper dissentiet, mea assum mucius civibus cu, ut mel option singulis. Vim no labitur aliquid accumsan, no errem veritus eloquentiam vix. Sea ne facer lobortis. Esse quot nullam ea mea, duo cu nobis labitur instructior, ex nec omnis dolorem.",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Air Max 97 Pendleton",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/833db450-7b77-40cd-914a-89f0686e1f7f/custom-nike-air-max-97-pendleton-by-you.jpg",
                "description": "Custom Shoe",
                "content": "Lorem ipsum dolor sit amet, vero placerat voluptatibus vis in, his eius gubergren cu. Vim ferri probatus ea. Sed ne semper dissentiet, mea assum mucius civibus cu, ut mel option singulis. Vim no labitur aliquid accumsan, no errem veritus eloquentiam vix. Sea ne facer lobortis. Esse quot nullam ea mea, duo cu nobis labitur instructior, ex nec omnis dolorem.",
                "price": 225,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Nike Air Max 90 QS",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bda2d1e4-d37d-42f7-b643-441097774df1/air-max-90-qs-little-kids-shoe-3X69lw.jpg",
                "description": "Little Kids' Shoe",
                "content": "Lorem ipsum dolor sit amet, vero placerat voluptatibus vis in, his eius gubergren cu. Vim ferri probatus ea. Sed ne semper dissentiet, mea assum mucius civibus cu, ut mel option singulis. Vim no labitur aliquid accumsan, no errem veritus eloquentiam vix. Sea ne facer lobortis. Esse quot nullam ea mea, duo cu nobis labitur instructior, ex nec omnis dolorem.",
                "price": 90,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Kybrid S2",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9be7bbfc-b4bb-4511-9972-12f2790e47b8/kybrid-s2-big-kids-basketball-shoe-rbNpgm.jpg",
                "description": "Big Kids' Basketball Shoe",
                "content": "Lorem ipsum dolor sit amet, vero placerat voluptatibus vis in, his eius gubergren cu. Vim ferri probatus ea. Sed ne semper dissentiet, mea assum mucius civibus cu, ut mel option singulis. Vim no labitur aliquid accumsan, no errem veritus eloquentiam vix. Sea ne facer lobortis. Esse quot nullam ea mea, duo cu nobis labitur instructior, ex nec omnis dolorem.",
                "price": 110,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Kybrid S2",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9be7bbfc-b4bb-4511-9972-12f2790e47b8/kybrid-s2-big-kids-basketball-shoe-rbNpgm.jpg",
                "description": "Big Kids' Basketball Shoe",
                "content": "Lorem ipsum dolor sit amet, vero placerat voluptatibus vis in, his eius gubergren cu. Vim ferri probatus ea. Sed ne semper dissentiet, mea assum mucius civibus cu, ut mel option singulis. Vim no labitur aliquid accumsan, no errem veritus eloquentiam vix. Sea ne facer lobortis. Esse quot nullam ea mea, duo cu nobis labitur instructior, ex nec omnis dolorem.",
                "price": 110,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Kybrid S2",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9be7bbfc-b4bb-4511-9972-12f2790e47b8/kybrid-s2-big-kids-basketball-shoe-rbNpgm.jpg",
                "description": "Big Kids' Basketball Shoe",
                "content": "Lorem ipsum dolor sit amet, vero placerat voluptatibus vis in, his eius gubergren cu. Vim ferri probatus ea. Sed ne semper dissentiet, mea assum mucius civibus cu, ut mel option singulis. Vim no labitur aliquid accumsan, no errem veritus eloquentiam vix. Sea ne facer lobortis. Esse quot nullam ea mea, duo cu nobis labitur instructior, ex nec omnis dolorem.",
                "price": 110,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Kybrid S2",
                "src": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9be7bbfc-b4bb-4511-9972-12f2790e47b8/kybrid-s2-big-kids-basketball-shoe-rbNpgm.jpg",
                "description": "Big Kids' Basketball Shoe",
                "content": "Lorem ipsum dolor sit amet, vero placerat voluptatibus vis in, his eius gubergren cu. Vim ferri probatus ea. Sed ne semper dissentiet, mea assum mucius civibus cu, ut mel option singulis. Vim no labitur aliquid accumsan, no errem veritus eloquentiam vix. Sea ne facer lobortis. Esse quot nullam ea mea, duo cu nobis labitur instructior, ex nec omnis dolorem.",
                "price": 110,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}