import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  chakra
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbYouTube from '../public/images/projects/cottonbro.jpg'
import thumbInkdrop from '../public/images/projects/cottonbro.jpg'

const Experience = () => (
  <Layout title="Experience">
    <Container>
    
    <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        Experience
        </Heading>
        <BioSection>
          <BioYear>2028</BioYear>
          Full-stack Software Engineer
        </BioSection>
        <BioSection>
          <BioYear>2028</BioYear>
          Full-stack Software Engineer
        </BioSection>
        <BioSection>
          <BioYear>2028</BioYear>
          Full-stack Software Engineer
        </BioSection>
        <BioSection>
          <BioYear>2028</BioYear>
          Full-stack Software Engineer
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
       
        <BioSection>
          <BioYear>2028</BioYear>
          Full-stack Software Engineer
        </BioSection>

        <BioSection>
          <BioYear>2028</BioYear>
          Full-stack Software Engineer
        </BioSection>

        <Box align="center" my={10}>
          <Button
            as={NextLink}
            href="#"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Get my resume here
          </Button>
        </Box>
      </Section>
      
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Achievements
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="#"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="#"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../components/chakra'
