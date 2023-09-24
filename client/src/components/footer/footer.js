import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Input,
    IconButton,
    useColorModeValue,
    Image,
    Center,
    useToast
} from '@chakra-ui/react'
import { FaFilePdf } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { BsWhatsapp, BsMessenger, BsInstagram } from 'react-icons/bs'
import { MdFacebook } from 'react-icons/md'
const baseUrl = process.env.REACT_APP_BASE_URL

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

const Footer = () => {
    const navigate = useNavigate()
    const [currentFooterData, setCurrentFooterData] = useState([])
    const [logoImageData, setLogoImageData] = useState({});
    const [email, setEmail] = useState('');
    const [socialData, setSocialData] = useState([])
    const toast = useToast()

    useEffect(() => {
        fetchLogoImage()
        fetchContactData()
    }, [])

    const fetchLogoImage = async () => {
        try {
            const res = await axios.get(`${baseUrl}/get-logo-image`)
            const data = res.data.data
            setLogoImageData(data)

        } catch (error) {
            console.error("Error: ", error)
        }
    }

    //GET CONTACT INFO DATA
    const fetchContactData = async () => {
        const res = await axios.get(`${baseUrl}/get-contact-info`)
        if (res) {
            setSocialData(res.data.data)
        } else {
            alert("Failed to fech header data")
        }
    }
    // console.log("LOGO:" + logoImageData.logoImage)

    //MAIL SUBSCRIBE
    const handleInputChange = async (event) => {
        setEmail(event.target.value)
    }

    const handleSubscribeMail = (event) => {
        event.preventDefault()
        try {
            setEmail(event.target.value)
            if (email) {
                toast({
                    title: 'Subscribed',
                    description: 'You are subscribed to our newsletter.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                })
            }
        } catch (error) {
            console.error("Error: " + error)
        }
    }

    //SOCIAL ICON LINKS
    function openMessengerChat(recipientId) {
        // Replace 'your-app-id' with your Facebook App ID
        const appId = 'your-app-id';
        const messengerUrl = `https://m.me/${socialData.oneTapMessengerLink}`;
        window.open(messengerUrl, 'Messenger Chat', 'width=600,height=400');
    }

    function openFaceBookPage(recipientId) {
        // Replace 'your-app-id' with your Facebook App ID
        const appId = 'your-app-id';
        const facebookUrl = `https://facebook.com/${socialData.facebookId}`;
        window.open(facebookUrl, 'Facebook Page', 'width=600,height=400');
    }

    function openWhatsappChat(recipientId) {
        // Replace 'your-app-id' with your Facebook App ID
        const appId = 'your-app-id';
        const whatsappPhoneNumber = `https://wa.me/${socialData.whatsappId}`;
        window.open(whatsappPhoneNumber, 'Whatsapp Chat', 'width=600,height=400');
    }
    function openInstagramPage(recipientId) {
        // Replace 'your-app-id' with your Facebook App ID
        const appId = 'your-instagram-id';
        const instagramUrl = `https://ig.me/${socialData.instagramId}`;
        window.open(instagramUrl, 'Instagram Chat', 'width=600,height=400');
    }


    return (
        <Box
            bg={useColorModeValue('blue.800', 'blue.900')}
            color={useColorModeValue('gray.200', 'gray.200')}
            p={1}
        >
            <Container as={Stack} maxW={'7xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }}
                    spacing={2}>
                    <Stack spacing={6}>
                        <Box align="center">
                            {logoImageData &&
                                <Image
                                    h='100px'
                                    // src={require(`../../uploads/logoImages/${logoImageData.logoImage}`)}
                                    alt='Logo'
                                />
                            }
                        </Box>
                        <Text fontSize={'sm'}>{socialData.tagline1}</Text>
                        <Text fontSize={'sm'}>{socialData.taline2}</Text>
                        <Text fontSize={'sm'}>{socialData.tagline3}</Text>
                        <Stack direction={'row'} spacing={6} alignSelf="center" >
                            <IconButton
                                color={'white'}
                                aria-label="whatsapp"
                                variant="ghost"
                                size="md"
                                isRound={true}
                                _hover={{ bg: '#0D74FF' }}
                                icon={<BsWhatsapp size="28px" />}
                                onClick={() => openWhatsappChat(socialData.facebookId)}

                            />
                            <IconButton
                                color={'white'}
                                aria-label="facebook"
                                variant="ghost"
                                size="md"
                                isRound={true}
                                _hover={{ bg: '#0D74FF' }}
                                icon={<MdFacebook size="28px" />}
                                onClick={() => openFaceBookPage(socialData.facebookId)}

                            />

                            <IconButton
                                color={'white'}
                                aria-label="messanger"
                                variant="ghost"
                                size="md"
                                isRound={true}
                                _hover={{ bg: '#0D74FF' }}
                                icon={<BsMessenger size="28px" />}
                                onClick={() => openMessengerChat(socialData.messengerId)}
                            />
                            <IconButton
                                color={'white'}
                                aria-label="messanger"
                                variant="ghost"
                                size="md"
                                isRound={true}
                                _hover={{ bg: '#0D74FF' }}
                                icon={<BsInstagram size="28px" />}
                                onClick={() => openInstagramPage(socialData.instagramId)}
                            />
                        </Stack>
                    </Stack>
                    <Stack
                        as={motion.div}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        align={'flex-start'}
                    >
                        <ListHeader>Company</ListHeader>
                        <Box as="a" href={'/about'} _hover={{ color: '#0D74FF' }} >
                            About us
                        </Box>
                        <Box as="a" href={'/choose-us'} _hover={{ color: '#0D74FF' }}>
                            Why Choose us
                        </Box>
                        <Box as="a" href={'/about-nepal'} _hover={{ color: '#0D74FF' }}>
                            About Nepal
                        </Box>
                        <Box as="a" href={'/gallery'} _hover={{ color: '#0D74FF' }}>
                            Image Gallery
                        </Box>

                    </Stack>
                    <Stack align={'flex-start'} >
                        <ListHeader>Support</ListHeader>
                        <Box as="a" href={'contact-us'} _hover={{ color: '#0D74FF' }}>
                            Contact Us
                        </Box>

                        <Box as="a" href={'/license'} _hover={{ color: '#0D74FF' }}>
                            License
                        </Box>
                        <Box as="a" href={'/resume'} _hover={{ color: '#0D74FF' }}>
                            Submit Resume
                        </Box>

                        <Box as="a" href={'/jobs'} _hover={{ color: '#0D74FF' }}>
                            Latest Jobs
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={'row'}>
                            <IconButton
                                bg={useColorModeValue('blue.700', 'blue.400')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{ bg: '#0D74FF' }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                                onClick={(event) => handleSubscribeMail(event)}
                            />
                            <Input
                                placeholder={'Email'}
                                w={150}
                                bg={useColorModeValue('blue.700', 'whiteAlpha.100')}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                                onChange={handleInputChange}
                            />
                        </Stack>
                        <Stack direction={'row'} >
                            <IconButton
                                bg={useColorModeValue('blue.700', 'blue.400')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{ bg: '#0D74FF' }}
                                aria-label="Subscribe"
                                icon={<FaFilePdf />}
                                onClick={() => navigate("/brochure")}
                            />
                            <Center>
                                <Text>Download Brochure</Text>
                            </Center>
                        </Stack>
                    </Stack>
                    <Stack overflow='hidden' borderRadius={10} h={260} w={200} align={'center'} alignItems={'center'}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1023.6851100697893!2d85.33048799804155!3d!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907b0522ead%3A0x392af32fe87dd0ea!2sRadiant%20Infotech%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1690782916035!5m2!1sen!2snp"
                            width="200"
                            height="260"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
export default Footer