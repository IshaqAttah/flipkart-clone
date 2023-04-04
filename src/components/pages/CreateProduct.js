import { useContext } from "react"
import { ApiCallsContext } from "../context/ApiCallsContext"

export default function CreateProduct(){

    const{productDetails, setProductDetails, editProduct, handleUpdateProduct} = useContext(ApiCallsContext)

    return(
        <div>
                         <form action="http://159.65.21.42:9000/create/product" method='post' encType='multipart/form-data' >
                        {
                            !editProduct?(<h1>List new product</h1>):(<h1>Update product</h1>)
                        }

                        <div>
                            <label htmlFor="">Product Name </label>
                            <div>
                                <input type="text" 
                                name='name'
                                placeholder='Enter product name/title' 
                                value={productDetails.productName} 
                                onChange={(e)=> setProductDetails( {...productDetails,  productName: e.target.value})}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor=""> Price</label>
                            <div>
                                <input type="number" 
                                name='price'
                                placeholder='Enter price' 
                                value={productDetails.price} 
                                onChange={(e)=> setProductDetails( {...productDetails,  price: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">   Category</label>
                            <div>
                                <input type="text" 
                                name='category'
                                placeholder='Product category' 
                                value={productDetails.category} 
                                onChange={(e)=> setProductDetails( {...productDetails,  category: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">  Quantity</label>
                            <div>
                                <input type="text" 
                                name='quantity'
                                placeholder='Product quantity' 
                                value={productDetails.quantity} 
                                onChange={(e)=> setProductDetails( {...productDetails,  quantity: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">  Description</label>
                            <div>
                                <input type="text" 
                                name='description'
                                placeholder='Product description'
                                value={productDetails.description} 
                                onChange={(e)=> setProductDetails( {...productDetails,  description: e.target.value})}
                                 />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">  Image</label>
                            <div>
                                <input 
                                name='image'
                                type="file" 
                                value={productDetails.image} 
                                onChange={(e)=> setProductDetails( {...productDetails,  image: e.target.value})}
                                />
                            </div>
                        </div>

                        {!editProduct?(
                            <button type="submit">Create Product</button>
                        ):(
                            <button type="button" onClick={()=>handleUpdateProduct()}>Update Product</button>
                        )}

                    </form>
        </div>
    )
}