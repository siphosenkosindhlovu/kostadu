import { Flex, Box, Link, Text, Button, Image } from 'rebass';
import Container from './container';

export default function Footer() {
  return (
    <Box bg="light" as="footer" py={8}>
      <Container>
        <Flex
          justifyContent={['center', null, 'space-between']}
          alignItems="center"
          flexDirection={["column-reverse", null, "row"]}
          sx={{ position: 'relative' }}
        >
          <Flex alignItems="center">
            <Image
              src="/images/kd.png"
              width={('52px', null, null, null, null, '80px')}
              display={['none', null, 'block']}
              mr="4"
            />
            <Text textAlign="center">2021. KOSTA DU personal web-site</Text>
          </Flex>
          <Box
            textAlign="center"
            sx={{ zIndex: 1000, transform: [null, null,'translate(-50%)'] }}
          >
            <Button
              as="a"
              href="#top"
              variant="base"
              p="0"
            >
              <Image src="/images/up.svg" height={['100px', null, '150px']} />
            </Button>
          </Box>
          <Text display={['none', null, 'block']}>
            Design by TTweb digital team
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
