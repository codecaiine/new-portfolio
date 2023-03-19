import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import projectDatas from '../data/projectdata'

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
        {projectDatas.map((project) => {

          if(project.category ==='personal'){
            
            return <Section delay={0.1}>
            <ProjectGridItem id={project.id} thumbnail={ project.thumbnail} title={project.title}>
              {project.description}
              {project.category}
            </ProjectGridItem>
          </Section>;
          }  
          })}
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
           {projectDatas.map((project) => {

                if(project.category ==='collaboration'){
                  
                  return <Section delay={0.3}>
                  <ProjectGridItem id={project.id} thumbnail={ project.thumbnail} title={project.title}>
                    {project.description}
                    {project.category}
                  </ProjectGridItem>
                </Section>;
                }})}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
