import { Box, Image, Heading, Text, Flex, VStack, Modal, ModalOverlay, ModalContent, Center, ModalCloseButton, ModalBody, useColorModeValue } from '@chakra-ui/react';

const ImageModal = ({ isOpen, onClose, data, fromHomepage }) => {
const taglineColor = useColorModeValue('brown.600', 'brown.10');
const textColor = useColorModeValue('blue.600', 'white');

const modalSize = fromHomepage ? 'xl' : 'full';

    return (
        <>
            {data && 
            <Modal isOpen={isOpen} onClose={onClose} size="xl"  zIndex={9999} >
                <ModalContent rounded={10} >
                    <ModalCloseButton/>
                    <ModalBody >
                        <Center>
                        <Image
                        rounded={10}
                        h='100%'
                        w='100%'
                        objectFit="contain"
                        src={require(`../../uploads/galleryImages/${data.galleryImage}`)}
                        />
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>}
        </>
    )
}

export default ImageModal