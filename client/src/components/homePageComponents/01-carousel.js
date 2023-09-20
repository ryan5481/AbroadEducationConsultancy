import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Image, Heading, AspectRatio, IconButton, Button } from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
const baseUrl = process.env.REACT_APP_BASE_URL

const Carousel = () => {
  const hoverColor = "#0D74FF"
  const [carouselImageData, setCarouselImageData] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const fetchCarouselImages = async () => {
    try {
      const res = await axios.get(`${baseUrl}/get-carousel-images`);
      if (res.status === 200) {
        setCarouselImageData(res.data.data);
      } else {
        console.log('Failed to fetch images');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchCarouselImages();
    AOS.init();
  }, []);

  // Define handleNext and handlePrev functions
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Move to the next slide
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Move to the previous slide
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    beforeChange: (current, next) => {
      // Update the activeSlide state when the slide changes
      setActiveSlide(next);
    },
  
  };

  return (
    <Box overflow='hidden'   >
      <Slider {...settings} ref={sliderRef} >
        {carouselImageData.map((image, index) => (
          <Box pos='relative' w="100%" h="100%" key={`carousel_${index}`}  >
            <Box
              pos='absolute'
              w='100%'
              h='100%'
              bg='black'
              zIndex='10'
              style={{
                opacity: "0.3",
              }}
            />
            <AspectRatio ratio={{ base: '0.8', sm: '0.8', md: '1', lg: '2' }}>
              <Image
                src={require('../../uploads/carouselImages/' + image.carouselImage)}
                alt={image.imageTitle}
                objectFit="cover"
                w="100%"
                zIndex={0}
              />
            </AspectRatio>

            <Heading
              zIndex="20"
              color='white'
              data-aos="flip-up"
              data-aos-duration="2000"
              pos='absolute'
              left="100px"
              bottom='20%'
              style={{fontFamily: 'Bebas Neue, sans-serif', textShadow: '1px 2px 4px rgba(0, 0, 0, 0.3)' }}
              as="h1"
              fontSize={{ base: '3xl', md: '5xl', lg: '8xl' }}
              textAlign="center"
              mt={4}
            >
              {image.imageTitle}
            </Heading>
            <Button
            zIndex="20"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="500"
            data-aos-delay="1000"
            pos='absolute'
            left="100px"
            bottom='15%'
            bg='blue.600'
            colorScheme='blue'
            rounded='full'
            px={10}
            h='50px'
            fontSize='22px'
            shadow={'xl'}
            >Get started<ArrowForwardIcon boxSize={8} /> </Button>
          </Box>
        ))}
      </Slider>
      <IconButton
        bg={"transparent"}
        _hover={{ bg: "transparent", color: hoverColor }}
        icon={<ChevronLeftIcon boxSize='10' />}
        aria-label="Previous"
        onClick={handlePrev}
        position="absolute"
        top={"50%"}
        left="2%"
        zIndex={4}
      />
      <IconButton
        bg={"transparent"}
        _hover={{ bg: "transparent", color: hoverColor }}
        icon={<ChevronRightIcon boxSize='10' />}
        aria-label="Next"
        onClick={handleNext}
        position="absolute"
        top={"50%"}
        right="2%"
        zIndex={4}
      />
    </Box>
  );
};

export default Carousel;
