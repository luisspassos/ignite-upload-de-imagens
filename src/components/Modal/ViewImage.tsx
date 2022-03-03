import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />

      <ModalContent
        mx="auto"
        maxW={['300px', '500px', '900px']}
        maxH={['350px', '450px', '600px']}
        w="auto"
        h="auto"
      >
        <ModalBody p={0}>
          <Image
            maxW={['300px', '500px', '900px']}
            maxH={['350px', '450px', '600px']}
            src={imgUrl}
          />
        </ModalBody>

        <ModalFooter
          bgColor="pGray.800"
          h="2rem"
          py="20px"
          borderBottomRadius="5px"
        >
          <Link href={imgUrl} isExternal fontSize="1rem" mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
