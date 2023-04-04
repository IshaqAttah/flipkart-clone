import { Link } from 'react-router-dom'
import topOffers from '../components/images/nav-images/top-offers.webp'
import mobiles from '../components/images/nav-images/mobiles.webp'
import fashion from '../components/images/nav-images/fashion.webp'
import electronics from '../components/images/nav-images/electronics.webp'
import beauty from '../components/images/nav-images/beauty.webp'
import homeFurnish from '../components/images/nav-images/home and furniture.webp'
import appliances from '../components/images/nav-images/appliances.webp'
import travel from '../components/images/nav-images/travel.webp'
import grocery from '../components/images/nav-images/grocery.webp'

export default function SecondaryNav() {

    return (
        <div className="nav2 flex">
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
                        <Link to='furniture'><img src={homeFurnish} alt="Top offers" /></Link>
                    </div>
                    <p>
                        <Link to="furniture">Home & Furniture</Link>
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
    )
}