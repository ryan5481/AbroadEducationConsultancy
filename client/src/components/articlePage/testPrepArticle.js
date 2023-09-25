import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, VStack, Text, Button, useDisclosure, useColorModeValue, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import InquiryModal from '../modals/inquiryFormModal';

const baseUrl = process.env.REACT_APP_BASE_URL

const TestPrepArticle = ({ searchKey }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
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

            <Box
                    pos='relative'
                    w='100%'
                    h='500px'
                    overflow='hidden'
                    borderWidth="1px"
                    shadow="lg"
                    style={{
                        background: `url(${require(`../../uploads/testPrepArticleImages/${article.articleImage}`)}) center center`,

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
                        data-aos="flip-up"
                        data-aos-duration="1300"
                        pos='relative'
                        top="50%"
                        mt={4}
                    >
                        <Heading
                        style={{ 
                            fontFamily: 'Bebas Neue, sans-serif', 
                            textShadow: '1px 2px 4px rgba(0, 0, 0, 0.3)' 
                        }}
                        as="h1"
                        fontSize={{ base: '3xl', md: '5xl', lg: '8xl' }}
                        textAlign="center"
                        >
                        {article.heading1} TEST PREPARATION
                        </Heading>
                    </Box>
                    <Button
                            zIndex="20"
                            data-aos="fade-right"
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                            pos='absolute'
                            left="26%"
                            bottom='15%'
                            bg='blue.600'
                            colorScheme='blue'
                            color='white'
                            rounded='full'
                            px={10}
                            h='50px'
                            fontSize='22px'
                            shadow={'xl'}
                            onClick={onOpen}
                            >
                            Enquire Now <ArrowForwardIcon boxSize={8} /> </Button>
                </Box>

                
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
                <InquiryModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} searchKey={searchKey} />
            </Box>}
        </Box>
    )
}

export default TestPrepArticle