import { Box, Image, Heading, Text, Flex, VStack, Modal, ModalOverlay, ModalContent, Center, ModalCloseButton, ModalBody, useColorModeValue } from '@chakra-ui/react';

const ArticleModal = ({ isOpen, onClose, data, fromHomepage }) => {
const taglineColor = useColorModeValue('brown.600', 'brown.10');
const textColor = useColorModeValue('blue.600', 'white');

const modalSize = fromHomepage ? 'xl' : 'full';

    return (
        <>
            {data && <Modal isOpen={isOpen} onClose={onClose} size={modalSize} zIndex={9999} >
                <ModalOverlay />
                <ModalContent minW={'80%'}>
                    <ModalCloseButton/>
                    <ModalBody  >
                        <Box my={10} color={textColor} justifyContent="center" textAlign='center'>
                            <Heading py={5} textAlign='canter' >{data.articleHeading1}</Heading>
                            <Box
                                px={20}
                                w="full"
                            >
                                <Center>
                                <Box
                                    w='80%'
                                    h='400px'
                                    overflow='hidden'
                                    borderWidth="1px"
                                    rounded="lg"
                                    shadow="lg"
                                    textAlign='center'
                                >
                                    <Image
                                        w='100%'
                                        h='auto'
                                        objectFit='cover'
                                        src={require(`../../uploads/serviceImages/${data.serviceImages[1]}`)} alt={data.articleHeading1} roundedTop="lg"
                                    />
                                </Box>
                                </Center>
                                <Box>
                                    <Box p={3} roundedBottom="lg" textAlign='left' >
                                        <Box display="flex" alignItems="baseline">
                                        </Box>
                                        <Flex mt="1" justifyContent="space-between" alignContent="center">
                                            <Box
                                                fontWeight="semibold"
                                                lineHeight="tight"
                                            >
                                            </Box>
                                        </Flex>
                                        <Flex justifyContent="space-between" alignContent="center">
                                            <Box h={150} >
                                                <Text textAlign='center' fontSize={24} fontWeight='thin' color={taglineColor} >
                                                    {data.articleText1}
                                                </Text>
                                            </Box>
                                        </Flex>
                                        <VStack>
                                            <Heading textAlign='left' fontSize={24} fontWeight='bold'  >{data.articleHeading2}</Heading>
                                            <Text mb={10} >{data.articleText2}</Text>
                                            <Heading textAlign='left' fontSize={24} fontWeight='bold'  >{data.articleHeading3}</Heading>
                                            <Text mb={10}>{data.articleText3}</Text>
                                            <Heading textAlign='left' fontSize={24} fontWeight='bold'  >{data.articleHeading4}</Heading>
                                            <Text>{data.articleText4}</Text>
                                        </VStack>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>}
        </>
    )
}

export default ArticleModal