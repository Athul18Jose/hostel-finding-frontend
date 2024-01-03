import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './Search.css'
import { useNavigate } from 'react-router-dom';


function Input() {

    const navigate = useNavigate()

    const [selectedOption, setSelectedOption] = useState('all');
    const [address,setAddress] = useState('')
  
    
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    }

    const handleSubmit = ()=>{
        navigate(`/list/${selectedOption}/${address}`)
    }
    return (
        <>
            <Container>
                <div className='inp1'>
                    <div className="inp">
                        <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text" placeholder='Eg: Cities, States, Landmark...'/>
                    </div>
                    <div className='line'></div>
                    <div className='drop'>
                        <select id="dropdown" value={`${selectedOption}`} onChange={handleSelectChange}>
                            <option value="all">All Categories<i class="fa-solid fa-caret-down"></i></option>
                            <option value="Mens">Mens</option>
                            <option value="Ladies">Ladies</option>
                        </select>
                    </div>
                    <div className='line'></div>
                    <div className='expl'>
                        <button onClick={handleSubmit} className='btn1'>Explore! <i class="fa-solid fa-arrow-right mt-2"></i></button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Input