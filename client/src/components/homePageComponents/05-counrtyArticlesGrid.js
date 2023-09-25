import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Grid, Button, Link, AspectRatio, VStack } from '@chakra-ui/react';
import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL;

const CountryArticlesGrid = () => {
    const [countryArticlesList, setCountryArticlesList] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered box index
    const navigate = useNavigate()

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await axios.get(`${baseUrl}/get-country-articles`);
                const data = await res.data.data;
                setCountryArticlesList(data);
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <Box py={10} bg='blue.600' color='white' justifyContent="center" textAlign='center'>
            <Heading textAlign='center'> Your Next Study Destination </Heading>
            {countryArticlesList && (
                <Grid
                    templateColumns={{ base: '1fr', sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
                    gap={5}
                    p={10}
                    rowGap={5}
                >
                    {countryArticlesList.map((countryArticle, index) => (
                        <AspectRatio key={index} onClick={()=>navigate(`/study-in-${countryArticle.heading1.replace(/\s/g, "-")}`)}>
                            <Box
                                pos='relative'
                                m={0}
                                p={0}
                                border={'2px solid white'}
                                objectFit='fill'
                                h='300px'
                                backgroundImage={require(`../../uploads/countryImages/${countryArticle.countryImage}`)}
                                backgroundSize="100% 100%"
                                cursor="pointer"
                                rounded="10px"
                                shadow="xl"
                                transition="0.35s ease-in-out"
                                _hover={{
                                    transform: 'scale(1.1)',
                                }}
                                color='white'
                                onMouseEnter={() => setHoveredIndex(index)} // Handle mouse enter
                                onMouseLeave={() => setHoveredIndex(null)} // Handle mouse leave
                            >
                                <Box 
                                pos='absolute'
                                w='100%'
                                h='100%'
                                bg='black'
                                style={{
                                    opacity: hoveredIndex === index ? "0.25" : '0', 
                                }}
                                />
                                <VStack
                                    textAlign='center'
                                    position="absolute"
                                    top="50%"
                                    left="50%"
                                    w='100%'
                                    transform="translate(-50%, -50%)"
                                >
                                    <Box p={5}>
                                        <Text
                                            textAlign='left'
                                            fontSize='20px'
                                            // style={{
                                            //     textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'
                                            // }}
                                            transition="0.5s ease-in-out"
                                            opacity={hoveredIndex === index ? 1 : 0}
                                            onClick={()=>navigate(`/study-in-${countryArticle.heading1.replace(/\s/g, "-")}`)}
                                        >
                                            {countryArticle.text1.split(/\s+/).slice(0, 12).join(' ') + " ..."}
                                        </Text>
                                             <Link
                                            w='100%'
                                            textAlign='left'
                                            fontSize='20px'
                                            // style={{
                                            //     textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'
                                            // }}
                                            transition="0.5s ease-in-out"
                                            opacity={hoveredIndex === index ? 1 : 0}
                                            
                                        >Learn more</Link> 
                                    </Box>
                                    <Box
                                        w='100%'
                                    >
                                        <Heading
                                        
                                            textAlign='center'
                                            style={{
                                                textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                                                transition: "transform 0.35s ease-in-out",
                                                transform: hoveredIndex === index ? 'scale(1.5)' : 'scale(1)',
                                            }}
                                        >
                                            {countryArticle.heading1}
                                        </Heading>
                                    </Box>
                                </VStack>
                            </Box>
                        </AspectRatio>
                    ))}
                </Grid>
            )}
            <Button mb={5} colorScheme='blue' rounded='full' onClick={()=> navigate("/study-destination")} >Discover more countries</Button>

        </Box>
    );
}

export default CountryArticlesGrid;
