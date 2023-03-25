import {
  Heading,
  Box,
  chakra
} from '@chakra-ui/react'
import Image from 'next/image'


const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
  })


const MyHeading = () => {
    return (
        <Box
            //backgroundImage="url(/images/blog/cottonbro.jpg)"
            backgroundSize="cover"
            backgroundPosition="center"
            h="300px" // adjust the height as needed
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            opacity="0.8"
            >
        <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yannick-Noel Aka
          </Heading>
          <p> Software Engineer, IT auditor, Tech speaker </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
           
            <ProfileImage
              src="/images/profile-yann.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
        </Box>
      )
}

export default MyHeading