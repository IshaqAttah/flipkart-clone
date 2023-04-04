import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ApiCallsContext = createContext()

export default function ApiCallsProvider({ children }) {


    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)
    const [otp, setOtp] = useState(false)
    const [onMobile, setOnMobile] = useState(false)


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [checkEmpty, setCheckEmpty] = useState(false)

    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState('')

    const [productDetails, setProductDetails] = useState({
        productName: '',
        price: '',
        category: '',
        quantity: '',
        description: '',
        image: ''
    })
    const [editProduct, setEditProduct] = useState(false)


    //FOR CART
    const [flipkart, setFlipKart] = useState([])
    const [kartItems, setKartItems] = useState(false)
    const [total, setTotal] = useState(false)

    //To Set Discount
    const [oldCost, setOldCost] = useState(0)

    //FOR ALERTS
    const success_msg = (e) => toast.success(e)
    const error_msg = (e) => toast.error(e)

    //FOR LOGIN STATUS
    const [loginBtn, setLoginBtn] = useState(false)
    const [logged_in, setLoggedIn] = useState(
        localStorage.getItem('login_flipcart')
    )
    const [logged_in_user, setLogged_in_user] = useState(JSON.parse(logged_in)) 
 const [payStackRef, setPayStackRef] = useState("")
 
    const exportData = {
        email,
        setEmail,
        password,
        setPassword,
        username,
        setUsername,
        login,
        setLogin,
        otp,
        setOtp,
        register,
        setRegister,
        checkEmpty,
        setCheckEmpty,
        handleValidate,
        handleValidateLogin,

        products,
        setProducts,
        users,
        setUsers,
        name,
        setName,
        phone,
        setPhone,
        edit,
        setEdit,
        handleEdit,
        handleEditProduct,
        handleUpdate,
        productDetails,
        editProduct,
        setEditProduct,
        setProductDetails,
        handleUpdateProduct,


        flipkart, setFlipKart,
        kartItems, setKartItems,
        total, setTotal,

        ToastContainer,
        success_msg,
        error_msg,

        oldCost,
        setOldCost,

        loginBtn,
        setLoginBtn,
        logged_in,
        setLoggedIn,
        onMobile,
        setOnMobile,

        //FLUTTERWAVE PAYMENT PARAMETERS
        // config,
        logged_in_user,
        setLogged_in_user,

        //PAYSTACK
        payStackRef,
        setPayStackRef
    }
    let a = Math.floor(Math.random() * 59)
    let b = Math.ceil(Math.random() * 88)
    let c = Math.floor(Math.random() * 1)
    const userData = {
        name: username,
        phone: `8${c}2${a}570${b}`,
        email: email,
        password: password
    }
    const loginData = {
        email: email,
        password: password
    }


    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('flipkart'))
        if (cartItems && cartItems.length !== 0) {
            setFlipKart(cartItems)
            setKartItems(true)

            const price = cartItems.reduce((total, cartItems) => total + parseInt(cartItems.price), 0);
            setTotal(price)
        }


        fetch('http://159.65.21.42:9000/products')
            .then((resp) => resp.json())
            .then((data) => {
                let myProducts = []

                data.map((allProducts) => {

                    if (allProducts.category === 'furniture (living room)' || allProducts.category === 'furniture (office)') {
                        const oldPrice = Math.ceil(parseInt(allProducts.price) / 0.61)
                        allProducts.quantity = oldPrice
                        myProducts.push(allProducts)
                    }
                    return myProducts
                })
                setProducts(myProducts)
            })


        fetch('http://159.65.21.42:9000/users')
            .then((resp) => resp.json())
            .then((data) => {

                setUsers(data)
            })

    
        if (logged_in === false || logged_in === null || logged_in === undefined) {
            setTimeout(() => {
                setLoginBtn(true)
                
            }, 7000);
        } else {
            setLoginBtn(false)
        }

    }, [])



    function handleValidate() {
        if (email === '' || password === '' || username === '') {
            setCheckEmpty(true)
        } else {
            handlePostData()
        }
    }
    function handleValidateLogin() {
        if (email === '' || password === '') {
            setCheckEmpty(true)
        } else {
            handleLogin()
        }
    }
    const handlePostData = () => {

        fetch('http://159.65.21.42:9000/register', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                success_msg('Registration successful. Proceed to login')
                fetch('http://159.65.21.42:9000/users')
                    .then((resp) => resp.json())
                    .then((data) => {

                        setUsers(data)
                    })
                setUsername("")
                setPassword('')
                setEmail('')
            }
            )

    }
    const handleLogin = () => {

        fetch('http://159.65.21.42:9000/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    error_msg('Login Failed...Wrong email or Password.')
                } else if (data.name) {
                    success_msg('welcome ' + data.name)
                    localStorage.setItem('login_flipcart', JSON.stringify(data))
                    setLogged_in_user(data)
                    setLoginBtn(false)
                    setLoggedIn(true)

                    setEmail('')
                    setPassword('')


                }
            }
            )

    }
    function handleEdit(index) {
        const thisUser = users[index]
        setEditId(thisUser._id)
        setName(thisUser.name)
        setPhone(thisUser.phone)
        setEmail(thisUser.email)
        setPassword(thisUser.password)

    }
    function handleUpdate() {
        const userUpdateData = {
            name: name,
            phone: phone,
            email: email,
            password: password
        }
        fetch(`http://159.65.21.42:9000/user/${editId}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userUpdateData)
        }).then((resp) => resp.json()).then((data) => {
            fetch('http://159.65.21.42:9000/users')
                .then((resp) => resp.json())
                .then((data) => {

                    setUsers(data)
                })
            success_msg(data.name + ' updated successfully')

            setEditId('')
            setName('')
            setPhone('')
            setEmail('')
            setPassword('')
        })

    }
    function handleEditProduct(index) {
        const thisProduct = products[index];
        setEditId(thisProduct._id)
        setProductDetails({
            ...productDetails,
            productName: thisProduct.name,
            price: thisProduct.price,
            category: thisProduct.category,
            quantity: thisProduct.quantity,
            description: thisProduct.description,

        })

    }
    function handleUpdateProduct() {
        console.log(productDetails);
        fetch(`http://159.65.21.42:9000/product/${editId}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productDetails)
        }).then((resp) => resp.json()).then((data) => {
            console.log(data);
            alert(data.name + ' updated successfully')

        })


    }




















    return (
        <ApiCallsContext.Provider value={exportData}>

            {children}

        </ApiCallsContext.Provider>
    )
}