import React, { useState, useEffect } from 'react';
import { Box, Image, Heading, Stack, Text, Center, Flex, Container, Button } from '@chakra-ui/react';
import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL

const AboutUs = () => {
    const [aboutUsData, setAboutUsData] = useState();

    useEffect(() => {
        const fetchAboutUS = async () => {
            try {
                const res = await axios.get(`${baseUrl}/get-about-us`);
                const data = await res.data.data
                setAboutUsData(data);
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };
        fetchAboutUS();
    }, []);


    console.log(aboutUsData)
    return (
        <Container maxW={'full'} bg='blue.600'
            color='white'>
            {aboutUsData && aboutUsData.aboutUsImage &&
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    px={{ base: 10, md: 20 }}
                    direction={{ base: 'column', md: 'row' }}

                >
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}>
                        <Box
                            position={'relative'}
                            height={'400px'}
                            rounded={'2xl'}
                            boxShadow={'2xl'}
                            width={'full'}
                            overflow={'hidden'}
                            h={{ sm: '200', lg: '400px' }}
                        >

                            <Center data-aos="zoom-out-up" data-aos-duration="3000">
                                <Image

                                    alt={'About Us Image'}
                                    fit={'cover'}
                                    align={'center'}
                                    w={'100%'}
                                    h={'100%'}
                                    src={require(`../../uploads/aboutUsImages/${aboutUsData.aboutUsImage}`)}
                                _hover={{
                                    transform: 'scale(1.05)',
                                }}
                                transition="0.4s ease-in-out"
                                />
                            </Center>
                        </Box>
                    </Flex>
                    <Stack flex={1} spacing={{ base: 5, md: 10 }} align="center" >
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                            data-aos="flip-down"
                            data-aos-duration="1200"
                        >

                            <Text as={'span'}  >
                                {aboutUsData.heading1}
                            </Text>
                        </Heading>
                        <Text data-aos="fade-left"
                            data-aos-duration="1000" >
                            {aboutUsData.text1?.split(/\s+/).slice(0, 100).join(' ') + " ..."}
                        </Text>

                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'bold'}
                            px={6}
                            w={"200px"}
                            placeItems="center"
                            bg={'white'}
                            color='blue.600'
                            _hover={{ bg: 'whiteAlpha.900', color: 'blue.600' }}
                        //   onClick={() => navigate("/about")}

                        >
                            Read More
                        </Button>
                    </Stack>

                </Stack>
            }
        </Container>
    )
}

export default AboutUs