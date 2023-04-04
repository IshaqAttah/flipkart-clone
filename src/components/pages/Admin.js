import { FaUsers, FaShoppingCart, FaWarehouse, FaEdit, FaTrash, FaLongArrowAltDown } from 'react-icons/fa'
import { GiHotSpices } from 'react-icons/gi'
import CreateUser from './CreateUser'
import CreateProduct from './CreateProduct'
import { useContext } from 'react'
import { ApiCallsContext } from '../context/ApiCallsContext'
import { useState } from 'react'
import Navigation from '../Navigation'


export default function Admin() {


    const initial = {
        dashboard: false,
        createProduct: false,
        createUser: false,
        manageProduct: false,
        manageUser: false

    }
    const [navButton, setNavButton] = useState({
        ...initial,
        dashboard: true,

    })

    const { products, users, setProducts, setUsers, setEdit, handleEdit, handleEditProduct, setEditProduct, flipkart, success_msg, error_msg, ToastContainer } = useContext(ApiCallsContext)



    const handleDeleteUser = (index) => {
        const id = users[index]._id;

        const thisUser = users[index]
        const filteredUsers = users.filter((allitems) => allitems !== thisUser)

        fetch(`http://159.65.21.42:9000/user/${id}`, {
            method: 'delete'
        }).then((resp) => resp.json()).then((data) => {
            if (data.success) {
                success_msg('User deleted')
                setUsers(filteredUsers)
            } else {
                error_msg('Failed to delete user')
            }
        })




    }
    const handleDeleteProduct = (index) => {
        const id = products[index]._id;

        const thisItem = products[index]
        const filteredProducts = products.filter((allitems) => allitems !== thisItem)
        setProducts(filteredProducts)

        fetch(`http://159.65.21.42:9000/product/${id}`, {
            method: 'delete'
        }).then((resp) => resp.json()).then((data) => {
            if (data.success) {
                success_msg('Product deleted Successfully')
            } else {
                error_msg('Product Creation failed. Check network and try again')
            }
        })

    }


    return (
        <div>
{/* <Navigation/> */}
            <div className="admin-nav flex justify-content-evenly">
                <div>
                    <button
                        onClick={() => setNavButton({ ...initial, dashboard: true })}
                    >Dashboard</button>
                </div>
                <div>
                    <button
                        onClick={() => setNavButton({ ...initial, createProduct: true })}
                    >Create Products</button>
                </div>
                <div>
                    <button
                        onClick={() => setNavButton({ ...initial,  manageProduct: true })}
                    >Manage Products</button>
                </div>
                <div>
                    <button
                        onClick={() => setNavButton({ ...initial,  createUser: true })}
                    >Create Users</button>
                </div>
                <div>
                    <button
                        onClick={() => setNavButton({ ...initial,  manageUser: true })}
                    >Manage Users</button>
                </div>
            </div>

            <div className="admin-body">

                {
                    navButton.dashboard ? (
                        <div>
                            <div className="mycards-row flex justify-content-evenly">

                                <div className="my-card"
                                    onClick={() => setNavButton({ ...navButton, dashboard: false, createProduct: false, manageProduct: true, createUser: false, manageUser: false })}

                                >
                                    <div>
                                        <h4>{products.length}</h4> <span><FaWarehouse /></span>
                                        <p>Products in stock</p>
                                    </div>
                                </div>
                                <div className="my-card"
                                    onClick={() => setNavButton({
                                        ...navButton,
                                        dashboard: false,
                                        createProduct: false,
                                        manageProduct: false,
                                        createUser: false,
                                        manageUser: true
                                    })}

                                >
                                    <div>
                                        <h4>{users.length}</h4> <span><FaUsers /></span>
                                        <p>Registered users</p>
                                    </div>
                                </div>
                                <div className="my-card">
                                    <div>
                                        <h4>{flipkart.length}</h4> <span><FaShoppingCart /></span>
                                        <p>items in cart</p>
                                    </div>
                                </div>
                                <div className='my-card hot-products'>
                                    <div className='bg-light p-1 inner'>
                                        <span><GiHotSpices className='flame text-danger' /></span> Products <br /> <FaLongArrowAltDown />
                                    </div>
                                </div>

                            </div>

                            <div className="product-list" id='hot'>

                                <div className='d-flex justify-content-center bg-light'>
                                    {/* <div className='hot-products'>
                                        <div className='bg-light p-1 inner'>
                                            <span><GiHotSpices className='flame' /></span> Products <br /> <FaLongArrowAltDown/>
                                        </div>
                                    </div> */}
                                </div>

                                <table>
                                    <thead>
                                        <tr>
                                            <td>Product</td>
                                            <td>Category</td>
                                            <td>Price</td>
                                            <td>Status</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    {
                                        products.length > 0 ? (
                                            products.map((product, i) => {
                                                let rand = Math.floor(Math.random() * 2)
                                                // if (i < 10) {
                                                return (

                                                    < tbody key={product._id}>

                                                        {
                                                            i < 10 ? (

                                                                <tr>
                                                                    <td>{product.name}

                                                                    </td>
                                                                    <td>{product.category}</td>
                                                                    <td>N{product.price}</td>
                                                                    {rand % 2 === 0 ? (
                                                                        <>
                                                                            <td className='text-danger fw-bolder'>Out of stock</td>
                                                                            <td><button className='btn btn-danger'>Restock Now!</button></td>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <td className=' text-warning fw-bold'>In stock</td>
                                                                            <td><button className='btn btn-warning'>Restock ahead</button></td>
                                                                        </>
                                                                    )}

                                                                </tr>

                                                            ) : (null)
                                                        }


                                                    </tbody>


                                                )
                                                // }
                                                // return product
                                            })
                                        ) : (
                                            <tbody><tr><td>Loading most bought products, please wait...</td></tr></tbody>
                                        )
                                    }

                                </table>
                            </div>
                        </div>
                    ) : (null)
                }
                {
                    navButton.createProduct ? (
                        <div className="create-product">
                            <CreateProduct />
                        </div>
                    ) : (null)
                }
                {
                    navButton.manageProduct ? (
                        <div>
                            <div className="manage-products">
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Product</td>
                                            <td>Image</td>
                                            <td>Category</td>
                                            <td>Price</td>
                                            <td>Manage</td>
                                        </tr>
                                    </thead>
                                    {
                                        products.length > 0 ? (
                                            products.map((product, i) => {
                                                return (
                                                    <tbody key={product._id}>


                                                        <tr>
                                                            <td>{product.name}</td>
                                                            <td className='img'><img src={`http://159.65.21.42:9000${product.image}`} alt={`${product.name} img`} className='img-fluid' /></td>
                                                            <td>{product.category}</td>
                                                            <td>N{product.price}</td>
                                                            <td>
                                                                <button onClick={() => {
                                                                    setEditProduct(true);
                                                                    setNavButton({ ...navButton, createProduct: true });
                                                                    handleEditProduct(i)
                                                                }}><FaEdit /></button>
                                                                <button onClick={() => handleDeleteProduct(i)}><FaTrash /></button></td>
                                                        </tr>

                                                    </tbody>
                                                )
                                            })
                                        ) : (
                                            <tbody><tr><td>Loading Products, Please wait...</td></tr></tbody>
                                        )
                                    }
                                </table>
                            </div>
                        </div>
                    ) : (null)
                }
                {
                    navButton.createUser ? (
                        <div className="create-user">
                            <CreateUser />
                        </div>
                    ) : (null)
                }
                {
                    navButton.manageUser ? (
                        <div>
                            <div className="manage-users">
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Name</td>
                                            <td>Email</td>
                                            <td>Phone</td>
                                            <td className='pasword-width'>Password</td>
                                            <td>Manage User</td>
                                        </tr>
                                    </thead>
                                    {
                                        users.length > 0 ? (
                                            users.map((user, i) => {
                                                return (
                                                    <tbody key={user._id}>


                                                        <tr>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.phone}</td>
                                                            <td className='pasword-width retract '>{user.password}</td>
                                                            <td>
                                                                <button onClick={() => {
                                                                    setEdit(true);
                                                                    setNavButton({ ...navButton, createUser: true });
                                                                    handleEdit(i)

                                                                }}><FaEdit /></button>
                                                                <button onClick={() => handleDeleteUser(i)}
                                                                ><FaTrash /> </button></td>
                                                        </tr>

                                                    </tbody>
                                                )
                                            })
                                        ) : (
                                            <tbody><tr><td>Loading users, please wait ...</td></tr></tbody>
                                        )
                                    }
                                </table>
                            </div>
                        </div>
                    ) : (null)

                }


                <div> <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                /> </div>



            </div>
        </div>
    )
}