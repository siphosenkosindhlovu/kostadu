import {Box} from 'rebass'
export default function Layout({children, ...props}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fonts/stylesheet.css" />
      </Head>
      <NavBar/>
      <main>
      {children}
      </main>
    </>
  );
}
