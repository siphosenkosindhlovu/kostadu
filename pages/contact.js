import Layout from '../components/layout';
import Container from '../components/container';
import Main from '../components/main';
import Aside from '../components/aside';
import Contacts from '../components/contacts';
import { Box, Heading, Text, Image, Card, Link, Button, Flex } from 'rebass';
import { Input, Textarea } from '@rebass/forms';
export default function Publication() {
  return (
    <Layout>
      <Container as="section" pt={9}>
        <Main withAside>
          <Heading mb={[8, null, 10]}>
            I turn ideas into
            <br /> established business
          </Heading>
        </Main>
        <Aside></Aside>
      </Container>
      <Box as="section" bg="light">
        <Container>
          <Main>
            <Flex
              flexDirection={['column', 'row-reverse']}
              justifyContent="flex-end"
              pt={10}
              pb={5}
            >
              <Box
                flex={[null, '1 0 37.5%']}
                ml={[null, 6, null, (1 / 8) * 100 + '%']}
              >
                <Heading>
                  Get in touch
                  <br /> with me
                </Heading>
              </Box>
              <Box flex={[null, '1 0 50%']}>
                <Box as="form">
                  <Flex flexDirection={['column', 'row']}>
                    <Input
                      name="Name"
                      placeholder="Name"
                      width={['75%', '100%']}
                      flex={[null, '0 1 50%']}
                      mr={[null, '15px']}
                    />
                    <Input
                      name="Email"
                      placeholder="Email"
                      width={['75%', '100%']}
                      flex={[null, '0 1 50%']}
                    />
                  </Flex>
                  <Textarea placeholder="Message" rows="5"></Textarea>
                  <Box textAlign="right">
                    <Button variant="navlink">SEND</Button>
                  </Box>
                </Box>
              </Box>
            </Flex>
            <Flex flexDirection={['column', 'row']} pt={10} pb={5}>
              <Box flex={[null, '1 0 50%']}>
                <Heading>
                  Or just book a
                  <br />
                  call right away
                </Heading>
              </Box>
              <Box flex={[null, '1 0 50%']}>
                <Card bg="fadedBlue" color="white" mb="6">
                  <Heading variant="heading_2" mb={[6, null, null, null, 8]}>
                    Zoom call 15 min
                  </Heading>
                  <Flex justifyContent="space-between">
                    <Box>
                      <Text mb={[3, null, null, null, 4]}>15 minutes</Text>
                      <Text>Zoom</Text>
                    </Box>
                    <Flex alignItems="flex-end">
                      <Button as={Link} href="https://calendar.x.ai/kostadu/virtual15min" mb={-2}>
                        Go
                      </Button>
                    </Flex>
                  </Flex>
                </Card>
                <Card bg="fadedBlue" color="white" mb="6">
                  <Heading variant="heading_2" mb={[6, null, null, null, 8]}>
                    Zoom call 45 min
                  </Heading>
                  <Flex justifyContent="space-between">
                    <Box>
                      <Text mb={[3, null, null, null, 4]}>15 minutes</Text>
                      <Text>Zoom</Text>
                    </Box>
                    <Flex alignItems="flex-end">
                      <Button as={Link} href="https://calendar.x.ai/kostadu/virtual45min" mb={-2}>
                        Go
                      </Button>
                    </Flex>
                  </Flex>
                </Card>
                <Card bg="fadedBlue" color="white" mb="6">
                  <Heading variant="heading_2" mb={[6, null, null, null, 8]}>
                    Zoom call 1 hour
                  </Heading>
                  <Flex justifyContent="space-between">
                    <Box>
                      <Text mb={[3, null, null, null, 4]}>15 minutes</Text>
                      <Text>Zoom</Text>
                    </Box>
                    <Flex alignItems="flex-end">
                      <Button as={Link} href="https://calendar.x.ai/kostadu/virtual1h" mb={-2}>
                        Go
                      </Button>
                    </Flex>
                  </Flex>
                </Card>
              </Box>
            </Flex>
          </Main>
        </Container>
      </Box>
      <Box bg="blue" py={[10, null, 11]}>
        <Container textAlign="center">
          <Heading
            variant="subheading"
            mb={8}
            pb={[0, null, 2]}
            fontSize={[6, 8]}
            color="darkBlue"
          >
            I am social
          </Heading>
          <Flex flexDirection={["column", "row"]} justifyContent="space-around">
          <Contacts />
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
}
