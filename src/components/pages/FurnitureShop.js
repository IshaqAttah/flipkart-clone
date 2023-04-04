import MegaNav from "../MegaNav";
import { IoChevronBack, IoChevronForwardOutline } from 'react-icons/io5'

import assured from '../images/shop-images/assured.png'
import one from '../images/shop-images/one.jpeg'
// import { useEffect } from "react";
// import { useState } from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ApiCallsContext } from "../context/ApiCallsContext";
import Navigation from "../Navigation";

export default function FurnitureShop() {
    // const [products, setProducts] = useState([])
    const { products } = useContext(ApiCallsContext)

    // useEffect(() => {
    //     fetch('http://159.65.21.42:9000/products')
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             let myProducts = []
    //             data.map((allProducts) => {
    //                 if (allProducts.category === 'fashion') {
    //                     const oldPrice = Math.ceil(parseInt(allProducts.price) / 0.61)
    //                     allProducts.quantity = oldPrice
    //                     myProducts.push(allProducts)
    //                 }
    //                 return myProducts
    //             })
    //             setProducts(myProducts)
    //         })

    // }, [])






    return (
        <div className="background">
            <Navigation className="navigation" />
            <MegaNav className="navigation" />

            <div >
                <div className="product-page">
                    <div className="sidebar">
                        <h3>
                            Filters
                        </h3>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        CATEGORIES
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <div className="categories">
                                            <p> <IoChevronBack />Furniture</p>
                                            <p><IoChevronBack /> Chairs</p>
                                            <p> Living Room Chairs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        PRICE
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <select name="" id="">
                                            <option value="">Min</option>
                                            <option value="">3000</option>
                                            <option value="">5000</option>
                                            <option value="">800</option>
                                        </select> to
                                        <select name="" id="">
                                            <option value="">5000</option>
                                            <option value="">10000</option>
                                            <option value="">20000</option>
                                            <option value="">50000</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="assured">
                                <input type="checkbox" />
                                <div className="img">
                                    <img src={assured} alt="" />
                                </div>
                                <div className="question-mark">
                                    ?
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        BRAND
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body brand">
                                        <div>
                                            <input type="checkbox" /> <span> Bharat Lifestyle</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" /> <span> WESTIDO</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" /> <span> Flipkart Perfect Homes</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" /> <span> ELTOP</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" /> <span> Allie Wood</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        CUSTOMER RATINGS
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        <div>
                                            <input type="checkbox" /> <span> 4<span className="star">⭐</span> & above </span>
                                        </div>
                                        <div>
                                            <input type="checkbox" /> <span> 3<span className="star">⭐</span> & above </span>
                                        </div>
                                        <div>
                                            <input type="checkbox" /> <span> 2<span className="star">⭐</span> & above </span>
                                        </div>
                                        <div>
                                            <input type="checkbox" /> <span> 1<span className="star">⭐</span> & above </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        OFFERS
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body brand">
                                        <div>
                                            <input type="checkbox" /> <span> No Cost EMI</span>
                                        </div>
                                        <div>
                                            <input type="checkbox" /> <span> Special Price</span>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                BRAND
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                            <div className="accordion-body brand">
                                                <div>
                                                    <input type="checkbox" /> <span> Bharat Lifestyle</span>
                                                </div>
                                                <div>
                                                    <input type="checkbox" /> <span> WESTIDO</span>
                                                </div>
                                                <div>
                                                    <input type="checkbox" /> <span> Flipkart Perfect Homes</span>
                                                </div>
                                                <div>
                                                    <input type="checkbox" /> <span> ELTOP</span>
                                                </div>
                                                <div>
                                                    <input type="checkbox" /> <span> Allie Wood</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="main-content">
                        <div className="head">
                            Home <IoChevronForwardOutline /> Furnitures <IoChevronForwardOutline />
                            Chairs <IoChevronForwardOutline />
                            Living Room
                        </div>

                        <div className="head-text">
                            <p>Fabric Living Room Chairs, Plastic Living Room Chairs, Metal Living Room Chairs, Solid Wood Living Room Chairs </p>
                            <p><b>Furniture Bestsellers</b> (Showing 1- 40 products of 114 products) </p>
                            <p className="mobile-hide"><b>Sort By </b> Price - Low to High  Price - High to Low  Newest First  Discount </p>

                        </div>

                        <div className="product-section">

                            {/* <div className="product">
                                <div className="product-image">
                                    <img src={one} alt="" />
                                </div>
                                <div className="product-details">
                                    <p className="title">Purple Hive Fabric Living Room Chair</p>
                                    <p className="color"><span>Finish Color - </span> Royal Blue, DIY(Do-It-Yourself)</p>
                                    <p><b>N10, 000</b> <s>N19,000</s> <span className="green">46% off</span></p>
                                    <p className="free-delivery">Free Delivery</p>
                                    <button>Bank Offer</button>
                                </div>

                            </div> */}



                            {
                                products.map((product) => {
                                    return (
                                        <div className="product " key={product._id}>
                                            <Link to={`/product/${product._id}`}>
                                                <div className="product-image">
                                                    <img src={`http://159.65.21.42:9000${product.image}`} alt="" />
                                                </div>
                                                <div className="product-details">
                                                    <h5>{product.name}</h5>
                                                    <p className="color"><span >Finish Color - </span > Royal Blue, DIY(Do-It-Yourself)</p>
                                                    <p><b>N{product.price}</b> <s>N{product.quantity}</s></p>
                                                    <p className="free-delivery">Free Delivery</p>
                                                    <button>Bank Offer</button>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }

                            {/* <div className="product">
                                <div className="product-image">
                                    <img src={two} alt="" />
                                </div>
                                <div className="product-details">
                                    <h5>Purple Hive Fabric Living Room Chair</h5>
                                    <p className="color"><span >Finish Color - </span > Royal Blue, DIY(Do-It-Yourself)</p>
                                    <p><b>N10, 000</b> <s>N19,000</s></p>
                                    <p className="free-delivery">Free Delivery</p>
                                    <button>Bank Offer</button>
                                </div>
                            </div> */}

                            {/* <div className="product">
                                <div className="product-image">
                                    <img src={three} alt="" />
                                </div>
                                <div className="product-details">
                                    <h5>Purple Hive Fabric Living Room Chair</h5>
                                    <p className="color"><span>Finish Color - </span> Royal Blue, DIY(Do-It-Yourself)</p>
                                    <p><b>N10, 000</b> <s>N19,000</s></p>
                                    <p className="free-delivery">Free Delivery</p>
                                    <button>Bank Offer</button>
                                </div>
                            </div> */}

                            {/* <div className="product">
                                <div className="product-image">
                                    <img src={four} alt="" />
                                </div>
                                <div className="product-details">
                                    <h5>Purple Hive Fabric Living Room Chair</h5>
                                    <p className="color"><span>Finish Color - </span> Royal Blue, DIY(Do-It-Yourself)</p>
                                    <p><b>N10, 000</b> <s>N19,000</s></p>
                                    <p className="free-delivery">Free Delivery</p>
                                    <button>Bank Offer</button>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}