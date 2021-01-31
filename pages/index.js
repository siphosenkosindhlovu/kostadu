import Layout from '../components/layout';
import Container from '../components/container';
import NavLink from '../components/links/nav-link'
import { Box, Heading, Text, Image } from 'rebass';
//import Image from 'next/image'
export default function Home() {
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
            <Text as="span" color="blue">Kosta Du</Text> - leader, speaker and <Text as="span" color="purple">entrepreneur</Text>.</Heading>
        </Box>
        <Box
          sx={{
            gridColumnStart: [null, '7', '8'],
            gridColumnEnd: '11',
            position: 'relative',
          }}
        >
        </Box>
      </Container>
      <Box bg="lightBlue">
        <Container variant="grid">
          <Box
            sx={{
              gridColumnStart: [null, '1', '2'],
              gridColumnEnd: '6',
              pb: 8
            }}
          >
            <Heading color="blue" sx={{ transform: 'translateY(-50%)' }}>
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
            <NavLink
              href={'/biograpgy'}
            >
              READ BIOGRAPGHY
            </NavLink>
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
                 transform: [null, 'translateY(-50%)']
              }}
            ></Image>
          </Box>  
        </Container>
      </Box>
    </Layout>
  );
}
