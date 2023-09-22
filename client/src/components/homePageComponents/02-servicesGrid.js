import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Image, Heading, Grid, Text, VStack, Button, Center, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import ArticleModal from '../modals/articleModal'

const baseUrl = process.env.REACT_APP_BASE_URL;

const ServicesGrid = ({ displayAll, fromHomePage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
    const [servicesData, setSevicesData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/get-services`);
        const data = await res.data.data;
        setSevicesData(data);
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
  //Conditionally display items by type of page
  const itemsToDisplay = displayAll ? servicesData : servicesData.slice(0, 4)

  //detial article modal
  const openModal = (imageObj, fromServicesPage) => {
    setSelectedItem(imageObj);
    setIsModalOpen(true);
    onOpen()
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <>
    <Box color='white' my={10}  >
      <Heading color='blue.600' textAlign='center'>Our Services</Heading>
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr' }} gap={5} p={10} align="center" rowGap={5}>
        {itemsToDisplay && itemsToDisplay.map((imageObj, index) => (
          <Box data-aos={getImageAnimationClass(index)} data-aos-duration="1000" data-aos-once="true" key={index}>
            <Image
              maxH='300px'
              src={require(`../../uploads/serviceImages/${imageObj.serviceImages[0]}`)}
              alt={imageObj.articleHeading1}
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
                  {imageObj.articleHeading1}
                </Text>
                <Text>
                  {imageObj.articleText1}
                </Text>
                <Button colorScheme='gray' color='blue.500' rounded='full' onClick={() => openModal(imageObj)}>Learn more</Button>
              </VStack>
            </Box>
          </Box>
        ))}
      </Grid>
      <Center>
     {!displayAll && 
     <Button m={5} px={10} colorScheme='blue' rounded='full' onClick={()=> navigate("/services")}  >See all services</Button>
     }
      </Center>
     <ArticleModal isOpen={isModalOpen} onClose={closeModal} data={selectedItem} fromHomePage={fromHomePage}  />
    </Box>
    </>
  );
}

export default ServicesGrid;
