import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Link,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoTwitter, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import firebase, { initFirebase } from '../lib/firebase'
import { where } from 'firebase/firestore'

initFirebase()

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius='lg'
        p={3}
        mb={6}
        textAlign='center'
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Welcome to Ming's Bakery!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Ming's Bakery
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ m: 6 }}
          textAlign='center'
        >
          <Image
            borderColor='whiteAlpha.800'
            borderWidth={2}
            borderStyle='solid'
            maxWidth='100px'
            display='inline-block'
            borderRadius='full'
            src='images/cakes/pandan-chiffon.jpeg'
            alt='Profile Image'
          />
        </Box>
      </Box>

      <Section>
        <Heading as='h2' variant='section-title'>
          About
        </Heading>
        <Paragraph>
          Ming's Bakery is a bakery that specializes in cakes, cookies, and
          pastries. We are located in the heart of the city of Sydney,
          Australia.
        </Paragraph>
      </Section>
      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          On The Web
        </Heading>
        <List>
          <ListItem>
            <Link href='https://twitter.com/mingsbakeryau' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @mingsbakeryau
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://instagram.com/mings_bakery' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @mings_bakery
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://facebook.com/mings_bakery' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                @mings_bakery
              </Button>
            </Link>
          </ListItem>

        </List>
      </Section>
    </Container>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
