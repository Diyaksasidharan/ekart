import React from 'react'
import { Button, Card, Col, Row, Spinner  } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slice/wishlistslice';
import { addToCart } from '../redux/slice/cartSlice';

function Home() {
  const data= useFetch("https://dummyjson.com/products")
  // console.log(data);

  const dispatch = useDispatch()

  
  return (
<>
    <div
        style={{
          backgroundImage: 'url("https://cdn.pixabay.com/photo/2020/05/20/15/05/shopping-cart-5196903_1280.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
        }}
      >
        <div>
          <h1 style={{color:"red",fontFamily:"monospace",fontWeight:"40px"}}>Explore Popular Products</h1>
          <p style={{color:"black",fontFamily:"cursive"}}>Save upto 50% off on All products!!!</p>
          <Button variant="danger" style={{borderRadius:"10%"}}>Get Started</Button>
        </div>
      </div>
  


    <Row className='ms-5' style={{marginTop:"100px"}}>
      {
        data?.length>0?data?.map((product,index)=>(
          
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
        <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light' ><i class="fa-solid fs-4 fa-heart text-danger"></i></Button>
        <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light'><i class="fa-solid fs-4 fa-cart-shopping text-warning"></i></Button>
        </div>
      </Card.Body>
      </Card>
      </Col>
      )):<p style={{color:'blueviolet'}}>Nothing To Display</p>
      }

    </Row>
    </>
  )
}

export default Home