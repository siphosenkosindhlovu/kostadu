import Layout from '../components/layout';
import Container from '../components/container';
import Main from '../components/main';
import Aside from '../components/aside';
import { Box, Heading, Text, Image, Card, Link, Button, Flex } from 'rebass';
export default function Publication() {
  return (
    <Layout>
      <Container as="section" pt={9}>
        <Main>
          <Heading mb={[8, null, 10]}>
            All videos from
            <br />
            my YouTube channel
          </Heading>
        </Main>
      </Container>
      <Box as="section" bg="light" pt={10} pb={5}>
        <Container>
        <Main>
          <Box sx={{display: 'grid', gridTemplateColumns : ['1fr', '1fr 1fr', '1fr 1fr 1'],  columnGap: '17.5px', rowGap: [6, null, 8]}}>
            <Box>
              <Image mb={4}></Image>
              <Heading variant="heading_3" maxWidth="24ch" mb="2">Smart POS Terminal Sunmi P2 Pro Review</Heading>
              <Text opacity="40%">3 months ago</Text>
            </Box>
          </Box>
        </Main>
        </Container>
      </Box>
    </Layout>
  );
}
