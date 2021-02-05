import { Flex, Box, Link, Text, Button, Image } from 'rebass';
import Container from './container';

export default function Footer() {
  return (
    <Box bg="light" as="footer" py={8}>
      <Container>
        <Box textAlign="center" height={[null, null, null, '0px']} sx={{zIndex: 1000}}>
          <Button as="a" href="#" variant="base" p="0" translate={[null, null, 'translateY(120px)']}>
            <Image src="images/up.svg" height={["100px", null,  "150px"]}/>
          </Button>
        </Box>
        <Flex justifyContent="space-between" alignItems="center" sx={{position: 'relative'}}>
          <Flex alignItems="center">
            <Image
              src="images/kd.png"
              width={"52px", null, null, null, null, "80px"}
              display={['none', null, 'block']}
              mr="4"
            />
            <Text textAlign="center">2021. KOSTA DU personal web-site</Text>
          </Flex>
          <Text display={["none", null, 'block']}>
          Design by TTweb digital team
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
