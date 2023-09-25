import { Image, Modal,  ModalContent, Center, ModalCloseButton, ModalBody } from '@chakra-ui/react';

const ImageModal = ({ isOpen, onClose, data, fromHomepage }) => {

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