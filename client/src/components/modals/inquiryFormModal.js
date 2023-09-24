
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useToast, Image, Center, Heading } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
} from '@chakra-ui/react'
const baseUrl = process.env.REACT_APP_BASE_URL


const InquiryModal = ({ isOpen, onOpen, onClose, searchKey }) => {
    const toast = useToast()
    const initialRef = React.useRef(null)
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        currentAddress: '',
        questionRegarding: searchKey
    })

    console.log(formData)

    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('Full name is required'),
        email: Yup.string().required('Email is required').email('Invalid email address'),
        mobileNumber: Yup.string().required('Mobile number is required'),
        currentAddress: Yup.string().required('Current address is required'),
        questionRegarding: Yup.string().required('Question context is required'),
    });

    const formik = useFormik({
        initialValues: {
            fullName: '',
            mobileNumber: '',
            email: '',
            currentAddress: '',
            questionRegarding: searchKey,
        },
        validationSchema,
        onSubmit: (values) => {
            submitForm();
        },
    });
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

    //POST
    const submitForm = async () => {
        try {
            const res = await axios.post(`${baseUrl}/submit-inquiry`, formData)
            if (res.status === 200) {
                toast({
                    title: 'Inquiry submitted.',
                    description: 'Our customer service will contact you shortly.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                });
                onClose()
                // setFormData({
                //     fullName: '',
                //     email: '',
                //     mobileNumber: '',
                //     currentAddress: '',
                //     questionRegarding: searchKey
                // })
                window.location.reload()
            } else {
                throw new Error('Form submission failed.');
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(searchKey)
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <form onSubmit={formik.handleSubmit}>

                    <ModalContent color='blue.600' >
                        <ModalHeader textAlign="center"  >
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
                            </ModalHeader>
                            <Heading textAlign="center" fontSize="28px" >Inquiry Form</Heading>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            {/* Full name */}
                            <FormControl mr={"5%"} py={2} id="fullName" isInvalid={formik.errors.fullName && formik.touched.fullName}>
                                <FormLabel htmlFor="fullName" isTruncated>Full name</FormLabel>
                                <Input
                                    ref={initialRef}
                                    type="text"
                                    id="fullName"
                                    placeholder="Full name"
                                    value={formik.values.fullName}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        setFormData({
                                            ...formData,
                                            fullName: e.target.value,
                                        });
                                    }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.fullName && formik.touched.fullName && (
                                    <Box color="red.500" mt={1}>
                                        {formik.errors.fullName}
                                    </Box>
                                )}
                            </FormControl>

                            {/* EMAIL */}
                            <FormControl mr={"5%"} py={2} id="email" isInvalid={formik.errors.email && formik.touched.email}>
                                <FormLabel htmlFor="email" isTruncated>Email</FormLabel>
                                <Input
                                    ref={initialRef}
                                    type="text"
                                    id="email"
                                    placeholder="Email"
                                    value={formik.values.email}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        });
                                    }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <Box color="red.500" mt={1}>
                                        {formik.errors.email}
                                    </Box>
                                )}
                            </FormControl>
                            {/* MOBILE NUMBER */}
                            <FormControl mr={"5%"} py={2} id="mobileNumber" isInvalid={formik.errors.mobileNumber && formik.touched.mobileNumber}>
                                <FormLabel htmlFor="mobileNumber" isTruncated>Mobile number</FormLabel>
                                <Input
                                    ref={initialRef}
                                    type="number"
                                    id="mobileNumber"
                                    placeholder="Mobile number"
                                    value={formik.values.mobileNumber}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        setFormData({
                                            ...formData,
                                            mobileNumber: e.target.value,
                                        });
                                    }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.mobileNumber && formik.touched.mobileNumber && (
                                    <Box color="red.500" mt={1}>
                                        {formik.errors.mobileNumber}
                                    </Box>
                                )}
                            </FormControl>
                            {/* CURRENT ADDRESS */}
                            <FormControl mr={"5%"} py={2} id="currentAddress" isInvalid={formik.errors.currentAddress && formik.touched.currentAddress}>
                                <FormLabel htmlFor="currentAddress" isTruncated>Current address</FormLabel>
                                <Input
                                    ref={initialRef}
                                    type="text"
                                    id="currentAddress"
                                    placeholder="Current address"
                                    value={formik.values.currentAddress}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        setFormData({
                                            ...formData,
                                            currentAddress: e.target.value,
                                        });
                                    }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.currentAddress && formik.touched.currentAddress && (
                                    <Box color="red.500" mt={1}>
                                        {formik.errors.currentAddress}
                                    </Box>
                                )}
                            </FormControl>
                            {/* QUESTION REGARDING */}
                            <FormControl mr={"5%"} py={2} id="questionRegarding" isInvalid={formik.errors.questionRegarding && formik.touched.questionRegarding}>
                                <FormLabel htmlFor="questionRegarding" isTruncated>Question regarding</FormLabel>
                                <Input
                                    ref={initialRef}
                                    type="text"
                                    id="questionRegarding"
                                    placeholder="Question regarding"
                                    value={searchKey || formik.values.questionRegarding}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        setFormData({
                                            ...formData,
                                            questionRegarding: e.target.value,
                                        });
                                    }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.questionRegarding && formik.touched.questionRegarding && (
                                    <Box color="red.500" mt={1}>
                                        {formik.errors.questionRegarding}
                                    </Box>
                                )}
                            </FormControl>

                        </ModalBody>

                        <ModalFooter alignSelf="center" >
                            <Button type='submit' rounded="full" colorScheme='blue' mr={3} >
                                Submit
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    )
}

export default InquiryModal