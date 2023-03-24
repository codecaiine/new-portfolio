import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbYouTube from '../public/images/projects/cottonbro.jpg'
import thumbInkdrop from '../public/images/projects/cottonbro.jpg'

const Contact = () => (
  <Layout title="Contact">
    <Container>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <p>
          Do need a developper
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="#"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            keep in touch
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Contact
export { getServerSideProps } from '../components/chakra'
