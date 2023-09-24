
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactCard from "../components/card/contactUsCard.js"
const baseUrl = process.env.REACT_APP_BASE_URL 

const ContactUs = () => {
    const [data, setData] = useState([])

    const GetContactData = async () => {
      const res = await axios.get(`${baseUrl}/get-contact-info`)
      if (res) {
        // console.log("DATAAAA:" + data)
        setData(res.data.data)
      } else {
        alert("Failed to fech header data")
      }
    }
  
    useEffect(() => {
        GetContactData()
    }, [])
    
    return (
        <div>
            <ContactCard data={data} />
        </div>
    )
}

export default ContactUs