import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import { delhstl, getAllHstlsAPI } from '../../Services/allAPI'


function ManageHostel() {

  const [allHstls,setAllHstls]= useState([])
  console.log(allHstls);

  const getAllHstls = async()=>{
    const result = await getAllHstlsAPI()
    console.log(result.data);
    if(result.status === 200){
      setAllHstls(result.data)
    }
    else{
      alert("Error in getting hostels")
    }
  }

  const handleDel = async(id)=>{
    console.log(id);
    const result = await delhstl(id)
    if (result.status===200){
      alert(result.data)
      getAllHstls()
    }
    else{
      alert(result.response.data)
    }
  }

  useEffect(()=>{
    getAllHstls()
  },[])

  return (
    <>
      <Header />
      <h1 className='title text-center m-3 fw-bold'>Manage Hostels</h1>
      

      <Container>
      <div style={{ textAlign: 'right' }}>
        <Link to={'/admin/add-hostel'}>
        <button style={{ backgroundColor: 'rgb(252, 128, 3)', color: 'white' }} className='btn me-5'>Add +</button>
        </Link>
      </div>
        <div class="my-3 ">


          <table class="table container table-responsive-sm">
            <thead>
              <tr>
                <th class="th" scope="col">#</th>
                <th class="th" scope="col">Hostel Name</th>
                <th class="th" scope="col">Owner Name</th>
                <th class="th" scope="col">Phone Number</th>
                <th class="th" scope="col">Address</th>
                <th class="th" scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
             {
              allHstls.length>0?
              allHstls.map((hstl,index)=>(
                <tr>
              <th scope="row">{index+1}</th>
              <td>{hstl.hstlname}</td>
              <td>{hstl.owner}</td>
              <td>{hstl.phn}</td>
              <td>{hstl.address}</td>

              <th> 
                <Link to={'/admin/edit-hostel/'+hstl._id}>
                <button type="button" class="btn btn-primary me-2"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                </Link>
                <button onClick={(e)=>handleDel(hstl._id)} type="button" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
              
              </th>

            </tr>
              ))
            :
            <p className='text-center text-secondary'>No Hostels Found</p>
             }

            </tbody>
          </table>

        </div>
      </Container>

    </>
  )
}

export default ManageHostel