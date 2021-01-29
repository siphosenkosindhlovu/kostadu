import Head from 'next/head';
import Layout from '../components/layout'
import NavBar from '../components/navbar'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fonts/stylesheet.css" />
      </Head>
      <NavBar/>
    </Layout>
  );
}
