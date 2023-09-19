import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./07-universitiesCarousel.css"
import { Box, Image, Center, VStack, Heading } from '@chakra-ui/react';
const baseUrl = process.env.REACT_APP_BASE_URL

const CustomPrevArrow = (props) => {
    return <></>; // Empty fragment to hide the button
};

const CustomNextArrow = (props) => {
    return <></>; // Empty fragment to hide the button
};

const Universities = () => {
    const [partnerLogoData, setPartnerLogoData] = useState([])

    const FetchPartnerLogos = async () => {

        try {
            const res = await axios.get(`${baseUrl}/get-partner-uni-logos`)
            if (res) {
                const imagesBinData = await res.data.data
                setPartnerLogoData(imagesBinData)
            } else {
                console.log("Failed to fetch images")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        FetchPartnerLogos()
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 30000, // Adjust the speed as needed
        slidesToShow: 4, // Set to a value greater than the number of slides
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 0, // Set to 0 to continuously scroll without delay
        pauseOnHover: false, // Set to false to prevent stopping on hover
        cssEase: 'linear',
        prevArrow: <CustomPrevArrow />, // Use the custom prevArrow component
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Center>
        <Box w="80%" my={10} >
            <Heading py={5} color='blue.600' textAlign='center'>Our Partner Universities</Heading>

            <Slider {...settings}>
                {partnerLogoData.map((imageData, index) => (
                    
                        <VStack spacing={5} mb={30} alignSelf='center'>
                            <Box
                                height="200px" // Set a fixed height
                                width="100%" // Take full width of the container
                                display="flex"
                                justifyContent="center" // Vertically align content
                                overflow="hidden" // Hide image overflow
                            >
                                <Center>

                                <Image
                                    // h="0" // Maximize image height within the container
                                    w="auto" // Maintain image's aspect ratio
                                    objectFit="contain" // Fit image within the box
                                    src={require(`../../uploads/partnerUniversityImages/${imageData.partnerUniversityLogo}`)}
                                    transition="0.35s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.2)',
                                    }}
                                />
                                </Center>
                            </Box>
                        </VStack>
                  
                ))}
            </Slider>
        </Box>
        </Center>
    );
};

export default Universities;
