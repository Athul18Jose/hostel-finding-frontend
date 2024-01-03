import React, { useEffect, useState } from 'react'
import './home.css'
import Header from '../Header/Header'
import { Link, useNavigate } from 'react-router-dom'
import { allfb, getAllHstlsAPI, getUsersAPI } from '../../Services/allAPI'

function Home() {

    const [hstl,setHstl] =useState([])
    const [users,setUsers]=useState([])
    const [fb,setFb]= useState([])

    const navigate =useNavigate()

    const getAllHstls = async()=>{
        const result = await getAllHstlsAPI()
        console.log(result.data);
        if(result.status === 200){
          setHstl(result.data)
        }
        else{
          alert("Error in getting hostels")
        }
      }

      const getAllFb = async()=>{
        const result = await allfb()
        console.log(result.data);
        if(result.status === 200){
          setFb(result.data)
        }else{
          alert("Error in getting feedbacks")
        }
      }

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
    


    useEffect(()=>{
        if(!sessionStorage.getItem('token')){
            navigate('/login')
        }
    },[])

    useEffect(()=>{
        getAllHstls();
        getAllFb();
        getAllUsers()
    },[])
    return (
        <>
        <Header/>
            <div class="container">
                <h1 class="title text-center m-3 fw-bold">Admin Control Panel</h1>
                <p className='p'>Manage : Add, Edit and Delete your hostels seamlessly to ensure a smooth and efficient
                    experience for your customers.<br/>Also manage the users and their Feedbacks easily</p>
                <div class="adhcards">
                    <div class="adhcard1 red">
                        <h1 class="tip">{hstl.length}</h1>
                        <h6 class="second-text">Hostels</h6>
                    </div>
                    <div class="adhcard1 blue">
                        <h1 class="tip">{users.length}</h1>
                        <h6 class="second-text">Users</h6>
                    </div>
                    <div class="adhcard1 green">
                        <h1 class="tip">{fb.length}</h1>
                        <h6 class="second-text">Feedbacks</h6>
                    </div>
                </div>
            </div>
            <hr class="hr" />
            
            <div className='container manage'>
                <div class="adhcard">
                    <h5>Manage Users</h5>
                    <p class="c-txt">View, Manage and Delete Users</p>
                    <button class="btn btn-outline w-50"><Link style={{textDecoration:'none'}} to={'/admin/manage-user'}>go</Link> </button>
                </div>
                <div class="adhcard">
                    <h5>Manage Hostels</h5>
                    <p class="c-txt">View, Manage and Delete Hostels</p>
                    <button class="btn btn-outline w-50"><Link style={{textDecoration:'none'}} to={'/admin/manage-hostel'}>go</Link></button>
                </div>
                <div class="adhcard">
                    <h5>Manage Feedbacks</h5>
                    <p class="c-txt">View, Manage and Delete Feedbacks</p>
                    <button class="btn btn-outline w-50"><Link style={{textDecoration:'none'}} to={'/admin/manage-feedbacks'}>go</Link></button>
                </div>
                <br /><br />

            </div>

        
            </>
            )
}

export default Home