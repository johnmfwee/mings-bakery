import Head from 'next/head'
import Navbar from '../navbar'
import dynamic from 'next/dynamic'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import { Box, Container } from '@chakra-ui/react'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
})

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Homepage - Ming's Bakery</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW='container.md' pt={14}>
        <LazyVoxelDog />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
