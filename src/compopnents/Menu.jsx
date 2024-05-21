import { useEffect, useState } from 'react';
import './Menu.css';
import icon_white from "/src/assets/add_icon_white.png";
import icon_red from "/src/assets/remove_icon_red.png";

const Menu = ({ menu, food, cart, AddToCart, DecrementFromCart }) => {

    const [selectedCategory, setSelectedCategory] = useState("");
    const [activeMenuItem, setActiveMenuItem] = useState(''); // State to track the active menu item

    
    const filterFoodByCategory = (category,index) => {
        setSelectedCategory(category);
        setActiveMenuItem(index); // Set the active menu item
    };



    return (
        <div className='samrt-scroll-menu' id='smart-scroll-menu'>  
            <div className="menu-heading">
                <h1>MENU</h1>
                <p>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            </div>
            <div className="menu-nav-bar">
                {menu.map((value, i) => (
                     <div key={i} className={`menu-items ${activeMenuItem === i ? 'active-menu-items' : ''}`} onClick={() => filterFoodByCategory(value.title, i)}>
                        <img src={value.imgurl} alt="" />
                        <h1>{value.title}</h1>
                    </div>
                ))}
            </div>
            <br />
            <hr />

            <div className="FOOD_ITEMS">
                {selectedCategory === "" ? (
                    food.map((element, i) => {
                        const quantity = cart.find(cartItem => cartItem.id === element.id)?.quantity || 0;
                        return (
                            <div key={i} className='card'>
                                <img src={element.image} alt="" />
                                <div className={`add-cart ${quantity > 0 ? 'visible_div' : ''}`}>
                                    <img src={icon_red} alt="" className={`icon_red ${quantity > 0 ? 'visible_red_icon' : ''}`} onClick={() => DecrementFromCart(element._id)} />
                                    <h3 className={quantity > 0 ? 'visible_counter' : 'hidden_counter'}>{quantity}</h3>
                                    <img src={icon_white} alt="" className={`icon_white ${quantity > 0 ? 'visible_counter' : ''}`} onClick={() => AddToCart(element)} />
                                </div>
                                <div className="title-heading-price">
                                    <h4>Price : ${element.price}</h4>
                                    <h3>{element.name}</h3>
                                </div>
                                <p>{element.description}</p>
                            </div>
                        );
                    })
                ) : (
                    food.filter((variable) => variable.category === selectedCategory).map((element, i) => {
                        const quantity = cart.find(cartItem => cartItem.id === element.id)?.quantity || 0;
                        return (
                            <div key={i} className='card'>
                                <img src={element.image} alt="" />
                                <div className={`add-cart ${quantity > 0 ? 'visible_div' : ''}`}>
                                    <img src={icon_red} alt="" className={`icon_red ${quantity > 0 ? 'visible_red_icon' : ''}`} onClick={() => DecrementFromCart(element._id)} />
                                    <h3 className={quantity > 0 ? 'visible_counter' : 'hidden_counter'}>{quantity}</h3>
                                    <img src={icon_white} alt="" className={`icon_white ${quantity > 0 ? 'visible_counter' : ''}`} onClick={() => AddToCart(element)} />
                                </div>
                                <div className="title-heading-price">
                                    <h4>Price : ${element.price}</h4>
                                    <h3>{element.name}</h3>
                                </div>
                                <p>{element.description}</p>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Menu;
