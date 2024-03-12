import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <MDBFooter className='text-center text-lg-start text-muted '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='ms-5 fw-bold' style={{color:"blueviolet"}}>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-danger'>
            <MDBIcon fab icon="facebook-f fw-bold fs-5" style={{color:"blueviolet"}}/>
          </a>
          <a href='' className='me-4'>
            <MDBIcon fab icon="twitter fw-bold fs-5" style={{color:"blueviolet"}}/>
          </a>
          <a href='' className='me-4'>
            <MDBIcon fab icon="google fw-bold fs-5" style={{color:"blueviolet"}}/>
          </a>
          <a href='' className='me-4'>
            <MDBIcon fab icon="instagram fw-bold fs-5" style={{color:"blueviolet"}}/>
          </a>
          <a href='' className='me-4'>
            <MDBIcon fab icon="linkedin fw-bold fs-5" style={{color:"blueviolet"}}/>
          </a>
          <a href='' className='me-4'>
            <MDBIcon fab icon="github fw-bold fs-5" style={{color:"blueviolet"}}/>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fs-5 fw-bold mb-4'>
              <i class="fa-solid fa-cart-shopping" style={{ color: "blueviolet" }}></i>
                <span style={{color:"blueviolet"}} className='ms-2'> E-cart</span>
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:"blueviolet"}}>Links</h6>
              <p>
                
                <Link to={'/'} className='text-reset' style={{textDecoration:'none'}}>
                Home
                </Link>
              </p>
              <p>
              <Link to={'/home'} className='text-reset' style={{textDecoration:'none'}}>
                Wishlist
                </Link>
              </p>
              <p>
              <Link to={'/watchhistory'} className='text-reset' style={{textDecoration:'none'}}>
               Add To Cart
                </Link>
              </p>
             
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:"blueviolet"}}>Guides</h6>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'  style={{textDecoration:'none'}}>
                  React Bootstrap
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'  style={{textDecoration:'none'}}>
                  Bootswatch
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:"blueviolet"}}>Contact Us</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright :
        <a className='fw-bold text-danger' href='https://mdbootstrap.com/' style={{textDecoration:'none'}}>
           EKART
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer