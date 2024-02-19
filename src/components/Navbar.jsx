import { UnlockIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading ,Text,Button, Spacer, HStack, useToast, Avatar, AvatarBadge } from '@chakra-ui/react'
import { wrap } from 'framer-motion'
import React from 'react'

export default function Navbar() {
  const toast = useToast()
  const showToast =() =>{
    toast({
      title: 'Logged out',
      description: 'successfully logged out',
      duration: 2000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />
    })
  }
  return (
    // <Flex bg='gray.200' justify={'space-around'} wrap={'wrap'} gap='2'>
    //     <Box w='150px' h='50px' bg='red'>1</Box>
    //     <Box w='150px' h='50px' bg='green'>2</Box>
    //     <Box w='150px' flexGrow='1' h='50px' bg='yellow'>3</Box>
    //     <Box w='150px' flexGrow='2' h='50px' bg='blue'>4</Box>

    // </Flex>

    <Flex as='nav' p='10px' mb='40px' alignItems={'center'}>
        <Heading as='h1'>DoJo Tasks</Heading>
        <Spacer />
        <HStack spacing={'20px'}>
        <Avatar name='mario' bg={'purple.400'} src='/img/mario.png' >
          <AvatarBadge width="1.3em" bg="teal.500">
              <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario.netninja.dev</Text>
        <Button colorScheme='purple' onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
  )
}
