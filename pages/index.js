import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  HStack, 
  Icon, 
  Text,
  Button,
  Box
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ChevronRightIcon} from '@chakra-ui/icons'
import {  SiLaravel, SiRuby, SiPython, SiJavascript, SiReact, SiDjango, SiLinux, SiPhp, SiGit } from 'react-icons/si';

const Home = () => (
  <Layout>
    <Container>


      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          Yannick is a freelance and a full-stack Software Engineer based in Yamoussoukro with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <Link as={NextLink} href="/projects/technicalement" passHref scroll={false}>
            Inkdrop
          </Link>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="#"
            passHref
            target="_blank"
          >
            LinkedIn
          </Link>
          &quot; has more than 100k subscribers.
        </Paragraph>

      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Tech Stacks
        </Heading>
      
        <Box my={10}>

          <HStack spacing={4}>
            <Icon as={SiRuby} boxSize={6} />
            <Text>Ruby</Text>
            <Icon as={SiPython} boxSize={6} />
            <Text>Python</Text>
            <Icon as={SiJavascript} boxSize={6} />
            <Text>Javascript</Text>
            <Icon as={SiPhp} boxSize={6} />
            <Text>PHP</Text>
          </HStack>

        </Box>

        <Box mb={20}>

          <HStack spacing={4}>
            <Icon as={SiLaravel} boxSize={6} />
            <Text>Laravel</Text>
            <Icon as={SiDjango} boxSize={6} />
            <Text>Django</Text>
            <Icon as={SiReact} boxSize={6} />
            <Text>React</Text>
            <Icon as={SiLinux} boxSize={6} />
            <Text>Linux</Text>
            <Icon as={SiGit} boxSize={6} />
            <Text>Git</Text>
          </HStack>

        </Box>
      </Section>

      <Section delay={0.3}>
        <Box align="center" my={10}>
          <Button
            as={NextLink}
            href="/projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Check my portfolio
          </Button>
        </Box>
      </Section>

    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
