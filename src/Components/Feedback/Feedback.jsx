import React, { useState } from 'react'
import './feedback.css'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';
import { fbAPI } from '../../Services/allAPI';

function Feedback() {

    const [fb, setFb] = useState({
        fbname: "",
        fbemail: "",
        fbmsg: ""
    })

    const handlefb = async (e) => {
        e.preventDefault()

        const { fbname, fbemail, fbmsg } = fb
        if (!fbname || !fbemail || !fbmsg) {
            alert("Please fill all the fields")
        }
        else {
            const result = await fbAPI(fb)
            console.log(result);
            if (result.status === 200) {
                alert('Thank You for your valuable Feedback')
                setFb({
                    fbname: "",
                    fbemail: "",
                    fbmsg: ""
                })
            }else{
                alert('Error in sending feedback')
                
            }
        }
    }

    return (
        <>
            <div className="fb">
                <div className="text">
                    <h1>GET IN TOUCH WITH US!</h1>
                    <h6>"We value your opinion! Please take a moment to share your feedback with us.
                        Your insights help us improve and enhance our services.
                        Thank you for being a part of our community!"</h6>
                </div>
                <div className="inputs">
                    <form>
                        <MDBInput value={fb.fbname} onChange={(e) => setFb({ ...fb, fbname: e.target.value })} className='feedinp bg-light' label='Name' id='form1' type='text' />
                        <MDBInput value={fb.fbemail} onChange={(e) => setFb({ ...fb, fbemail: e.target.value })} className='feedinp bg-light my-3' label='Email' id='form1' type='text' />
                        <MDBTextArea value={fb.fbmsg} onChange={(e) => setFb({ ...fb, fbmsg: e.target.value })} className='feedinp bg-light' label='Message' id='textAreaExample' rows={4} />
                        <div>
                            <button onClick={handlefb} className='btn bg-warning text-light mt-3'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Feedback