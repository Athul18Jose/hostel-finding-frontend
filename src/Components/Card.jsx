import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit'
import {Link} from 'react-router-dom'

function Card({hstl}) {
  return (
    <>
     <div>{
     <MDBCard style={{width:'260px', height:'380px',margin:'20px'}}>
      <MDBCardImage height={'200px'} src={hstl?.img1} position='top' alt='...' />
      
        <MDBCardBody className='text-center'>
        <MDBCardTitle>{hstl?.hstlname}</MDBCardTitle>
        <MDBCardText>
          {hstl?.address}
        </MDBCardText>
        <Link to={`/single/${hstl?._id}`}>
        <MDBBtn style={{backgroundColor: 'rgb(252, 128, 3)'}}>Know more <i class="fa-solid fa-arrow-right"></i></MDBBtn>
        </Link>
      </MDBCardBody>
      
    </MDBCard>
}
     </div>
    </>
  )
}

export default Card