import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import Feedback from '../Components/Feedback/Feedback'
import Card from '../Components/Card'
import Header from '../Components/Header'
import { getHstlsByAddress } from '../Services/allAPI'


function Landing() {

  const [logged, setLogged] = useState(false)

  const [ernklm, setErnklm] = useState([])
  const [kozhikode, setKozhikode] = useState([])
  const [trvm,setTrvm] = useState([])


  const ernklmHstls = async () => {
    const address = "ernakulam"

    const result = await getHstlsByAddress(address)
    setErnklm(result.data)
  }

  const kozhikodeHstls = async () => {
    const address = "kozhikode"

    const result = await getHstlsByAddress(address)
    setKozhikode(result.data)
  }

  const trvmHstls = async () => {
    const address = "Trivandrum"

    const result = await getHstlsByAddress(address)
    setTrvm(result.data)
  }


  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setLogged(true)
    }
    else {
      setLogged(false)
    }

    ernklmHstls();
    kozhikodeHstls();
    trvmHstls();
  }, [])

  useEffect(() => {
    // Scroll to the top when the component mounts or when navigating
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header logged={logged} />
      <Search />

      <h3 style={{ marginTop: '80px' }} className='text-dark ms-5 fw-bold'>Explore the Famous Hostels in Ernakulam</h3>
      <div className='mt-2' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          ernklm.slice(0, 4).map((hstl) => (
            <Card key={hstl._id} hstl={hstl} />
          ))
        }
      </div>
      <h3 className='text-dark mt-3 ms-5 fw-bold'>Explore the Famous Hostels in Kozhikode</h3>

      <div className='mt-5' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          kozhikode.slice(0, 4).map((hstl) => (
            <Card key={hstl._id} hstl={hstl} />
          ))
        }
      </div>

      <h3 className='text-dark mt-3 ms-5 fw-bold'>Explore the Famous Hostels in Trivandrum</h3>

      <div className='mt-5' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          trvm.slice(0, 4).map((hstl) => (
            <Card key={hstl._id} hstl={hstl} />
          ))
        }
      </div>

      <Feedback />
    </>
  )
}

export default Landing