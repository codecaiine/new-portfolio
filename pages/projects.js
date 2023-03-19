import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/projects/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/projects/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/projects/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/projects/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/projects/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/projects/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/projects/styly_eyecatch.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem id="technicalement" title="Technicalement" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="projectone"
            title="projectone"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </ProjectGridItem>
        </Section>

        <Section delay={0.1}>
          <ProjectGridItem
            id="projecttwo"
            title="Project Two"
            thumbnail={thumbFourPainters}
          >
            A video Project generated with deep learning, imitating famous four
            painters like Van Gogh
          </ProjectGridItem>
        </Section>

        <Section delay={0.1}>
          <ProjectGridItem id="projectthree" thumbnail={thumbMenkiki} title="Project Three">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </ProjectGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <ProjectGridItem id="projectfour" thumbnail={thumbMargelo} title="Project four">
            A website of the elite app development and contracting agency based
            in Austria
          </ProjectGridItem>
        </Section>
        <Section delay={0.3}>
          <ProjectGridItem
            id="projectfive"
            thumbnail={thumbModeTokyo}
            title="Project Five"
          >
            The mode magazine for understanding to personally enjoy Japan
          </ProjectGridItem>
        </Section>
        <Section delay={0.3}>
          <ProjectGridItem id="projectsix" thumbnail={thumbStyly} title="Project Six">
            A VR Creative tools for fashion brands
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
