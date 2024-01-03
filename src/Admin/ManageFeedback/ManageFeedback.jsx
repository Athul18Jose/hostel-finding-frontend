import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Container from 'react-bootstrap/esm/Container'
import { allfb } from '../../Services/allAPI'
import { delfb } from '../../Services/allAPI'

function ManageFeedback() {

  const [fb,setFb] =useState([])

  const getAllFb = async()=>{
    const result = await allfb()
    console.log(result.data);
    if(result.status === 200){
      setFb(result.data)
    }else{
      alert("Error in getting feedbacks")
    }
  }

  const handleDelete = async(id)=>{
    console.log(id);
      const result = await delfb(id)
      if(result.status === 200){
        alert(result.data)
        getAllFb()
      }else{
        alert(result.response.data)
      }
  }

  useEffect(()=>{
    getAllFb()
  },[])
  return (
    <>
     <Header />
      <h1 className='title text-center m-3 fw-bold'>Manage Feedbacks</h1>
      

      <Container>
        <div class="my-4 ">


          <table class="table container table-responsive-sm">
            <thead>
              <tr>
                <th class="th" scope="col">#</th>
                <th class="th" scope="col">Name</th>
                <th class="th" scope="col">Email</th>
                <th class="th" scope="col">Message</th>
                <th class="th" scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
              {
                fb.length>0?
                fb.map((item,index)=>(
                  <tr key={item._id}>
                <th scope="row">{index+1}</th>
                <td>{item.fbname}</td>
                <td>{item.fbemail}</td>
                <td>{item.fbmsg}</td>
                <th> 
                  <button onClick={()=>handleDelete(item._id)} type="button" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
                </th>
              </tr>
                ))
                :
                <p className='text-center text-muted'>No Feedbacks Found..!</p>
              }

            </tbody>
          </table>

        </div>
      </Container>
    </>
  )
}

export default ManageFeedback