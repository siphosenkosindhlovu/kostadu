import Layout from '../components/layout';
import Container from '../components/container';
import Main from '../components/main';
import Aside from '../components/aside';
import { Box, Heading, Text, Image, Card, Link, Button, Flex } from 'rebass';
import publications from '../lib/publications';

export default function Publication() {
  return (
    <Layout>
      <Container as="section" pt={9}>
        <Main withAside>
          <Heading color="blue" mb={[8, null, 10]}>
            Find my presence
            <br /> across the web
          </Heading>
        </Main>
        <Aside></Aside>
      </Container>
      <Box bg="light">
        <Container py={['120px', null, null, '200px']}>
          <Box
            sx={{
              display: 'grid',
              columnGap: 3,
              rowGap: 8,
              gridTemplateColumns: ['1fr', '1fr 1fr'],
            }}
          >
            {publications.map((publication) => (
              <Card>
                <Image
                  src={'images/' + publication.logo + '.png'}
                  mb={[6, null, null, null, 8]}
                  height="42px"
                />
                <Heading
                  as="h3"
                  color="blue"
                  fontSize={[6, null, null, 7]}
                  mb={[6]}
                >
                  {publication.headline}
                </Heading>
                <Text fontSize="4" opacity="0.3">
                  {publication.summary}
                </Text>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
