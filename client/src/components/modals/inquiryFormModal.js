
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  Image, Center, Heading } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react'
import DynamicForm from '../form/dynamicForm';
const baseUrl = process.env.REACT_APP_BASE_URL


const InquiryModal = ({ isOpen, onOpen, onClose, searchKey }) => {

    //GET LOGO
    const [logoImageData, setLogoImageData] = useState({});
    const fetchLogoImage = async () => {
        try {
            const res = await axios.get(`${baseUrl}/get-logo-image`)
            const data = res.data.data
            setLogoImageData(data)
        } catch (error) {
            console.error("Error: ", error)
        }
    }

    useEffect(() => {
        fetchLogoImage()
    }, [])

    

    console.log(searchKey)
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />

                    <ModalContent color='blue.600' >
                        { logoImageData && logoImageData.logoImage && <ModalHeader textAlign="center"  >
                            <Center>
                            <Image
                                src={require("../../uploads/logoImages/" + logoImageData.logoImage)}
                                alt="Logo"
                                h='50px'
                                p={2}
                                _hover={{
                                    textDecoration: 'none',
                                    cursor: "pointer"
                                }}
                                // textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                                fontFamily={'heading'}
                            />
                            </Center>
                            </ModalHeader>}
                            <Heading textAlign="center" fontSize="28px" >Inquiry Form</Heading>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <DynamicForm searchKey={searchKey} onClose={onClose} />
                        </ModalBody>

                        <ModalFooter alignSelf="center" >
                            
                        </ModalFooter>
                    </ModalContent>
            </Modal>
        </>
    )
}

export default InquiryModal