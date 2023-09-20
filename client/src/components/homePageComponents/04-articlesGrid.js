import React, { useState, useEffect } from 'react';
import { Box, Image, Heading,Text, Grid, Center, Button, Flex } from '@chakra-ui/react';
import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL

const ArticlesGrid = () => {
    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await axios.get(`${baseUrl}/get-articles`);
                const data = await res.data.data
                setArticlesList(data);
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };
        fetchArticles();
    }, []);


    return (
        <Box my={10} color='blue.600' justifyContent="center" textAlign='center'>
            <Heading textAlign='canter'  >News and Events </Heading>
            {articlesList &&
                <Grid templateColumns={{base: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' }} gap={1} p={10} rowGap={1}>
                    {articlesList.slice(0, 4).map((article, index) => {
                        const dataAosDuration = (index - 1) * 1000;
                        const dataAosDelay = (index + 1) * 100;
                        return (<>
                            <Flex 
                            p={5} 
                            w="full" 
                            // alignItems="center" 
                            // justifyContent="center" 
                            data-aos="fade-right" 
                            data-aos-duration={dataAosDuration} 
                            data-aos-delay={dataAosDelay} 
                            >
                                <Box
                                    // bg={useColorModeValue('white', 'gray.800')}
                                    maxW="sm"
                                    borderWidth="1px"
                                    rounded="lg"
                                    shadow="lg"
                                    // position="relative"
                                    >
                                    <Image src={require(`../../uploads/articleImages/${article.articleImage}`)} alt={article.heading1} roundedTop="lg" />
                                    <Box p={3} bg='white' roundedBottom="lg" textAlign='left' >
                                        <Box display="flex" alignItems="baseline">
                                        </Box>
                                        <Flex mt="1" justifyContent="space-between" alignContent="center">
                                            <Box
                                                fontWeight="semibold"
                                                lineHeight="tight"
                                                >
                                                {article.heading1}
                                            </Box>
                                        </Flex>
                                        <Flex justifyContent="space-between" alignContent="center">
                                            <Box h={150} >
                                                <Text fontSize={15} >
                                                {article.text1?.split(/\s+/).slice(0, 30).join(' ') + " ..."}
                                                </Text>
                                            </Box>
                                        </Flex>
                                        <Box  textAlign='center' >
                                        <Button rounded='full' colorScheme='blue' >Continue reading</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Flex>
                        </>)
                    })}
                </Grid>
            }
            <Center>
      <Button m={5} px={10} colorScheme='blue' rounded='full' >See all articles</Button>
      </Center>
        </Box>
    )
}

export default ArticlesGrid