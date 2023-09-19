import React, { useState, useEffect } from 'react';
import { Box, Image, Heading, Grid, Text, VStack, Button } from '@chakra-ui/react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const Services = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/get-services-images`);
        const data = await res.data.data;
        setImageData(data);
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };
    fetchImageData();
  }, []);

  const getImageAnimationClass = (index) => {
    // Determine the animation class based on the index
    return index % 2 === 0 ? 'fade-up-right' : 'fade-up-left';
  };

  return (
    <>
    <Box color='white' my={10}  >
      <Heading color='blue.600' textAlign='center'>Our Services</Heading>
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr' }} gap={5} p={10} align="center" rowGap={5}>
        {imageData.map((imageObj, index) => (
          <Box data-aos={getImageAnimationClass(index)} data-aos-duration="1000" data-aos-once="true" key={index}>
            <Image
              src={require(`../../uploads/serviceImages/${imageObj.serviceImage}`)}
              alt={imageObj.imageTitle}
              rounded={5}
            />
            <Box
              bg='blue.500'
              rounded='10'
              h={200}
              p={5}
              w={'80%'}
              boxShadow="2xl"
            >
              <VStack>
                <Text fontWeight='bold' fontSize='24' textAlign='left'>
                  {imageObj.imageTitle}
                </Text>
                <Text>
                  {imageObj.imageDescription}
                </Text>
                <Button colorScheme='blue' rounded='full'>Learn more</Button>
              </VStack>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
    </>
  );
}

export default Services;
