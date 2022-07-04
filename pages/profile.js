import { chakra, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layouts/article'
import { useAuth } from '../lib/auth-context'

const Profile = () => {
  const { currentUser } = useAuth()

  return (
    <Layout>
      <Heading>Profile</Heading>
      <Container maxW='container.lg' overflowX='auto' py={4}>
        <chakra.pre p={4}>
          {currentUser && <pre> Email: {currentUser.email}</pre>}
          {!currentUser && <pre> No user logged in</pre>}
        </chakra.pre>
      </Container>
    </Layout>
  )
}

export default Profile
