import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ImageGallery from '../Components/ImageGallery'
import Header from '../Components/Header'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneHstl } from '../Services/allAPI'


function SingleView() {

  const {id} = useParams()

  const [logged, setLogged] = useState(false)
  const [hstlDetails,setHstlDetails] = useState([])
  const navigate = useNavigate()

  const gethstlDetails = async()=>{
    try{
      const result = await getOneHstl(id)
      setHstlDetails(result.data)
    }
    catch(err){
      alert("Error while fetching Hostel Details")
      console.log(err);
    }
  }

  useEffect(()=>{
    gethstlDetails()
    if (sessionStorage.getItem('token')) {
      setLogged(true)
    }
    else {
      setLogged(false)
      alert("Please LogIn to View More")
      navigate('/login')
    }
  },[])
  return (
    <>
    <Header logged={logged}/>
    <Container>

        <ImageGallery hstlDetails={hstlDetails}/>
    </Container>
    </>
  )
}

export default SingleView