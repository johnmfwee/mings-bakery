import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const ContactUs = () => {
  return (
    <Container>
      <Heading as='h1'>Contact Us</Heading>
      <Text>If you have any questions, please feel free to contact us.</Text>

      <Divider my={6} />
      <Box my={6} align='center'>
        <NextLink href='mailto:contactus@mingsbakery.com'>
          <Button leftIcon={<EmailIcon />} colorScheme='teal'>
            Email
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default ContactUs
export { getInitialProps } from '../components/chakra'
