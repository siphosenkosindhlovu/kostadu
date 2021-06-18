import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import Main from '../components/main';
import Aside from '../components/aside';
import { ArrowRight } from 'react-feather';
import Contacts from '../components/contacts';
import { Box, Heading, Text, Image, Card, Link, Button, Flex } from 'rebass';
import { Input, Textarea } from '@rebass/forms';
export default function Publication() {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Contact details | Get in touch with Kosta Du"
        />
        <title>Contact Kosta Du</title>
      </Head>
      <Container as="section" pt={9} display={[null, 'flex']}>
        <Main withAside>
          <Heading as="h2" mb={[8, null, 10]}>
            I turn ideas into
            <br /> established business
          </Heading>
        </Main>
        <Aside withAside width={[null, '40%']} ml={0}>
          <Image src="/images/lookout.svg" alt="coffee cup" />
        </Aside>
      </Container>
      <Box as="section" bg="lightBlue">
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
                <Heading as="h1">
                  Get in touch
                  <br /> with me
                </Heading>
              </Box>
              <Box flex={[null, '1 0 50%']}>
                <Box
                  as="form"
                  action="https://formspree.io/f/moqywvbg"
                  method="POST"
                >
                  <Flex flexDirection={['column', 'row']}>
                    <Input
                      name="name"
                      placeholder="Name"
                      width={['75%', '100%']}
                      flex={[null, '0 1 50%']}
                      mr={[null, '15px']}
                    />
                    <Input
                      name="_replyto"
                      placeholder="Email"
                      width={['75%', '100%']}
                      flex={[null, '0 1 50%']}
                    />
                  </Flex>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                  ></Textarea>
                  <Box textAlign="right">
                    <Button type="submit" variant="navlink">
                      SEND
                    </Button>
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
                <iframe
                  src="https://meetings.kostadu.com?view=compact"
                  style={{width:"100%", height:"400px", border: "none"}}
                ></iframe>
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
          <Flex flexDirection={['column', 'row']} justifyContent="space-around">
            <Contacts />
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
}
