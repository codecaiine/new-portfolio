import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Project Three">
    <Container>
      <Title>
        Project Three <Badge>2016</Badge>
      </Title>
      <P>The mode magazine for understanding to personally enjoy Japan.</P>
      <P>
        It is one of the projects launched at{' '}
        <Link href="https://innolab.jp/" target="_blank">
          Open Innovation Lab (電通イノラボ) <ExternalLinkIcon mx="2px" />
        </Link>
        , aiming to visualize the impact of media contents on the visit of
        foreign high-intellect class to Japan, who are highly interested in
        Japanese culture. I joined the project to build its mobile app for iOS
        where you can read free articles of the magazine.
      </P>
      <P>
        電子版としてiOSアプリを担当。日英仏対応。
        きゅんくんやラブリーサマーちゃんなどを誌面で取り上げている。
        本雑誌はISIDイノラボ様と角川アスキー総合研究所様の共同プロジェクトです。
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Swift</span>
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          <Link href="https://www.isid.co.jp/english/news/release/2015/pdf/20150930_ModeTokyo.pdf">
            ISID Starts a Research Project to Visualize Impact of Media Contents
            on Visit of Foreign High-Intellect Class to Japan{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          <Link href="https://innolab.jp/news/achievement/335">
            メディアコンテンツが訪日行動に与える影響を可視化する研究プロジェクトを始動{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/modetokyo_eyecatch.png" alt="mode.tokyo" />
      <SimpleGrid columns={2} gap={2}>
        <ProjectImage src="/images/projects/modetokyo_01.png" alt="mode.tokyo" />
        <ProjectImage src="/images/projects/modetokyo_02.png" alt="mode.tokyo" />
      </SimpleGrid>
      <ProjectImage src="/images/projects/modetokyo_03.jpg" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
