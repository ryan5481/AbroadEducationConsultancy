import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Image, Heading, VStack, Text, Center, useDisclosure, useColorModeValue, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import InquiryModal from '../modals/inquiryFormModal';

const baseUrl = process.env.REACT_APP_BASE_URL

const DestinationArticle = ({ searchKey }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const taglineColor = useColorModeValue('brown.600', 'brown.10');
    const textColor = useColorModeValue('blue.600', 'white');
    const [countryArticle, setCountryArticle] = useState({});
    useEffect(() => {
        const fetchArticles = async () => {
            try {

                const res = await axios.get(`${baseUrl}/get-country-articles/${searchKey}`);
                const data = await res.data.data
                setCountryArticle(data);
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };
        fetchArticles();
    }, []);


    return (
        <Box overflow="hidden" >
            {countryArticle && countryArticle.countryImage && <Box color={textColor} justifyContent="center" textAlign='center'>

                {/* <Center  > */}
                <Box
                    pos='relative'
                    w='100%'
                    h='500px'
                    overflow='hidden'
                    borderWidth="1px"
                    shadow="lg"
                    style={{
                        background: `url(${require(`../../uploads/countryImages/${countryArticle.countryImage}`)}) center center`,
                        backgroundSize: 'cover',
                    }}
                >
                    <Box
                        pos='absolute'
                        w='100%'
                        h='100%'
                        top="0"
                        left='0'
                        bg='black'
                        zIndex='10'
                        style={{
                            opacity: "0.2",
                        }}
                    />
                    <Box
                        zIndex="20"
                        color='white'
                        data-aos="fade-right"
                        data-aos-duration="1300"
                        pos='relative'
                        // right="25%"
                        top="60%"
                        mt={4}
                    >
                        
                        <Heading
                        style={{ fontFamily: 'Bebas Neue, sans-serif', textShadow: '1px 2px 4px rgba(0, 0, 0, 0.3)' }}
                        as="h1"
                        fontSize={{ base: '3xl', md: '5xl', lg: '8xl' }}
                        textAlign="center"
                        >
                        Study In {countryArticle.heading1}
                        </Heading>
                        <Button
                            zIndex="20"
                            data-aos="fade-right"
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                            pos='absolute'
                            left="40%"
                            bg='blue.600'
                            colorScheme='blue'
                            color='white'
                            rounded='full'
                            px={10}
                            h='50px'
                            fontSize='22px'
                            shadow={'xl'}
                            // onClick={onOpen}
                            >
                            Enquire Now <ArrowForwardIcon boxSize={8} /> </Button>
                    </Box>
                </Box>

                <Box
                    px={20}
                    w="full"
                >

                    <Box maxW="80%" >

                        <Box p={3} textAlign='left' >


                            <Box py={5} alignContent="center">

                                <Text textAlign='center' fontSize={24} fontWeight='thin' color={taglineColor} >
                                    {countryArticle.text1}
                                </Text>

                            </Box>
                            <Box>
                                <Heading textAlign='left' fontSize={24} fontWeight='bold'  >{countryArticle.heading2}</Heading>
                                <Text mb={10} >{countryArticle.text2}</Text>
                                {countryArticle && countryArticle.points1 && countryArticle.points1
                                    .split(".")
                                    .filter((sentence) => sentence.trim() !== "")
                                    .map((sentence, index) => (
                                        <Text textAlign='left' key={index}> {index + 1 + ". "} {sentence + "."}</Text>
                                    ))}
                                <Heading my={5} textAlign='left' fontSize={24} fontWeight='bold'  >{countryArticle.heading3}</Heading>
                                <Text mb={10}>{countryArticle.text3}</Text>
                                {countryArticle.heading4 && <Heading textAlign='left' fontSize={24} fontWeight='bold'  >{countryArticle.heading4}</Heading>}
                                {countryArticle.text4 && <Text mb={10}>{countryArticle.text4}</Text>}
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/* <InquiryModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} searchKey={searchKey} /> */}
            </Box>}
        </Box>
    )
}

export default DestinationArticle