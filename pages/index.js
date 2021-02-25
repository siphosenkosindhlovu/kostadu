import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import NavLink from '../components/links/nav-link';
import Contacts from '../components/contacts';
import { Box, Heading, Text, Image, Card, Link, Button, Flex } from 'rebass';
import { ArrowRight, ArrowLeft, MoreHorizontal } from 'react-feather';
import { useRef, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import Slider from 'react-slick';
import essays, { getMediumPosts } from '../lib/essays';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//import Image from 'next/image'
export async function getStaticProps() {
  const data = await getMediumPosts();
  const posts = data.items
    .map((post) => {
      let content = post.description;
      const regex = /<p>(.*?)<\/p>/;
      const corresp = regex.exec(content);
      const firstParagraph = corresp ? corresp[0] : '';
      return {
        ...post,
        pubDate: format(parseISO(post.pubDate), 'dd MMMM '),
        content: firstParagraph,
      };
    })
    .slice(0, 6);
  return {
    props: {
      posts,
    },
  };
}
export default function Home(props) {
  const slider = useRef();
  const sliderSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Kosta Du is a Fintech Leader, Speaker and Entrepreneur with extensive experience in business projects"
        />
        <title>Kosta Du Fintech Leader. Speaker. Entrepreneur.</title>
      </Head>
      <Container as="section" pt={9} pb={11} variant="grid">
        <Box
          sx={{
            gridColumnStart: [null, '1', '2'],
            gridColumnEnd: '7',
          }}
        >
          <Heading as="h1">
            <Text as="span" color="blue">
              Kosta Du
            </Text>{' '}
            -Fintech leader, speaker and{' '}
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
        <Container variant="grid">
          <Box
            py={8}
            pt={[null, 0]}
            sx={{
              gridColumnStart: [null, '1', '2'],
              gridColumnEnd: '6',
            }}
          >
            <Heading
              as="h2"
              color="blue"
              sx={{ transform: [null, 'translateY(-50%)'] }}
            >
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
            <NavLink href={'/bio/'}>READ BIOGRAPHY</NavLink>
          </Box>
          <Box
            mb={[8, null, null, '-10%', '-50%']}
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
        <Container mb={8}>
          <Flex mb={4} justifyContent="space-between" alignItems="center">
            <Heading as="h3" variant="subheading">
              PROJECTS
            </Heading>
            <Box sx={{ display: [null, 'none'] }}>
              <Button
                variant="icon-action"
                mr={2}
                onClick={() => slider.current.slickPrev()}
              >
                <ArrowLeft />
              </Button>
              <Button
                variant="icon-action"
                onClick={() => slider.current.slickNext()}
              >
                <ArrowRight />
              </Button>
            </Box>
          </Flex>
          <Box
            sx={{
              '.slick-track': {
                display: ['flex !important', null, 'block !important'],
              },
              '.slick-slide': {
                height: 'inherit !important',
                '& > div ': {
                  height: '100%',
                  '& >div': {
                    height: '100%',
                  },
                },
              },
            }}
          >
            <Slider ref={slider} {...sliderSettings}>
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
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Image src="/images/paymobbanner.svg"></Image>
                  <Box
                    bg="white"
                    p={4}
                    sx={{
                      position: [null, null, 'absolute'],
                      bottom: 0,
                      width: ['100%', null, '300px'],
                      flex: '1',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Heading variant="subheading" mb={2}>
                      Paymob
                    </Heading>
                    <Text sx={{ opacity: 0.3 }}>
                      On-land payment infrastructure for the next generation
                      merchant services.
                    </Text>
                    <Box textAlign="right" mt="auto" width="100%">
                      <Button
                        variant="icon-link"
                        as={Link}
                        href="https://paymobtech.com"
                      >
                        <ArrowRight />
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
                <Box
                  sx={{
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Image src="/images/Slide_03.png"></Image>
                  <Box
                    bg="white"
                    p={4}
                    sx={{
                      position: [null, null, 'absolute'],
                      bottom: 0,
                      width: ['100%', null, '300px'],
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Heading variant="subheading" mb={2}>
                      Money Zebra
                    </Heading>
                    <Text sx={{ opacity: 0.3 }}>
                      Transparent auction marketplace for financial services to
                      access emerging markets
                    </Text>
                    <Box textAlign="right" mt="auto" width="100%">
                      <Button
                        variant="icon-link"
                        as={Link}
                        href="https://zebra.money"
                      >
                        <ArrowRight />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Slider>
          </Box>
        </Container>
      </Box>
      <Container as="section" py={[10, 12]}>
        <Heading as="h3" variant="subheading" mb={8}>
          LATEST ESSAYS
        </Heading>
        <Box
          sx={{
            display: [null, 'grid'],
            gridTemplateColumns: [null, '1fr 1fr', '1fr 1fr 1fr'],
          }}
        >
          {props.posts.map(({ pubDate, title, content, link }, i) => (
            <Card
              key={i}
              sx={{
                borderColor: 'purple',
                borderWidth: '1px',
                borderStyle: 'solid',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Text opacity={0.3} mb={6} fontSize={[1, 4]}>
                {pubDate}
              </Text>
              <Heading as="h2" variant="heading_2" color="blue" mb={6}>
                {title}
              </Heading>
              <Text
                opacity={0.3}
                sx={{
                  p: {
                    maxHeight: '5.75rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    position: 'relative',
                    '&:after': {
                      position: 'absolute',
                      content: '"  "',
                      display: 'block',
                      width: '70%',
                      height: '1rem',
                      bottom: 0,
                      right: 0,
                      background:
                        'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%)',
                    },
                  },
                }}
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <Box textAlign="right" mt="auto" width="100%">
                <Button variant="icon-link" as={Link} href={link}>
                  <MoreHorizontal />
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
              <Heading
                mb={8}
                pb={[0, null, null, null, 2]}
                fontSize={[8,null, null, 10]}
                color="blue"
              >
                Do you think, I can do more for you?
              </Heading>
              <Text mb={[8, null, null, null, 11]} fontSize={[6, 9]}>
                Let’s talk. I’ll show you how to launch your own business and
                promise to give the best advice.
              </Text>

              <NavLink href={'/contact/'}>GO TO CONTACTS</NavLink>
            </Box>
          </Box>

          <Box
            bg="blue"
            width={['100%', null, '40%']}
            py={[10, null, 11]}
            sx={{ display: ['none', null, 'block'] }}
          >
            <Heading
              variant="subheading"
              mb={8}
              pb={[0, null, 2]}
              fontSize={[6, 8]}
              color="darkBlue"
            >
              I am social
            </Heading>
            <Contacts />
          </Box>
        </Container>

        <Box
          bg="blue"
          py={[10, null, 11]}
          sx={{ display: ['block', null, 'none'] }}
        >
          <Container>
            <Heading
              variant="subheading"
              mb={8}
              pb={[0, null, 2]}
              fontSize={[6, 8]}
              color="darkBlue"
            >
              I am social
            </Heading>
            <Contacts />
          </Container>
        </Box>
      </Box>
    </Layout>
  );
}
