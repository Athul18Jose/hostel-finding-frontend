import React, { useEffect, useState } from 'react'
import Input from '../Components/Input'
import Card from '../Components/Card'
import { useParams } from 'react-router-dom'
import { getHstlsBySearch } from '../Services/allAPI'
import Header from '../Components/Header'

function List() {

  const { category, address } = useParams()
  const [details, setDetails] = useState()

  const search = async () => {
    const result = await getHstlsBySearch(category, address)
    setDetails(result.data)
  }

  useEffect(() => {
    if (category && address) {
      search();
    }
  }, [category, address])


  return (
    <>
    <Header logged/>
      <div className='log-main'>
        <Input />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            details?.length > 0 ?
              details.map((hstl) => (
                <Card key={hstl._id} hstl={hstl} />
              ))
              : <p className='text-light'>No Hostels Found in {address}....! Please Search for another Location</p>
          }




        </div>
      </div>


    </>
  )
}

export default List