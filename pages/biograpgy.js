import Layout from '../components/layout';
import Container from '../components/container';
import { Box, Heading, Text, Image, Card, Link, Button, Flex } from 'rebass';
import Main from '../components/main';
import education from '../lib/education';
import presenting from '../lib/presenting';
import PresentationCard from '../components/presentation-card';
let formattedPresenting = [[]];
for (let i = 0; i < presenting.length; i++) {
  if ((i + 1) % 3 == 0) {
    formattedPresenting.push(presenting[i]);
  } else {
    const lastIndex = formattedPresenting.length - 1;
    if (formattedPresenting[lastIndex] instanceof Array) {
      formattedPresenting[lastIndex].push(presenting[[i]]);
    } else {
      formattedPresenting.push([presenting[i]]);
    }
  }
}

export default function Biograpgy() {
  return (
    <Layout>
      <Container as="section" pt={9} pb={10} variant="grid">
        <Box
          sx={{
            gridColumnStart: [null, '1', '2'],
            gridColumnEnd: '7',
          }}
        >
          <Heading>
            <Text as="span" color="blue">
              Kosta Du
            </Text>{' '}
            - leader, speaker and{' '}
            <Text as="span" color="purple">
              entrepreneur
            </Text>
            .
          </Heading>
        </Box>
        <Box
          sx={{
            gridColumnStart: [null, '7', '8'],
            gridColumnEnd: '11',
            position: 'relative',
          }}
        >
          <Image
            src="/images/experienceimage@2x.png"
            alt="Portrait of Kosta Du"
            width="100%"
            height="auto"
            sx={{
              transform: [null, 'translateY(0%)'],
              position: [null, 'absolute'],
            }}
          ></Image>
        </Box>
      </Container>
      <Box bg="lightBlue" pt={[10, null, 11]} pb={[5, null]}>
        <Container variant="grid" mb={6}>
          <Box
            sx={(theme) => ({
              gridColumnStart: [null, '1', '2'],
              gridColumnEnd: '7',
              pb: theme.space[8],
            })}
          >
            <Heading variant="subheadingLight">ORIGIN</Heading>
            <Text as="p" variant="heading_2" pb={8}>
              Was born in Siberia, Russia. Grew up in Moscow. Had been living in
              China, Egypt, US, Ireland. Now live in London, Great Britain.
              Married.
              <br />
              <br />
              Have a son. Speak fluent English and native Russian.
            </Text>
          </Box>
        </Container>
        <Container variant="grid" mb={6}>
          <Box
            sx={(theme) => ({
              gridColumnStart: [null, '1', '2'],
              gridColumnEnd: '7',
              pb: theme.space[8],
            })}
          >
            <Heading variant="subheadingLight">CAREER</Heading>
            <Text as="p" variant="heading_2" pb={8}>
              Asymmetrical thinker capable of crossing the intellectual and
              practical boundaries of business and technology. Strong
              combination of entrepreneurial spirit, vision and drive.
              <br />
              <br />
              Launching businesses and projects from scratch, starting at only
              an opaque idea is a key speciality.
            </Text>
          </Box>
          <Box
            sx={{
              gridColumnStart: [null, '7', '8'],
              gridColumnEnd: '10',
              position: 'relative',
            }}
          >
            <Heading
              as="h2"
              variant="subheading"
              mb={[4, null, null, 6]}
              color="purple"
            >
              AT 24 YEARS OLD
            </Heading>
            <Text color="blue" as="p" variant="heading_2" pb={8}>
              2 million dollars revenue
            </Text>
            <Heading
              as="h2"
              variant="subheading"
              mb={[4, null, null, 6]}
              color="purple"
            >
              GREAT PROJECT MANAGER
            </Heading>
            <Text color="blue" as="p" variant="heading_2" pb={8}>
              56 employees the biggest team
            </Text>
          </Box>
        </Container>
      </Box>
      <Box pt={[10, null, 10]} pb={[5]}>
        <Container variant="grid" mb={6}>
          <Box
            sx={(theme) => ({
              gridColumnStart: [null, '1', '2'],
              gridColumnEnd: '7',
              pb: theme.space[8],
            })}
          >
            <Text as="p" variant="heading_2" pb={8}>
              Known for high touch relationship building, international
              expansion, stretch-the-box strategy thinking and team-building
              combined with a renaissance perspective of the world.
              <br />
              <br />
              Years of providing a unique combination of innovative approaches,
              vision, strategic planning/readiness, transformation and
              international experience to both large enterprises and startups.
              Tetris-like ability to enable/ leverage and enhance existing
              business models and ecosystems.
              <br />
              <br />
              Wide peripheral vision and ability to connect the dots in the
              technology and business worlds.
            </Text>
          </Box>
          <Box
            sx={{
              gridColumnStart: [null, '7', '8'],
              gridColumnEnd: '10',
              position: 'relative',
            }}
          >
            <Heading
              as="h2"
              variant="subheading"
              mb={[4, null, null, 6]}
              color="purple"
            >
              A LONG TIME DOING THIS
            </Heading>
            <Text color="blue" as="p" variant="heading_2" pb={8}>
              18 years in business
            </Text>
          </Box>
        </Container>
      </Box>
      <Box bg="lightBlue">
        <Container pt={[10, null, 10]} pb={[5]}>
          <Main>
            {education.map(({ img, years, location, programme, name }, i) => (
              <Box
                sx={{
                  display: ['flex', null, 'grid'],
                  flexDirection: 'column-reverse',
                  gridTemplateColumns: 'repeat(8, 1fr)',
                }}
                key={i}
              >
                <Box sx={{ gridColumnStart: 1, gridColumnEnd: 6, pb: 10 }}>
                  <Heading
                    as="h2"
                    variant="subheading"
                    mb={[4, null, null, 6]}
                    color="purple"
                    sx={{
                      display: ['block', null, i === 0 ? 'block' : 'none'],
                    }}
                  >
                    EDUCATION
                  </Heading>
                  <Image
                    src={img}
                    width="122px"
                    height="122px"
                    mb={[7, null, 8]}
                  ></Image>
                  <Text
                    sx={{
                      opacity: 0.4,
                      fontSize: [2, null, 4],
                      mb: [4, null, 7],
                    }}
                  >
                    {name}
                    <br />
                    {location}
                  </Text>
                  <Text variant="heading_2">{programme}</Text>
                </Box>
                <Box
                  sx={(theme) => ({
                    gridColumnStart: 6,
                    gridColumnEnd: 9,
                    pb: 10,
                    pl: [null, null, '60px'],
                    display: 'flex',
                    flexDirection: 'column',
                    borderLeft: [
                      null,
                      null,
                      `1px solid ${theme.colors.purple}`,
                    ],
                  })}
                >
                  <Heading
                    as="h2"
                    variant="subheading"
                    mb={[4, null, null, 6]}
                    color="purple"
                    sx={{
                      alignSelf: 'flex-start',
                      display: ['block', null, i === 0 ? 'block' : 'none'],
                    }}
                  >
                    YEARS
                  </Heading>
                  <Text
                    variant="heading"
                    color="blue"
                    fontSize={[11, null, null, 12]}
                    mt="auto"
                  >
                    - {years.start}
                    <br />
                    {years.end} -
                  </Text>
                </Box>
              </Box>
            ))}
          </Main>
        </Container>
      </Box>

      <Container pt={[10, null, 10]} pb={[5]}>
        <Heading as="h2" textAlign="center" mb={[10, null, null, 11]}>
          My presenting
        </Heading>
        <Box>
          {formattedPresenting.map((current, i) => {
            if (i % 2 == 0) {
              return (
                <Flex mb={[5, null, 10]}>
                  {current.map((presenting, j) => (
                    <PresentationCard mr={[null, j % 2 == 0 ? '8px' : 0]} ml={[null, j % 2 != 0 ? '8px' : 0]} {...presenting} />
                  ))}
                </Flex>
              );
            } else {
              return <PresentationCard mb={[5, null, 10]} {...current} />;
            }
          })}
          {/* {presenting
            .reduce(
              (acc, curr, i) => {
                if ((i + 1) % 3 === 0) {
                  return [...acc, curr];
                } else {
                }
              },
              [[]],
            )
            .map((presentation, i) => (
              <Flex>
                <PresentationCard {...presentation} />
              </Flex>
            ))} */}
        </Box>
      </Container>
    </Layout>
  );
}
