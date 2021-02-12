import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import Main from '../components/main';
import Aside from '../components/aside';
import getYouTubeVideos from '../lib/youtube';
import { formatDistanceStrict } from 'date-fns';
import { Box, Heading, Text, Image, Card, Link, Button, Flex } from 'rebass';

export async function getStaticProps() {
  const { items } = await getYouTubeVideos();
  let videoList = items.map((video) => ({
    ...video.snippet,
    publishedAt: formatDistanceStrict(
      new Date(video.snippet.publishedAt),
      Date.now(),
    ),
  }));
  return {
    props: {
      videoList,
    },
  };
}

export default function Publication({ videoList }) {
  console.log(videoList);
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Kosta Du Fintech and Smart POS Terminal videos from my YouTube channel"
        />
        <title>Videos of Fintech Projects | Kosta Du</title>
      </Head>
      <Container as="section" pt={9}>
        <Main>
          <Heading as="h1" mb={[8, null, 10]}>
            Fintech and POS Terminal videos from my YouTube channel
          </Heading>
        </Main>
      </Container>
      <Box as="section" bg="light" pt={10} pb={5}>
        <Container>
          <Main>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
                columnGap: '17.5px',
                rowGap: [6, null, 8],
              }}
            >
              {videoList.map((video) => (
                <Box
                  as="a"
                  variant="link"
                  href={`https://www.youtube.com/watch?v=${video.resourceId.videoId}`}
                  key={video.id}
                >
                  <Image mb={4} src={video.thumbnails.medium.url} />
                  <Heading as="h2" variant="heading_3" maxWidth="24ch" mb="2">
                    {video.title}
                  </Heading>
                  <Text opacity="40%">{video.publishedAt} ago</Text>
                </Box>
              ))}
            </Box>
          </Main>
        </Container>
      </Box>
    </Layout>
  );
}
