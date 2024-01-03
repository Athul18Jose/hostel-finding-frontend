import React from 'react'

function ImageGallery({ hstlDetails }) {
  console.log(hstlDetails);

  const handleCopy = () => {
    alert("Number Copied to clipboard")
  }
  return (
    <>
      <div className="gallery">
        <img className='cover-image' src={hstlDetails.img1} alt="" />
        <div className="grid">
          <img className='grid-item' src={hstlDetails.img2} alt="" />
          <img className='grid-item' src={hstlDetails.img5} alt="" />
          <img className='grid-item' src={hstlDetails.img3} alt="" />
          <img className='grid-item' src={hstlDetails.img4} alt="" />
        </div>
      </div>
      <div className='hostel-name'>
        <span className='fw-bold'>{hstlDetails.category} Hostel</span>
        <h4 className='fw-bold'>{hstlDetails.hstlname}</h4>
        <h6>{hstlDetails.address}</h6>
      </div>

      <div className="rent-details">
        <div className='d-flex flex-column text-left' style={{ width: '75.6%', marginTop: '10px' }}>
          <h4 className='bottom-line w-100'>Rent</h4>
          <p>Starting from</p>
        </div>
        <div className='money'>
          <h3 className='fw-bold'>₹ {hstlDetails.minRent}</h3>
          <h6>per month</h6>
        </div>
      </div>


      <div>
        <h5 className='m-3 fw-bold'>Accomadation</h5>
        <div className='grid-3-col'>
          <div className="container-3">
            <div className="d-flex align-items-center">
              <img className='room-image mr-3' src="https://static.vecteezy.com/system/resources/previews/008/544/944/original/room-interior-background-illustration-bedroom-cartoon-living-room-kids-bedroom-with-furniture-teenage-room-with-bed-kid-or-child-room-with-toys-and-pictures-free-vector.jpg" alt="" />
              <h4 className='text-left f-14 fw-bold'>Single Room</h4>
            </div>

            <div className="d-flex flex-column w-100">
              <h4 className='bottom-line mb-2 f-10 fw-700 text-left'>Rent</h4>
              <div className="d-flex mb-2">
                <p className='text-muted f-10 fw-400'>WithOut Food</p>
                <span className='rate f-10 fw-700'>₹{hstlDetails.Iwf}</span>
              </div>

              <div className="d-flex">
                <p className='text-muted f-10 fw-400'>With Food</p>
                <span className='rate f-10 fw-700'>₹{hstlDetails.If}</span>
              </div>
            </div>
          </div>

          <div className="container-3">
            <div className="d-flex align-items-center">
              <img className='room-image mr-3' src="https://static.vecteezy.com/system/resources/previews/008/544/944/original/room-interior-background-illustration-bedroom-cartoon-living-room-kids-bedroom-with-furniture-teenage-room-with-bed-kid-or-child-room-with-toys-and-pictures-free-vector.jpg" alt="" />
              <h4 className='text-left f-14'>2 Sharing Room</h4>
            </div>

            <div className="d-flex flex-column w-100">
              <h4 className='bottom-line mb-2 f-10 fw-700 text-left'>Rent</h4>
              <div className="d-flex mb-2">
                <p className='text-muted f-10 fw-400'>WithOut Food</p>
                <span className='rate f-10 fw-700'>₹{hstlDetails.IIwf}</span>
              </div>

              <div className="d-flex">
                <p className='text-muted f-10 fw-400'>With Food</p>
                <span className='rate f-10 fw-700'>₹{hstlDetails.IIf}</span>
              </div>
            </div>
          </div>

          <div className="container-3">
            <div className="d-flex align-items-center">
              <img className='room-image mr-3' src="https://static.vecteezy.com/system/resources/previews/008/544/944/original/room-interior-background-illustration-bedroom-cartoon-living-room-kids-bedroom-with-furniture-teenage-room-with-bed-kid-or-child-room-with-toys-and-pictures-free-vector.jpg" alt="" />
              <h4 className='text-left f-14'>4 Sharing Room</h4>
            </div>

            <div className="d-flex flex-column w-100">
              <h4 className='bottom-line mb-2 f-10 fw-700 text-left'>Rent</h4>
              <div className="d-flex mb-2">
                <p className='text-muted f-10 fw-400'>WithOut Food</p>
                <span className='rate f-10 fw-700'>₹{hstlDetails.IVwf}</span>
              </div>

              <div className="d-flex">
                <p className='text-muted f-10 fw-400'>With Food</p>
                <span className='rate f-10 fw-700'>₹{hstlDetails.IVf}</span>
              </div>
            </div>
          </div>

          <div className="container-3">
            <div className="d-flex align-items-center">
              <img className='room-image mr-3' src="https://static.vecteezy.com/system/resources/previews/008/544/944/original/room-interior-background-illustration-bedroom-cartoon-living-room-kids-bedroom-with-furniture-teenage-room-with-bed-kid-or-child-room-with-toys-and-pictures-free-vector.jpg" alt="" />
              <h4 className='text-left f-14'>5 Sharing Room</h4>
            </div>

            <div className="d-flex flex-column w-100">
              <h4 className='bottom-line mb-2 f-10 fw-700 text-left'>Rent</h4>
              <div className="d-flex mb-2">
                <p className='text-muted f-10 fw-400'>WithOut Food</p>
                <span className='rate f-10 fw-700'>₹{hstlDetails.Vwf}</span>
              </div>

              <div className="d-flex">
                <p className='text-muted f-10 fw-400'>With Food</p>
                <span className='rate f-10 fw-700'>₹{hstlDetails.Vf}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='contact'>
        <div>
          <h5 className='fw-bold'>Description</h5>
        </div>
        <p>{hstlDetails.desc}</p>
        <hr className='my-4' />
        <h5 className='fw-bold'>Contact/Address</h5>
        <div className='address'>
          <div>
            <h6>Owner: {hstlDetails.owner}</h6>
            <h6>{hstlDetails.hstlname}</h6>
            <h6>{hstlDetails.address}</h6>
          </div>
          <div className="phone">
            <button onClick={handleCopy} className='mt-3 but'><i class="fa-solid fa-phone me-2"></i>{hstlDetails.phn}</button>
          </div>
        </div>

      </div>


    </>
  )
}

export default ImageGallery