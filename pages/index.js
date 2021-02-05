import Layout from '../components/layout';
import Container from '../components/container';
import NavLink from '../components/links/nav-link';
import { Box, Heading, Text, Image, Card, Link, Button, Flex } from 'rebass';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Contact = (props) => (
  <>
    <Heading
      variant="subheading"
      mb={8}
      pb={[0, null, 2]}
      fontSize={[6, 8]}
      color="darkBlue"
    >
      I am social
    </Heading>
    <Box>
      <Heading
        as="a"
        href="#"
        mb={[8, null, null, null, 10]}
        variant="heading"
        fontSize={[6, null, null, null, 10]}
        sx={{ display: 'block', color: 'white', textDecoration: 'none' }}
      >
        YouTube
      </Heading>
      <Heading
        as="a"
        href="#"
        mb={[8, null, null, null, 10]}
        variant="heading"
        fontSize={[6, null, null, null, 10]}
        sx={{ display: 'block', color: 'white', textDecoration: 'none' }}
      >
        Linkedin
      </Heading>
      <Heading
        as="a"
        href="#"
        mb={[8, null, null, null, 10]}
        variant="heading"
        fontSize={[6, null, null, null, 10]}
        sx={{ display: 'block', color: 'white', textDecoration: 'none' }}
      >
        Telegram
      </Heading>
    </Box>
  </>
);
//import Image from 'next/image'
export default function Home() {
  const sliderSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          donts: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
        ></Box>
      </Container>
      <Box bg="lightBlue" pb={[5, null, 11]}>
        <Container variant="grid" mb={6}>
          <Box
            sx={{
              gridColumnStart: [null, '1', '2'],
              gridColumnEnd: '6',
              pb: 8,
            }}
          >
            <Heading as="h2" color="blue" sx={{ transform: 'translateY(-50%)' }}>
              I launch businesses and projects.
            </Heading>
            <Text as="p" variant="body" pb={8}>
              I am a results-driven leader and an inspirational changemaker. My
              vision is to transform the fintech industry through the use of
              platform-like technologies. I use this web hub to share my
              thoughts through essays and videos around fintech industry and
              technologies. I keen to do project management and execution
              worldwide.
            </Text>
            <NavLink href={'/biograpgy'}>READ BIOGRAPGHY</NavLink>
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
                transform: [null, 'translateY(-50%)'],
              }}
            ></Image>
          </Box>
        </Container>
        <Container>
          <Flex mb={4} justifyContent="space-between" alignItems="center">
            <Heading as="h2" variant="subheading">
              PROJECTS
            </Heading>
            <Box sx={{ display: [null, null, 'none'] }}>
              <Button
                mr={2}
                sx={{ boxShadow: '10px 15px 20px #00000029', border: 'none' }}
              >
                Next
              </Button>
              <Button
                sx={{ boxShadow: '10px 15px 20px #00000029', border: 'none' }}
              >
                Prev
              </Button>
            </Box>
          </Flex>

          <Slider {...sliderSettings}>
            <Box
              sx={{
                position: 'relative',
                display: 'inline-block',
                pr: [null, 2],
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#08243B',
                }}
              >
                <Image src="images/paymobbanner.svg"></Image>
                <Box
                  bg="white"
                  p={4}
                  sx={{
                    position: [null, null, 'absolute'],
                    bottom: 0,
                    width: ['100%', null, '300px'],
                  }}
                >
                  <Heading variant="subheading" mb={2}>
                    Paymob
                  </Heading>
                  <Text sx={{ opacity: 0.3 }}>
                    On-land payment infrastructure for the next generation
                    merchant services.
                  </Text>
                  <Box textAlign="right">
                    <Button as={Link} href="#">
                      Go
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: 'relative',
                display: 'inline-block',
                pl: [null, 2],
              }}
            >
              <Box>
                <Image src="images/slide_03.png"></Image>
                <Box
                  bg="white"
                  p={4}
                  sx={{
                    position: [null, null, 'absolute'],
                    bottom: 0,
                    width: ['100%', null, '300px'],
                  }}
                >
                  <Heading variant="subheading" mb={2}>
                    Money Zebra
                  </Heading>
                  <Text sx={{ opacity: 0.3 }}>
                    Transparent auction marketplace for financial services to
                    access emerging markets
                  </Text>
                  <Box textAlign="right">
                    <Button as={Link} href="#">
                      Go
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Slider>
        </Container>
      </Box>
      <Container as="section" py={[10, 12]}>
        <Heading as="h2" variant="subheading" mb={8}>
          LATEST ESSAYS
        </Heading>
        <Box
          sx={{
            display: [null, 'grid'],
            gridTemplateColumns: [null, '1fr 1fr', '1fr 1fr 1fr'],
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((_) => (
            <Card
              sx={{
                borderColor: 'purple',
                borderWidth: '1px',
                borderStyle: 'solid',
              }}
            >
              <Text opacity={0.3} mb={6} fontSize={[1, 4]}>
                15 December
              </Text>
              <Heading variant="heading_2" color="blue" mb={6}>
                Insight of FinTech in Future
              </Heading>
              <Text opacity={0.3}>
                Technology has become our best friend in recent years. The new
                and modern techs that improve and update about every single day
                add to our…
              </Text>
              <Box textAlign="right">
                <Button as={Link} href="#">
                  Go
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
      <Box as="section" bg="rgba(49, 46, 230, 0.3)">
        <Container
          width={[null, null, '50%']}
          textAlign="center"
          py={[10, null, 11]}
        >
          <Text variant="heading" color="altBlue">
            I Aim to Help You to Build a Vision, Grasp Effort, Get Inspired to
            Execute.
            <br />
            <br />
            Let’s Master the Fintech Industry.
          </Text>
        </Container>
      </Box>
      <Box
        as="section"
        sx={{
          backgroundImage: [
            null,
            null,
            '-webkit-linear-gradient(left, #3359CF 40%, white 40%)',
          ],
        }}
      >
        <Container
          sx={{ display: [null, null, 'flex'], flexDirection: 'row-reverse' }}
        >
          <Box
            width={['100%', null, '60%']}
            pl={[null, null, '10%']}
            py={[10, null, 11]}
          >
            <Box width={['75%', null, '100%', '70%']}>
              <Heading mb={8} pb={[0, null, null, null, 2]} fontSize={[8, 10]} color="blue">
                Do you think, I can do more for you?
              </Heading>
              <Text mb={[8, null, null, null, 11]} fontSize={[6, 9]}>
                Let’s talk. I’ll show you how to launch your own business and
                promise to give the best advice.
              </Text>

              <NavLink href={'/biograpgy'}>GO TO CONTACTS</NavLink>
            </Box>
          </Box>

          <Box
            bg="blue"
            width={['100%', null, '40%']}
            py={[10, null, 11]}
            sx={{ display: ['none', null, 'block'] }}
          >
            <Contact />
          </Box>
        </Container>

        <Box
          bg="blue"
          py={[10, null, 11]}
          sx={{ display: ['block', null, 'none'] }}
        >
          <Container>
            <Contact />
          </Container>
        </Box>
      </Box>
    </Layout>
  );
}
