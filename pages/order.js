import Layout from '../components/layouts/article'
import { Container, Heading, SimpleGrid, Button } from '@chakra-ui/react'
import OrderGrid from '../components/order'
import Section from '../components/section'
import { useAuth } from '../lib/auth-context'

const Order = () => {
  const { currentUser } = useAuth()
  return (
    <Layout title='Order'>
      {!currentUser && (
        <Container>
          <Heading as='h3'>You need to login to order</Heading>
          <Section>
            <Button as='a' href='/login' variantColor='blue' my={4}>
              Login
            </Button>
          </Section>
        </Container>
      )}
      {currentUser && (
        <Container>
          <Heading as='h3' fontSize={20} mb={4}>
            Order
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <OrderGrid />
          </SimpleGrid>
        </Container>
      )}
    </Layout>
  )
}

export default Order
export { GetServerSizeProps } from '../components/chakra'
