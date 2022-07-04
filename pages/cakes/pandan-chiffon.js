import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, CakeImage, Meta } from '../../components/cake'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { useRouter } from 'next/router'

const Cake = () => (

  <Layout title='Pandan Chiffon Cake'>
    <Container>
      <Title>Test<Badge>DF/GF Options</Badge>
      </Title>
      <P>
        A soft, light and fluffy cake with the classic taste and color of
        pandan. A very popular Southeast Asian cake suitable for both dessert
        and with tea or coffee.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Order Here</Meta>
          <Link href='/order'>
            https://mingsbakery.com/order<ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        {/* <ListItem> */}
        {/*   <Meta>Platform</Meta> */}
        {/*   <span>Windows/macOS/Linux/iOS/Android</span> */}
        {/* </ListItem> */}
        {/* <ListItem> */}
        {/*   <Meta>Stack</Meta> */}
        {/*   <span>NodeJS, Electron, React Native</span> */}
        {/* </ListItem> */}
        {/* <ListItem> */}
        {/*   <Meta>Blogpost</Meta> */}
        {/*   <Link href='https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820'> */}
        {/*     How I’ve Attracted The First 500 Paid Users For My SaaS That Costs */}
        {/*     $5/mo <ExternalLinkIcon mx='2px' /> */}
        {/*   </Link> */}
        {/* </ListItem> */}
      </List>

      <CakeImage src='/images/cakes/pandan_01.jpg' alt='Pandan' />
      <CakeImage src='/images/cakes/pandan_02.jpg' alt='Pandan' />
    </Container>
  </Layout>
)

export default Cake
export { getServerSideProps } from '../../components/chakra'
