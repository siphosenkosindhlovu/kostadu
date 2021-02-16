import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import Main from '../components/main';
import Aside from '../components/aside';
import { Box, Heading, Text, Image, Card, Link, Button, Flex } from 'rebass';
import publications from '../lib/publications';

export default function Publication() {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Read about Kosta Du and Paymob Smart POS stories in the news and on the web "/>
        <title>Kosta Du and Paymob Smart POS in the news and on the web </title>
      </Head>
      <Container as="section" pt={9} display={[null, 'flex']}>
        <Main withAside>
          <Heading as="h1" mb={[8, null, 10]}>
          Kosta Du and Paymob in the news and on the web
          </Heading>
        </Main>
        <Aside withAside width={[null, '40%']} ml={0} mb='-50px'>
          <Image src="/images/coffee.svg" alt="coffee cup"/>
        </Aside>
      </Container>
      <Box bg="light">
        <Container  py={['120px', null, null, null, '200px']}>
          <Main
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
                  src={'/images/' + publication.logo + '.png'}
                  mb={[6, null, null, null, 8]}
                  height="42px"
                />
                <Heading
                  as="h2"
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
          </Main>
        </Container>
      </Box>
    </Layout>
  );
}
