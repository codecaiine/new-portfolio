import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import blogPosts from '../data/blogpost'

const Blog = () => (
  <Layout title="Blog">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular blogposts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        {blogPosts.map((post) => {
        
        <GridItem
        title="How to build a portfolio website"
        thumbnail={aaaa}
        href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
      />


        })}
  
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Blog
export { getServerSideProps } from '../components/chakra'
