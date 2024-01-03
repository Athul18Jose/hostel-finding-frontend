import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Container from 'react-bootstrap/esm/Container'
import { deluser, getUsersAPI } from '../../Services/allAPI'


function ManageUsers() {

  const [users, setUsers] = useState([])

  const getAllUsers = async () => {
    try {
      const result = await getUsersAPI()
      console.log(result.data);
      if (result.status === 200) {
        setUsers(result.data)
      }
    }
    catch (err) {
      alert("Error in get users data")
    }
  }

  const handleDelete= async(id)=>{
      console.log(id);
      const result = await deluser(id)
      if(result.status === 200){
        alert(result.data)
        getAllUsers()
      }
      else{
        alert(result.response.data)
      }
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <>
      <Header />
      <h1 className='title text-center m-3 fw-bold'>Manage Users</h1>


      <Container>
        <div class="my-4 ">


          <table class="table container table-responsive-sm">
            <thead>
              <tr>
                <th class="th" scope="col">#</th>
                <th class="th" scope="col">Name</th>
                <th class="th" scope="col">Phone Number</th>
                <th class="th" scope="col">E-mail</th>
                <th class="th" scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
              {
                users.length > 0 ? users.map((item, index) => (
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{item.uname}</td>
                    <td>{item.phn}</td>
                    <td>{item.email}</td>
                    <th>
                      <button onClick={(e)=>handleDelete(item._id)} type="button" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </th>
                  </tr>
                ))
                  :
                  <p className='text-center text-muted'>No Users Found</p>
              }
            </tbody>
          </table>

        </div>
      </Container>
    </>
  )
}

export default ManageUsers