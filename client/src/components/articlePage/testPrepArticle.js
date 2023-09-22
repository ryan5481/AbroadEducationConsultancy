import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Image, Heading, VStack, Text, Center, SimpleGrid, useColorModeValue, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
const baseUrl = process.env.REACT_APP_BASE_URL

const TestPrepArticle = ({ searchKey }) => {
    const taglineColor = useColorModeValue('brown.600', 'brown.10');
    const textColor = useColorModeValue('blue.600', 'white');
    const [article, setArticle] = useState({});
    useEffect(() => {
        const fetchArticles = async () => {
            try {

                const res = await axios.get(`${baseUrl}/get-test-prep-articles/${searchKey}`);
                const data = await res.data.data
                setArticle(data);
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };
        fetchArticles();
    }, []);


    return (
        <Box overflow="hidden" >
            {article && article.articleImage && <Box color={textColor} justifyContent="center" textAlign='center'>

                {/* <Center  > */}
                <Box
                    pos='relative'
                    // w='100%'
                    h='500px'
                    overflow='hidden'
                    borderWidth="1px"
                    shadow="lg"
                >
                    <Box
                        pos='absolute'
                        w='100%'
                        h='500px'
                        bg='black'
                        zIndex='10'
                        style={{
                            opacity: "0.2",
                        }}
                    />
                    <div
                        zIndex={0}
                        style={{
                            width: '100%',
                            height: '100%',
                            background: `url(${require(`../../uploads/testPrepArticleImages/${article.articleImage}`)}) center center`,
                            zIndex: "0",
                            backgroundSize: 'cover',
                        }}
                    />
                </Box>
                {/* </Center> */}
                <Heading
                    zIndex="20"
                    color='white'
                    // data-aos="flip-up"
                    // data-aos-duration="2000"
                    pos='absolute'
                    left="100px"
                    bottom="10px"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', textShadow: '1px 2px 4px rgba(0, 0, 0, 0.3)' }}
                    as="h1"
                    fontSize={{ base: '3xl', md: '5xl', lg: '8xl' }}
                    textAlign="center"
                    mt={4}
                >
                    {article.heading2}
                </Heading>
                <VStack
                    px={20}
                >
                    <Box p={10} >
                        <Box p={3} textAlign='left' >
                            <Box m={5} alignContent="center">
                                <Text textAlign='center' fontSize={24} fontWeight='thin' color={taglineColor} >
                                    {article.text1}
                                </Text>
                                {article && article.points1 && article.points1
                                    .split(".")
                                    .filter((sentence) => sentence.trim() !== "")
                                    .map((sentence, index) => (
                                        <Text textAlign='left' key={index}> {index + 1 + ". "} {sentence + "."}</Text>
                                    ))}
                            </Box>
                            {/* HEADING 2 */}
                            <Box m={5}>
                                <Heading textAlign='start' fontSize={24} fontWeight='bold'  >{article.heading2}</Heading>
                                <Text mb={10} >{article.text2}</Text>
                                {article && article.points2 && article.points2
                                    .split(".")
                                    .filter((sentence) => sentence.trim() !== "")
                                    .map((sentence, index) => (
                                        <Text textAlign='left' key={index}> {index + 1 + ". "} {sentence + "."}</Text>
                                    ))}
                            </Box>
                            {/* HEADING 3 */}
                            <Box m={5}>
                                <Heading textAlign='start' fontSize={24} fontWeight='bold'  >{article.heading3}</Heading>
                                <Text mb={10} >{article.text3}</Text>
                                {article && article.points3 && article.points3
                                    .split(".")
                                    .filter((sentence) => sentence.trim() !== "")
                                    .map((sentence, index) => (
                                        <Text textAlign='left' key={index}> {index + 1 + ". "} {sentence + "."}</Text>
                                    ))}
                            </Box>
                            {/* HEADING 4 */}
                            <Box m={5}>
                                <Heading textAlign='start' fontSize={24} fontWeight='bold'  >{article.heading4}</Heading>
                                <Text mb={10} >{article.text4}</Text>
                                {article && article.points4 && article.points4
                                    .split(".")
                                    .filter((sentence) => sentence.trim() !== "")
                                    .map((sentence, index) => (
                                        <Text textAlign='left' key={index}> {index + 1 + ". "} {sentence + "."}</Text>
                                    ))}
                            </Box>
                            {/* HEADING 5 */}
                            <Box m={5}>
                                <Heading textAlign='start' fontSize={24} fontWeight='bold'  >{article.heading5}</Heading>
                                <Text mb={10} >{article.text5}</Text>
                                {article && article.points5 && article.points5
                                    .split(".")
                                    .filter((sentence) => sentence.trim() !== "")
                                    .map((sentence, index) => (
                                        <Text textAlign='left' key={index}> {index + 1 + ". "} {sentence + "."}</Text>
                                    ))}
                            </Box>

                            {/* HEADING 5 */}
                            <Box m={5}>
                                <Heading textAlign='start' fontSize={24} fontWeight='bold'  >{article.heading5}</Heading>
                                <Text mb={10} >{article.text5}</Text>
                                {article && article.points5 && article.points5
                                    .split(".")
                                    .filter((sentence) => sentence.trim() !== "")
                                    .map((sentence, index) => (
                                        <Text textAlign='left' key={index}> {index + 1 + ". "} {sentence + "."}</Text>
                                    ))}
                            </Box>

                            {/* HEADING 6 */}
                            <Box m={5}>
                                <Heading textAlign='start' fontSize={24} fontWeight='bold'  >{article.heading6}</Heading>
                                <Text mb={10} >{article.text6}</Text>
                                {article && article.points6 && article.points6
                                    .split(".")
                                    .filter((sentence) => sentence.trim() !== "")
                                    .map((sentence, index) => (
                                        <Text textAlign='left' key={index}> {index + 1 + ". "} {sentence + "."}</Text>
                                    ))}
                            </Box>

                            {/* HEADING 7 */}
                            <Box m={5}>
                                <Heading textAlign='start' fontSize={24} fontWeight='bold'  >{article.heading7}</Heading>
                                <Text mb={10} >{article.text7}</Text>
                                {article && article.points7 && article.points7
                                    .split(".")
                                    .filter((sentence) => sentence.trim() !== "")
                                    .map((sentence, index) => (
                                        <Text textAlign='left' key={index}> {index + 1 + ". "} {sentence + "."}</Text>
                                    ))}
                            </Box>

                            {/* HEADING 8 */}
                            <Box m={5}>
                                <Heading textAlign='start' fontSize={24} fontWeight='bold'  >{article.heading8}</Heading>
                                <Text mb={10} >{article.text8}</Text>
                                {article && article.points8 && article.points8
                                    .split(".")
                                    .filter((sentence) => sentence.trim() !== "")
                                    .map((sentence, index) => (
                                        <Text textAlign='left' key={index}> {index + 1 + ". "} {sentence + "."}</Text>
                                    ))}
                            </Box>
                        </Box>
                        <Heading p={5} textAlign='start' fontSize={24} fontWeight='bold'  >Frequetly Asked Questions</Heading>

                        <Accordion w={"80%"} allowMultiple>
                        {/* ACCORDION 1  */}
                            {article && article.accordionTitle1 && article.accordionText1 &&
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box fontWeight="bold" as="span" flex='1' textAlign='left'>
                                        {article.accordionTitle1}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel textAlign="left" pb={4}>
                                {article.accordionText1}
                                </AccordionPanel>
                            </AccordionItem>}
                        {/* ACCORDION 2  */}
                            {article && article.accordionTitle2 && article.accordionText2 &&
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box fontWeight="bold" as="span" flex='1' textAlign='left'>
                                        {article.accordionTitle2}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel textAlign="left" pb={4}>
                                {article.accordionText2}
                                </AccordionPanel>
                            </AccordionItem>}
                        {/* ACCORDION 3  */}
                            {article && article.accordionTitle3 && article.accordionText3 &&
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box fontWeight="bold" as="span" flex='1' textAlign='left'>
                                        {article.accordionTitle3}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel textAlign="left" pb={4}>
                                {article.accordionText3}
                                </AccordionPanel>
                            </AccordionItem>}
                        {/* ACCORDION 4  */}
                            {article && article.accordionTitle4 && article.accordionText4 &&
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box fontWeight="bold" as="span" flex='1' textAlign='left'>
                                        {article.accordionTitle4}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel textAlign="left" pb={4}>
                                {article.accordionText4}
                                </AccordionPanel>
                            </AccordionItem>}
                        {/* ACCORDION 5  */}
                            {article && article.accordionTitle5 && article.accordionText5 &&
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box fontWeight="bold" as="span" flex='1' textAlign='left'>
                                        {article.accordionTitle5}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel textAlign="left" pb={4}>
                                {article.accordionText5}
                                </AccordionPanel>
                            </AccordionItem>}

                        </Accordion>
                    </Box>
                </VStack>
            </Box>}
        </Box>
    )
}

export default TestPrepArticle