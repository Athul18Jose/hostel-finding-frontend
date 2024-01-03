import React, { useState } from 'react'
import Header from '../Header/Header'
import { Container } from 'react-bootstrap'
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import './add.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { addhstlAPI } from '../../Services/allAPI';
import { useNavigate } from 'react-router-dom';


function AddHostels() {

  const navigate = useNavigate()

  const [hstlDetaills, setHstlDetails] = useState({
    owner: "",
    phn: "",
    hstlname: "",
    category:"Mens",
    minRent: "",
    desc: "",
    address: "",
    If: "",
    Iwf: "",
    IIf: "",
    IIwf: "",
    IVf: "",
    IVwf: "",
    Vf: "",
    Vwf: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: ""
  })

  console.log(hstlDetaills);
  
  const handleSelectChange = (event) => {
    setHstlDetails({...hstlDetaills,category:event.target.value});
  }

  const handleAdd = async (e) => {
    e.preventDefault();

    const { owner, phn, hstlname, minRent, desc, address,
      If, Iwf, IIf, IIwf, IVf, IVwf, Vf, Vwf, img1, img2, img3, img4, img5 } = hstlDetaills

    if (!owner || !phn || !hstlname || !minRent || !desc || !address ||
      !If || !Iwf || !IIf || !IIwf || !IVf || !IVwf || !Vf || !Vwf || !img1 || !img2 || !img3 || !img4 || !img5) {
      alert("All fields are required")
    }
    else {
      const result = await addhstlAPI(hstlDetaills)
      console.log(result);
      if(result.status === 200){
        alert(`${result.data.hstlname} Hostel Added Succesfull!`)
        setHstlDetails({
          owner: "",
          phn: "",
          hstlname: "",
          category:"Mens",
          minRent: "",
          desc: "",
          address: "",
          If: "",
          Iwf: "",
          IIf: "",
          IIwf: "",
          IVf: "",
          IVwf: "",
          Vf: "",
          Vwf: "",
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: ""
        })
        navigate('/admin/manage-hostel')
      }
      else{
        alert('Something went wrong while adding the hostel.Please try again');
      }
    }
  }
  return (
    <>
      <Header />
      <h1 className='title text-center my-3 fw-bold'>Add New Hostel</h1>
      <Container>
        <div>
          <div className="inline-inputs">
            <MDBInput value={hstlDetaills.owner} onChange={(e) => setHstlDetails({ ...hstlDetaills, owner: e.target.value })} className='entry' label='Owner Name' id='form1' type='text' />
            <MDBInput value={hstlDetaills.phn} onChange={(e) => setHstlDetails({ ...hstlDetaills, phn: e.target.value })} className='entry' label='Phone No.' id='form1' type='text' />
          </div>
          <div className="inline-inputs">
            <MDBInput value={hstlDetaills.hstlname} onChange={(e) => setHstlDetails({ ...hstlDetaills, hstlname: e.target.value })} className='entry' label='Hostel Name' id='form1' type='text' />
            <div className='drop1'>
              <select id="dropdown" value={`${hstlDetaills.category}`} onChange={handleSelectChange}>
                <option value="Mens">Mens Hostel<i class="fa-solid fa-caret-down"></i></option>
                <option value="Ladies">Ladies Hostel</option>
              </select>
            </div>
            <MDBInput value={hstlDetaills.minRent} onChange={(e) => setHstlDetails({ ...hstlDetaills, minRent: e.target.value })} className='entry' label='Min. Hostel Rent' id='form1' type='text' />
          </div>
          <div className="inline-inputs">
            <MDBTextArea value={hstlDetaills.desc} onChange={(e) => setHstlDetails({ ...hstlDetaills, desc: e.target.value })} className='entry' label='Description' id='form1' type='text' />
            <MDBInput value={hstlDetaills.address} onChange={(e) => setHstlDetails({ ...hstlDetaills, address: e.target.value })} className='entry' label='Address' id='form1' type='text' />
          </div>
          <hr />
          <h4 className='fw-bold'>Room Details</h4>
          <div className="inline-inputs">
            <input className='room' value={'Single Room'} type="text" />
            <input value={hstlDetaills.If} onChange={(e) => setHstlDetails({ ...hstlDetaills, If: e.target.value })} className='room' placeholder='Rent With Food' type="text" />
            <input value={hstlDetaills.Iwf} onChange={(e) => setHstlDetails({ ...hstlDetaills, Iwf: e.target.value })} className='room' placeholder='Rent Without Food' type="text" />
          </div>
          <div className="inline-inputs">
            <input className='room' value={'2 Sharing Room'} type="text" />
            <input value={hstlDetaills.IIf} onChange={(e) => setHstlDetails({ ...hstlDetaills, IIf: e.target.value })} className='room' placeholder='Rent With Food' type="text" />
            <input  value={hstlDetaills.IIwf} onChange={(e) => setHstlDetails({ ...hstlDetaills, IIwf: e.target.value })} className='room' placeholder='Rent Without Food' type="text" />
          </div>
          <div className="inline-inputs">
            <input className='room' value={'4 Sharing Room'} type="text" />
            <input value={hstlDetaills.IVf} onChange={(e) => setHstlDetails({ ...hstlDetaills, IVf: e.target.value })} className='room' placeholder='Rent With Food' type="text" />
            <input value={hstlDetaills.IVwf} onChange={(e) => setHstlDetails({ ...hstlDetaills, IVwf: e.target.value })} className='room' placeholder='Rent Without Food' type="text" />
          </div>
          <div className="inline-inputs">
            <input className='room' value={'5 Sharing Room'} type="text" />
            <input value={hstlDetaills.Vf} onChange={(e) => setHstlDetails({ ...hstlDetaills, Vf: e.target.value })} className='room' placeholder='Rent With Food' type="text" />
            <input value={hstlDetaills.Vwf} onChange={(e) => setHstlDetails({ ...hstlDetaills, Vwf: e.target.value })} className='room' placeholder='Rent Without Food' type="text" />
          </div>
          <hr />
          <h4 className='fw-bold'>Photos</h4>
          <div className="pics">
            <div className="inline-inputs">
              <MDBInput value={hstlDetaills.img1} onChange={(e) => setHstlDetails({ ...hstlDetaills, img1: e.target.value })} className='entry' label='Image URL 1' id='form1' type='text' />
            </div>
            <div className="inline-inputs">
              <MDBInput value={hstlDetaills.img2} onChange={(e) => setHstlDetails({ ...hstlDetaills, img2: e.target.value })} className='entry' label='Image URL 2' id='form1' type='text' />
              <MDBInput value={hstlDetaills.img3} onChange={(e) => setHstlDetails({ ...hstlDetaills, img3: e.target.value })} className='entry' label='Image URL 3' id='form1' type='text' />
            </div>
            <div className="inline-inputs">
              <MDBInput value={hstlDetaills.img4} onChange={(e) => setHstlDetails({ ...hstlDetaills, img4: e.target.value })} className='entry' label='Image URL 4' id='form1' type='text' />
              <MDBInput value={hstlDetaills.img5} onChange={(e) => setHstlDetails({ ...hstlDetaills, img5: e.target.value })} className='entry' label='Image URL 5' id='form1' type='text' />
            </div>
          </div>
          <div className="d-grid gap-2 m-5">
            <MDBBtn onClick={handleAdd} style={{ backgroundColor: 'rgb(252, 128, 3)', color: 'white' }}>Add Hostel</MDBBtn>
          </div>
        </div>
      </Container>

    </>
  )
}

export default AddHostels