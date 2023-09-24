import { Box, Image, Heading, VStack, Text, Center, SimpleGrid, useColorModeValue, HStack, Icon } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'

const ArticlePage = ({ data }) => {
    const taglineColor = useColorModeValue('brown.600', 'brown.10');
    const textColor = useColorModeValue('blue.600', 'white');

    console.log(data)

    return (
        <>
            {data && data.aboutUsImage && <Box color={textColor} justifyContent="center" textAlign='center'>

                <Center>
                    <Box
                        w='100%'
                        h='500px'
                        overflow='hidden'
                        borderWidth="1px"
                        shadow="lg"
                        textAlign='center'
                    >
                        <Image
                            w='100%'
                            h='auto'
                            objectFit='cover'
                            src={require(`../../uploads/aboutUsImages/${data.aboutUsImage}`)} alt={data.articleHeading1}
                        />
                    </Box>
                </Center>
                <VStack
                    px={20}
                    w="full"
                >

                    <Box>
                        <Heading py={5} textAlign='center' >{data.heading1}</Heading>
                        <Box p={3} textAlign='left' >


                            <Box py={5} alignContent="center">

                                <Text textAlign='center' fontSize={24} fontWeight='thin' color={taglineColor} >
                                    {data.text1}
                                </Text>

                            </Box>
                            <Box>
                                <Heading textAlign='left' fontSize={24} fontWeight='bold'  >{data.heading2}</Heading>
                                <Text mb={10} >{data.text2}</Text>
                                { data && data.points1 && data.points1
                                .split(".")
                                .filter((sentence) => sentence.trim() !== "")
                                .map((sentence, index) => (
                                    <Text textAlign='left' key={index}> {index + 1 + ". "} {sentence + "."}</Text>
                                ))}
                                <Heading textAlign='left' fontSize={24} fontWeight='bold'  >{data.heading3}</Heading>
                                <Text mb={10}>{data.text3}</Text>
                               {data.heading4 && <Heading textAlign='left' fontSize={24} fontWeight='bold'  >{data.heading4}</Heading>}
                                {data.text4 && <Text mb={10}>{data.text4}</Text>}
                                <Heading p={5} textAlign='center' fontSize={24} fontWeight='bold'  >{data.listheading1}</Heading>
                                {data.listItems && 
                                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}  pb={5}>
                 
                                    {data.listItems.map((item, index) => (
                                        <VStack textAlign='left' align='left'>
                                            <HStack  >
                                                <Box color={'green.400'} px={2}>
                                                    <Icon as={CheckIcon} />
                                                </Box>
                                                <Text fontWeight='bold' >{item.liHeading}</Text>
                                            </HStack>
                                            <Text>{item.liText}</Text>
                                        </VStack>
                                    ))}
                                </SimpleGrid>}

                            </Box>
                        </Box>
                    </Box>
                </VStack>
            </Box>}
        </>
    )
}

export default ArticlePage