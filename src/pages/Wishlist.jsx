import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {removeFromWishlist} from '../redux/slice/wishlistslice'
import { addToCart } from '../redux/slice/cartSlice'



function Wishlist() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  const dispatch=useDispatch()
  const handleWishlistCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }

  return (
    <div style={{marginTop:'100px'}}>
      
      <Row>

    {
      wishlistArray.length>0?
      wishlistArray.map((product,index)=>(
        <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card className='shadow rounded' style={{ width: '20rem',height:"27rem"}}>
      <Card.Img height={"200px"} variant="top" src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
        <p>{product?.description.slice(0,50)}...</p>
        <h5 className='text-dark'>${product?.price}</h5>
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button onClick={()=>dispatch(removeFromWishlist(product.id))}  className='btn btn-light' ><i class="fa-solid fa-trash text-danger"></i></Button>
        <Button onClick={()=>handleWishlistCart(product)} className='btn btn-light'><i class="fa-solid fs-4 fa-cart-shopping text-warning"></i></Button>
        </div>
      </Card.Body>
      </Card>
      </Col>
      )):
      <div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <img height={'500px'} width={'500px'} src="https://cdnl.iconscout.com/lottie/premium/thumb/empty-box-5708298-4748209.gif" alt="" />
        <h3 className='text-center text-danger'>Wishlist is empty!!</h3>
        <Link style={{textDecoration:"none"}}className='btn-btn warning rounded' to={'/'}>Back To Home</Link>
      </div>
    }
      </Row>

    </div>
  )
}


export default Wishlist