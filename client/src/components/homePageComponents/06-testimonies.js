import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Image, Heading, Text, HStack, VStack } from '@chakra-ui/react';
// import Typewriter from '../animation/typeWriter';
const baseUrl = process.env.REACT_APP_BASE_URL

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
          // Reset the animation when it completes
          setCurrentText('');
          setCurrentIndex(0);
        }
      }, delay);
  
      return () => clearInterval(interval);
    }, [currentIndex, delay, text]);
  
    return (
      <span style={{ fontFamily: 'Lucida Handwriting' }}>
        {currentText}
      </span>
    );
  };

const Testimonies = () => {
    // const hoverColor = "#0D74FF"
    const [testimonyData, setTestimonyData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');


    const fetchCarouselImages = async () => {
        try {
            const res = await axios.get(`${baseUrl}/get-testimonies`);
            if (res.status === 200) {
                setTestimonyData(res.data.data);
            } else {
                console.log('Failed to fetch images');
            }
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    useEffect(() => {
        fetchCarouselImages();
    }, []);

    console.log(testimonyData)

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        beforeChange: (oldIndex, newIndex) => {
            // Reset the Typewriter before each slide change
            setCurrentText('');
          },
    };

    useEffect(() => {
        // Use the Typewriter effect for the testimonial text
        const interval = setInterval(() => {
            if (currentIndex < (testimonyData[currentIndex]?.testimonyText || '').length) {
                setCurrentText(prevText => prevText + (testimonyData[currentIndex]?.testimonyText || '')[currentIndex]);
            } else {
                // Reset the animation when it completes
                setCurrentText('');
            }
        }, 50); // Adjust the delay as needed

        return () => clearInterval(interval);
    }, [currentIndex, testimonyData]);

    return (
        <Box overflow='hidden'  >


            <Slider {...settings} >
                {testimonyData && testimonyData.map((testimony, index) => {
                    return (
                        <>
                            <HStack
                                p={10}
                                dir='row'
                                justify='center'

                            >
                                <VStack>

                                {/* <Image
                                    w='xl'
                                    src={require('../../uploads/01-speechBubbles/speech-bubble-oval.png')}
                                /> */}

                                <Box
                                w='350px'
                                fontSize='22px'
                                textAlign='left'
                                
                                >
                                    <text style={{ fontFamily: 'Lucida Handwriting' }} >
                                        <Typewriter text={testimony.testimonyText} delay={50} /> _
                                    </text>
                                </Box>
                                </VStack>

                                <VStack
                                    
                                >
                                    <Image
                                        h="300px"
                                        w={'100%'}
                                        objectFit="contain"
                                        src={require(`../../uploads/testimonyImages/${testimony.testimonyImage}`)}
                                        alt={testimony.testimonyTitle}
                                    />
                                    <Text
                                        fontWeight="bold"
                                        fontSize='18px'
                                        p={3}
                                        textAlign="center"
                                    >
                                        {testimony.testimonyTitle}
                                    </Text>
                                </VStack>
                            </HStack>
                        </>
                    )
                })}
            </Slider>
        </Box>
    );
};

export default Testimonies;
