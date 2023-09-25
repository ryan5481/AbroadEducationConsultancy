import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticlePage from '../components/articlePage/articlePage';
const baseUrl = process.env.REACT_APP_BASE_URL

const AboutUs = () => {
    const [aboutUsData, setAboutUsData] = useState({});

    useEffect(() => {
        const fetchAboutUs = async () => {
            try {
                const res = await axios.get(`${baseUrl}/get-about-us`);
                const data = await res.data.data
                setAboutUsData(data);
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };
        fetchAboutUs();
    }, []);
    return(
        <>
        <ArticlePage data={aboutUsData}/>
        </>
    )
}

export default AboutUs