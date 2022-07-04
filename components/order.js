import {
  Box,
  Button,
  Text,
  LinkBox,
  LinkOverlay,
  Heading
} from '@chakra-ui/react'
import products from '../data/products.json'
import Image from 'next/image'
import Section from '../components/section'

const OrderGrid = () => {
  return products.map(product => {
    return (
      <Section>
        <Box w='100%' key={product.id}>
          <LinkBox cursor='pointer'>
            <LinkOverlay href={`cakes/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                className='grid-item-thumbnail'
                width='300'
                height='300'
                objectFit='cover'
              />

              <Heading as='h3' fontSize={16}>
                {product.name}
              </Heading>
              <Text mt={2}>{product.description}</Text>
              <Text mt={2}>${product.price}</Text>
            </LinkOverlay>
          </LinkBox>
          <p>
            <Button
              className='snipcart-add-item'
              data-item-id={product.id}
              data-item-name={product.name}
              data-item-price={product.price}
              data-item-description={product.description}
              mt={2}
            >
              Add to Cart
            </Button>
          </p>
        </Box>
      </Section>
    )
  })
}

export default OrderGrid
