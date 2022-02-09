import React, { useState } from 'react'
import axios from 'axios'
function Img() {
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=E3SG3J5zXBdG3VhkqieiMKnqV3YoR3Z-FiPpUNXcHhI`)
            .then((response) => {
                // console.log(response.data);
                setResult(response.data.results);
            })
    }
    return (
        <>
            <div className='container text-center my-5'>
                <input type="text" className='form-control' value={photo} onChange={(e) => {
                    setPhoto(e.target.value)
                }} />
                <button type='submit' onClick={changePhoto} className='btn btn-primary my-2'>Get Photo</button>
            </div>

            <div className="container">
                <div class="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                            <div class="col-lg-3 col-md-4 col-6">
                                    <img class="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='image' />
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Img