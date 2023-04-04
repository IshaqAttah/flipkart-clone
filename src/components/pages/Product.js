import MegaNav from "../MegaNav";
import { IoCartSharp, IoHeart, IoChevronForwardOutline, IoStar, IoLocation } from 'react-icons/io5'
import { FaBolt, FaTag } from 'react-icons/fa'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ApiCallsContext } from "../context/ApiCallsContext";
import Footer from "../Footer";
import Navigation from "../Navigation";

export default function Product() {
    const [product, setProduct] = useState('')
    const [amountOff, setAmountOff] = useState(0)
    const { id } = useParams()

    const { success_msg, ToastContainer, setFlipKart, setKartItems, setTotal } = useContext(ApiCallsContext)

    useEffect(() => {
        fetch(`http://159.65.21.42:9000/product/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setProduct(data);
                const oldPrice = Math.ceil(parseInt(data.price) / 0.61)
                setAmountOff(oldPrice)
            })
    }, [])

    const HandleAddToCart = () => {
        let forCart = [];
        const cart = JSON.parse(localStorage.getItem('flipkart'))
        if (!cart) {
            forCart.push(product)
            setFlipKart(forCart)
            setKartItems(true)
            localStorage.setItem('flipkart', JSON.stringify(forCart))
            success_msg(product.name + ' added to cart')

            const cartItems = JSON.parse(localStorage.getItem('flipkart'))
            const price = cartItems.reduce((total, cartItems) => total + parseInt(cartItems.price), 0);
            setTotal(price)
        }
        else {
            cart.push(product)
            setFlipKart(cart)
            setKartItems(true)
            localStorage.setItem('flipkart', JSON.stringify(cart))
            success_msg(product.name + ' added to cart')

            const cartItems = JSON.parse(localStorage.getItem('flipkart'))
            const price = cartItems.reduce((total, cartItems) => total + parseInt(cartItems.price), 0);
            setTotal(price)
        }

    }

    return (
        <div>
            <Navigation/>
            <MegaNav />
            <ToastContainer
             position="top-center"
             autoClose={2000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
            >
d
            </ToastContainer>

            <div className="single-product-page">
               {
                product !=="" ?(
                    <>
                     <div className="image-section">
                    <div className="thumbnails">
                        <div>
                            <img src={`http://159.65.21.42:9000${product.image}`} alt="" />
                        </div>
                        <div>
                            <img src={`http://159.65.21.42:9000${product.image}`} alt="" />
                        </div>
                        <div>
                            <img src={`http://159.65.21.42:9000${product.image}`} alt="" />
                        </div>
                        <div>
                            <img src={`http://159.65.21.42:9000${product.image}`} alt="" />
                        </div>
                        <div>
                            <img src={`http://159.65.21.42:9000${product.image}`} alt="" />
                        </div>
                        <div>
                            <img src={`http://159.65.21.42:9000${product.image}`} alt="" />
                        </div>

                    </div>
                    <div className="main-image ">
                        <div className="favorites"><div><IoHeart className="heart" /></div></div>
                        <img src={`http://159.65.21.42:9000${product.image}`} alt="" />
                        <div className="button">
                            <div className="add-to-cart">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        HandleAddToCart()
                                    }}
                                ><IoCartSharp className="cart-icon" /> ADD TO CART</button>
                            </div>
                            <div className="buy-now">
                                <button><FaBolt /> BUY NOW</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="text-section">
                    <div className="head mobile-hide">
                        Home <IoChevronForwardOutline /> Furnitures <IoChevronForwardOutline /> Chairs <IoChevronForwardOutline /> Living Room <IoChevronForwardOutline /> Flipkart Perf...
                        <IoChevronForwardOutline /> Flipkart Perf...
                    </div>
                    <div className="title">
                        <p>{product.name} (Finish Color - BROWN, DIY(Do-It-Yourself))</p>
                    </div>
                    <span className="green">Extra N339 off</span>

                    <div className="rating-section">
                        <div className="flex"> <span>3.8  <IoStar /> </span>5 Ratings & 0 Reviews</div>
                    </div>

                    <div className="price-section">
                        <span className="price">N{product.price} </span> <span><s>N{amountOff}</s> <span className="green">39% off</span></span>
                    </div>

                    <div className="offers">
                        <p>Available offers</p>
                        <p><FaTag className="tag" /> <strong> Special Price </strong> Extra N339 off (price inclusive of discount)  <span className="text-primary"> T&C</span></p>
                        <p><FaTag className="tag" /> <strong>Special Price </strong> 10% off on ICICI Bank Credit Cards (incl. EMI Txns), up to ₹1,500. On orders of ₹5,000 and above  <span className="text-primary"> T&C</span></p>
                        <p><FaTag className="tag" /> <strong>Bank Offer </strong> 10% off on Axis Bank Credit Card and Credit Card EMI Trxns,up to ₹1500. On orders of ₹5000 and above  <span className="text-primary"> T&C</span></p>
                        <p><FaTag className="tag" /> <strong>Bank Offer </strong> 8% off on Flipkart Axis Bank Credit Card, up to ₹1500. On orders of ₹5000 and above  <span className="text-primary"> T&C</span></p>

                    </div>
                    <p className="text-primary">View 13 more offers</p>

                    <div className="details">
                        <div className="d-flex gap-5 mt-5, me-5, mb-5">
                            <span>Warranty</span> <span>1 year warranty on manufacturing defects</span>
                        </div>
                        <div className="flex gap-5  me-5 mb-2">

                            <span>Delivery</span>
                            <div >
                                <div className="delivery-input flex">
                                    <IoLocation />
                                    <input type="text" placeholder="Enter Delivery Pincode" /> <span className="text-primary">Check</span>
                                </div>


                                <div className="flex gap-3 mt-3">
                                    <strong >Usually delivered in 7 days</strong>
                                    <span className="question-mark">?</span>
                                </div>
                                <p>Enter pincode for exact dellivery dates/charges</p>
                                <p className="text-primary">View Details</p>
                            </div>




                        </div>
                        <div className="d-flex gap-5 ">
                            <span>Color</span>
                            <div className="color-images flex gap-4">
                                <div>
                                    <img src={`http://159.65.21.42:9000${product.image}`} alt="" />
                                </div>
                                <div>
                                    <img src={`http://159.65.21.42:9000${product.image}`} alt="" />
                                </div>
                            </div>
                        </div>


                        <div className="d-flex gap-5 ">
                            <span>Highlights</span>
                            <div className="color-images flex gap-4" style={{ width: '50%' }}>
                                <div>
                                    <ul>
                                        <li>Material: Plastic</li>
                                        <li>Color: Brown</li>
                                        <li>W x H x D: 56cm x 78cm x 82cm (1 ft 10 in x 2 ft 8 in)</li>
                                        <li>Weight: 10kg</li>
                                        <li>DIY - Basic assembly to be done with simple tools by the customer, comes with instructions.</li>

                                    </ul>
                                </div>
                            </div>
                            <div>
                                <span>Services</span>
                                <div>1 year warranty on manufacturing defects</div>
                                <span>Installation and Demo Not required</span>
                                <span>10 Days Replacement Policy</span>
                            </div>
                        </div>

                        <div className="d-flex gap-5 ">
                            <span>Seller</span>
                            <div className="color-images flex gap-4">
                                <div className="text-primary">
                                    Restomatt
                                </div>
                                <div>
                                    <span className="bg-primary p-1 text-light">3.8  <IoStar /> </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                    
                    </>
                ):(
                    <h1>Loading, please wait...</h1>
                )
               }
            </div>

            <Footer/>
        </div>
    )
}