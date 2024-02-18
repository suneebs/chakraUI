import { Box, Container, Heading,Text } from "@chakra-ui/react";

export default function Dashboard() {

  const boxStyles={
    p:"10px",
    bg:"purple.400",
    color:"white",
    m:"10px",
    textAlign:"center",
    filter:"blur(2px)",
    ':hover':{
      color:'black',
      bg:'blue.200',
      filter:"blur(0)"
    }

  }

  return (
    <Container as='section' maxWidth='4xl' py='20px'>
      <Heading my='30px' p='10px'>
        Chakra UI Components
      </Heading>
      <Text marginLeft='30px'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eveniet illo, mollitia excepturi quia maxime recusandae maiores minus odit quo voluptatum suscipit ullam similique, alias ut voluptas perferendis, quidem tempore?</Text>
      <Text marginLeft='30px' color='blue.400' fontWeight='bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eveniet illo, mollitia excepturi quia maxime recusandae maiores minus odit quo voluptatum suscipit ullam similique, alias ut voluptas perferendis, quidem tempore?</Text>
      <Box my='30px' p='20px' bg='orange' color='white'>
        <Text>
          This is a box
        </Text>
      </Box>
      <Box sx={boxStyles}>
        Hello Ninjas
      </Box>
    </Container>
  )
}
