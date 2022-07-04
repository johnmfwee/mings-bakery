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
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius='lg'
        bg='red'
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
          <p></p>
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
            alt='Profile image'
          />
        </Box>
      </Box>

      <Section>
        <Heading as='h3' variant='section-title'>
          About
        </Heading>
        <Paragraph>
          {/* I&apos;m a full-stack developer based in Australia. I have a passion */}
          {/* for creating beautiful and intuitive user experiences. When not */}
          {/* coding, I can be found streaming Path of Exile and other RPG/MMORPGs */}
          {/* on Twitch. I&apos;m currently working on a project called{' '} */}
          {/* <NextLink href='works/inkdrop'> */}
          {/*   <Link>Inkdrop</Link> */}
          {/* </NextLink> */}
          {/* , a collaorative note taking app. */}
        </Paragraph>
      </Section>
      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          On the Web 
        </Heading>
        <List>
          <ListItem>
            <Link href='https://twitter.com/mingsbakeryau' target='_blank'>
              <Button 
                variant='ghost' 
                colorScheme='teal' 
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @mings_bakery
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
        </List>
      </Section>
    </Container>
  )
}

export default Home
export { getServerSideProps} from '../components/chakra'
