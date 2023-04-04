import { Link } from 'react-router-dom'
import { IoSearchSharp, IoCaretDown, IoCart, IoChevronBack, IoClose } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../components/images/nav-images/logo.png'
import plus from '../components/images/nav-images/plus.png'
import topOffers from '../components/images/nav-images/top-offers.webp'
import mobiles from '../components/images/nav-images/mobiles.webp'
import fashion from '../components/images/nav-images/fashion.webp'
import electronics from '../components/images/nav-images/electronics.webp'
import beauty from '../components/images/nav-images/beauty.webp'
import homeFurnish from '../components/images/nav-images/home and furniture.webp'
import appliances from '../components/images/nav-images/appliances.webp'
import travel from '../components/images/nav-images/travel.webp'
import grocery from '../components/images/nav-images/grocery.webp'
import { useContext, useState } from 'react'
import { ApiCallsContext } from './context/ApiCallsContext'
import Login from './pages/Login'
export default function Navigation() {

    const { flipkart } = useContext(ApiCallsContext)

    const { loginBtn, setLoginBtn, onMobile, setOnMobile } = useContext(ApiCallsContext)
    return (
        <div className='navigation-page'>
            {
                loginBtn ? (<Login />) : (null)
            }
            <div className="navContainer">
                <nav className='flex'>

                    <div className="logo-area flex">
                        <div className="logo-image">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                            <div className='flex gap-1'>Explore <span className='plus'> Plus</span>
                                <img src={plus} alt="" className='plus-img flex-top' />
                            </div>
                        </div>

                        <div className="search-area flex">
                            <input type="search" placeholder='Search for products, brands and more' />
                            <span className="search-img"><IoSearchSharp /></span>
                        </div>
                        <button onClick={() => setLoginBtn(true)}>Login</button>
                        <button  > <Link to='/admin' className='nav-link'>Admin</Link> </button>
                        {/* <div><Link to='/admin'>Admin</Link></div> */}

                    </div>


                    <div className='mobile-nav'>
                        {/* <GiHamburgerMenu/> */}
                    </div>


                    <div className="nav-links flex">
                        <div><Link to='/'>Become a Seller</Link></div>
                        <div><Link to='/'>More <IoCaretDown className='caret' /></Link></div>
                        <div><Link to='/cart'><IoCart className='cart-icon' /> <span className='cart-number'>{flipkart.length}</span> Cart</Link></div>

                    </div>

                </nav>
            </div>





            <div className='mobile-nav'>

                <div className="logo-area ">
                    <div className="logo-image">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                        <div className='flex gap-1'>Explore <span className='plus'> Plus</span>
                            <img src={plus} alt="" className='plus-img ' />
                        </div>
                    </div>


                    <div className='toggle-area'>

                        <div>
                            <Link to='/cart'>
                                <IoCart className='cart-icon' />
                                <span className='cart-number'>{flipkart.length}</span>
                            </Link>
                        </div>


                     {
                        !onMobile &&(
                            <div className='toggler' onClick={() => setOnMobile(!onMobile)}>
                            <GiHamburgerMenu />
                        </div>
                        )
                     }

                        {
                            onMobile && (
                                <div className='toggler' onClick={() => setOnMobile(!onMobile)}>
                                    <IoClose />
                                </div>
                            )
                        }
                    </div>

                </div>


                {
                    onMobile && (
                        <div className="nav-links ">
                            <div className="search-area flex">
                                <input type="search" placeholder='Search for products, brands and more' />
                                <span className="search-img"><IoSearchSharp /></span>
                            </div>
                            <button onClick={() => {
                                setLoginBtn(true)
                                setOnMobile(!onMobile)
                            }}>User Login</button>

                            <div><Link to='/'>Become a Seller</Link></div>
                            <div><Link to='/'>More <IoCaretDown className='caret' /></Link></div>
                            <button className='admin-btn'> <Link to='/admin' >Admin Login</Link> </button>

                        </div>
                    )
                }

            </div>











            <div className="nav2 d-flex">
                <div className="nav2-item">
                    <div>
                        <div className="image">
                            <img src={topOffers} alt="Top offers" />
                        </div>
                        <p>
                            Top Offers
                        </p>
                    </div>
                </div>
                <div className="nav2-item">
                    <div>
                        <div className="image">
                            <img src={mobiles} alt="Top offers" />
                        </div>
                        <p>
                            Mobiles
                        </p>
                    </div>
                </div>
                <div className="nav2-item">
                    <div>
                        <div className="image">
                            <img src={fashion} alt="Top offers" />
                        </div>
                        <p>
                            Fashion
                        </p>
                    </div>
                </div>
                <div className="nav2-item">
                    <div>
                        <div className="image">
                            <img src={electronics} alt="Top offers" />
                        </div>
                        <p>
                            Electronics
                        </p>
                    </div>
                </div>
                <div className="nav2-item">
                    <div>
                        <div className="image">
                            <img src={beauty} alt="Top offers" />
                        </div>
                        <p>
                            Beauty
                        </p>
                    </div>
                </div>
                <div className="nav2-item">
                    <div>
                        <div className="image">
                            <Link to='/furniture'><img src={homeFurnish} alt="Top offers" /></Link>
                        </div>
                        <p>
                            <Link to="/furniture">Home & Furniture</Link>
                        </p>
                    </div>
                </div>
                <div className="nav2-item">
                    <div>
                        <div className="image">
                            <img src={appliances} alt="Top offers" />
                        </div>
                        <p>
                            Appliances
                        </p>
                    </div>
                </div>
                <div className="nav2-item">
                    <div>
                        <div className="image">
                            <img src={travel} alt="Top offers" />
                        </div>
                        <p>
                            Travel
                        </p>
                    </div>
                </div>
                <div className="nav2-item">
                    <div>
                        <div className="image">
                            <img src={grocery} alt="Top offers" />
                        </div>
                        <p>
                            Grocery
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}