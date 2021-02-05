import { Box } from 'rebass';
import Head from 'next/head';
import NavBar from './navbar'
import Footer from './footer'
export default function Layout({ children, ...props }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fonts/stylesheet.css" />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer/>
    </>
  );
}
