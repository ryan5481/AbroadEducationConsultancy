import React, { useState, useEffect } from 'react';
import { Box, Image, Heading, Stack, Text, Center, Flex, Container, Button, Grid, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import Masonry from "react-responsive-masonry"
import ImageModal from '../components/modals/imageModal';

const baseUrl = process.env.REACT_APP_BASE_URL

const Gallery = () => {
    const [galleryImages, setGalleryImages] = useState([])
    const [videoUrls, setVideoUrls] = useState([])
    //MODAL
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    //GET IMAGES
    useEffect(() => {
        const fetchGalleryImages = async () => {
            try {
                const res = await axios.get(`${baseUrl}/get-gallery-images`);
                const data = await res.data.data;
                setGalleryImages(data.reverse());
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };
        fetchGalleryImages();
    }, []);

    useEffect(() => {
        const fetchVideoUrls = async () => {
            try {
                const res = await axios.get(`${baseUrl}/get-video-urls`);
                const data = await res.data.data;
                setVideoUrls(data.reverse());
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };
        fetchVideoUrls();
    }, []);

    //GET VIDEO URLS
    function getYouTubeVideoId(url) {
        const match = url.match(/[?&]v=([^&]+)/);
        if (match && match[1]) {
          return match[1];
        }
        return null;
    }

    //IMAGE MODAL
    const openModal = (image) => {
        setSelectedItem(image);
        setIsModalOpen(true);
        onOpen()
      };
    
      const closeModal = () => {
        setSelectedItem(null);
        setIsModalOpen(false);
      };

    return (
        <Box justifySelf='center' p={5} >
            <Heading textAlign='center' pb={5}> Photo Gallery </Heading>
            <Masonry columnsCount={6} gutter="20px" style={{paddingBottom: "30px"}} >
                {galleryImages && galleryImages.map((image, index) => (<>
                    <Image
                    data-aos="fade-down"
                    data-aos-duration="1000"
                        key={index}
                        rounded={5}
                        src={require(`../uploads/galleryImages/${image.galleryImage}`)}
                        alt={image.imageTitle}
                        transition="0.15s ease-in-out"
                        _hover={{
                            filter: "brightness(0.8)"
                        }}
                        onClick={() => openModal(image)}
                    />
                    <Text
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                        pos='relative'
                        bottom='3%'
                        zIndex="-1"
                        textAlign='center'
                        fontSize='20px'
                        fontWeight='bold'
                    // style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.3)' }}
                    // transition="0.5s ease-in-out"
                    // opacity={hoveredIndex === index ? 1 : 0}
                    >
                        {`${image.imageTitle.charAt(0).toUpperCase()}${image.imageTitle.slice(1)}`}
                    </Text>
                    <ImageModal isOpen={isModalOpen} onClose={closeModal} data={selectedItem}  />
                </>
                ))}
            </Masonry>
            <Heading textAlign='center' pb={5}> Video Gallery </Heading>

            <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }} gap={5} p={10} align="center" rowGap={5}>
                {videoUrls && videoUrls.map((urlObj, index) => (
                    <>
                    <Box
                     data-aos="fade-down"
                     data-aos-duration="1000"
                    >
                        <iframe
                            width="280"
                            height="157"
                            src={`https://www.youtube.com/embed/${getYouTubeVideoId(urlObj.youTubeVideoUrl)}?si=dlUrGmvy-iXTKOVX`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen="true"
                        />
                        <Text
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="500"
                        zIndex={-1}
                        pos='relative'
                        w='280px'
                        py={5}
                        bottom='3%'
                        textAlign='center'
                        fontSize='20px'
                        fontWeight='bold'
                    >
                        {`${urlObj.videoTitle.charAt(0).toUpperCase()}${urlObj.videoTitle.slice(1)}`}
                    </Text>
                    </Box>
                    </>
                ))}
            </Grid>
        </Box>
    )
}

export default Gallery
