import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import { Box, Heading, Text, Image, Card, Link, Button, Flex } from 'rebass';
import Main from '../components/main';
import projects from '../lib/projects';

export default function Projects() {
  return (
    <Layout sx={{
      position: ['absolute', null, 'static'],
      top: '0',
      right: '0',
      width: '100%',
    }}>
      <Head>
        <meta name="description" content="Examples of ongoing Fintech projects provided by Kosta Du including Paymob and Money Zebra | Kostadu.com "/>
        <title>Examples of Fintech projects, Paymob and Money Zebra | Kostadu.com </title>
      </Head>
      <Box
        sx={{
          position: [null, null, 'absolute'],
          top: '0',
          right: '0',
          width: '100%',
          zIndex: -1,
        }}
      >
        <picture>
          <source media="(min-width: 768px)" srcset="/images/hot-air.svg" />
          <Image
            src="/images/hot-air-mobile.svg"
            alt="Hot Air Baloon"
            width="100%"
          ></Image>
        </picture>
      </Box>
      <Container as="section" pt={9}>
        <Main>
          <Heading as="h1" color="blue" mb={[8, null, 10]}>
            Ongoing Projects
          </Heading>
          <Box mb={[10, null, null, 11]}>
            {projects.ongoing.map((project) => (
              <Flex
                sx={{
                  flexDirection: ['column', 'row'],
                  bg: 'light',
                  mb: [8, 11],
                  justifyContent: 'space-between',
                }}
              >
                <Flex
                  p={[6, null, 8]}
                  sx={{ flexDirection: 'column', flexBasis: '50%' }}
                >
                  <Heading as="h2" variant="heading_2_alt" mb={[5, null, 7]}>
                    {project.title}
                  </Heading>
                  <Text
                    variant="body"
                    sx={{ opacity: 0.3, maxWidth: '40ch', pb: 4 }}
                  >
                    {project.desc}
                  </Text>
                  <Flex mt="auto">
                    {project.links && (
                      <Link
                        href={'https://' + project.links}
                        mr={3}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <Image src="/images/link.svg" alt="Link" mr="1" />
                        {project.links}
                      </Link>
                    )}
                    {project.presentation && (
                      <Link
                        href={'https://' + project.presentation}
                        mr={3}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <Image src="/images/link.svg" alt="Link" mr="1" />{' '}
                        Presentation
                      </Link>
                    )}
                  </Flex>
                </Flex>
                <Box
                  sx={{
                    flexBasis: ['260px', '50%'],
                    background: `${project.bg}`,
                    height: ['260px', '320px', '500px'],
                    backgroundRepeat: 'no-repeat',
                  }}
                ></Box>
              </Flex>
            ))}
          </Box>
        </Main>
      </Container>
      <Container>
        <Main>
          <Heading as="h1" color="blue" mb={[8, null, 10]}>
            My Past Initiatives
          </Heading>
          {projects.past.map((year) => (
            <Box sx={{ position: 'relative' }}>
              <Text
                variant="heading"
                color="blue"
                fontSize={[11, null, null, null, 11, 12]}
                mt="auto"
                sx={{
                  position: [null, null, null, 'absolute'],
                  left: [
                    null,
                    null,
                    'calc(100% + 30px)',
                    null,
                    null,
                    'calc(100% + 85px)',
                  ],
                  textAlign: ['right', null, null, 'left'],
                }}
              >
                {year.year}
              </Text>
              {year.projects.map((project) => (
                <Flex
                  sx={{
                    flexDirection: ['column', 'row'],
                    bg: 'light',
                    mb: [8, 11],
                    justifyContent: 'space-between',
                  }}
                >
                  <Flex
                    p={[6, null, 8]}
                    sx={{ flexDirection: 'column', flexBasis: '50%' }}
                  >
                    <Heading as="h2" variant="heading_2_alt" mb={[5, null, 7]}>
                      {project.title}
                    </Heading>
                    <Text
                      variant="body"
                      sx={{ opacity: 0.3, maxWidth: '40ch', pb: 4 }}
                      dangerouslySetInnerHTML={{__html: project.desc }}
                    />
                    <Flex mt="auto">
                      {project.links && (
                        <Link
                          href={'https://' + project.links}
                          mr={3}
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          <Image src="/images/link.svg" alt="Link" mr="1" />
                          {project.links}
                        </Link>
                      )}
                      {project.presentation && (
                        <Link
                          href={'https://' + project.presentation}
                          mr={3}
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          <Image src="/images/link.svg" alt="Link" mr="1" />{' '}
                          Presentation
                        </Link>
                      )}
                    </Flex>
                  </Flex>
                  <Box
                    sx={{
                      flexBasis: ['260px', '50%'],
                      background: `${project.bg}`,
                      minHeight: ['260px', '320px', 'auto'],
                      pt: '100%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></Box>
                </Flex>
              ))}
            </Box>
          ))}
        </Main>
      </Container>
    </Layout>
  );
}
