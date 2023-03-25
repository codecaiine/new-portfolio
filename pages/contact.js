import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'

import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
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
    
        <List>
          <ListItem>
            <Link href="https://github.com/codecaiine" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @codecaiine
              </Button>
            </Link>
          </ListItem>
          <ListItem>
          </ListItem>
          <ListItem>
            <Link href="#" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @yannickNaka
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @YannickNaka
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>

      <Section delay={0.3}>
       <Heading as="h3" variant="section-title">
          Send me email
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="#"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Keep in touch
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Contact
export { getServerSideProps } from '../components/chakra'
