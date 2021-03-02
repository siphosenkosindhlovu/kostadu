import { Flex, Box, Link, Text, Button } from 'rebass';
import NavLink from '../components/links/nav-link';
import Container from '../components/container';
import Avatar from './avatar';
import { MoreHorizontal } from 'react-feather';
import { useState } from 'react';
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  // const openStyles = isOpen ?
  //   {
  //     display: block,

  //   } : {
  //   opacity: [0, ]
  // }
  const transitionName = 'navbar';
  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  const navItems = [
    { href: '/bio/', title: 'BIOGRAPHY' },
    { href: '/projects/', title: 'PROJECTS' },
    { href: 'https://kostadu.medium.com/', title: 'ESSAYS',  target: "_blank", rel: "noopener noreferrer" },
    { href: '/featured/', title: 'PUBLICATIONS' },
    { href: '/videos/', title: 'VIDEOS' },
    { href: '/contact/', title: 'CONTACT' },
  ];
  return (
    <Container sx={{ zIndex: '10000', position: 'relative' }}>
      <Flex
        id="top"
        as="header"
        justifyContent="space-between"
        px={0}
        py={6}
        sx={{ flexDirection: ['column', null, 'row'] }}
      >
        <Flex
          alignItems="center"
          sx={{ flexDirection: ['row'], justifyContent: 'space-between' }}
        >
          <Flex
            as="a"
            href="/"
            variant="link"
            alignItems="center"
            sx={{ zIndex: '1111' }}
          >
            <Avatar src="/images/avatar.png" mr={[4, null, null, null, 6]} />
            <Text
              as="span"
              fontFamily="heading"
              fontSize={[5, null, null, 7, 8]}
              sx={{ whiteSpace: 'nowrap' }}
            >
              Kosta{' '}
              <Text as="span" color="blue">
                Du
              </Text>
            </Text>
          </Flex>
          <Button
            variant="primary"
            sx={{
              display: [null, null, 'none'],
              zIndex: '1111',
              border: 'none',
              height: 'auto',
              transition: 'transform 0.5s ease',
              transform: `rotate(${isOpen ? '90deg' : '0'})`,
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'blue',
              },
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MoreHorizontal width="36" height="36" />
          </Button>
        </Flex>
        <Box
          as="nav"
          flexDirection={['column', null, 'row']}
          alignItems={['flex-start', null, 'center']}
          pt={[12, null, 0]}
          sx={{
            display: [isOpen ? 'flex' : 'none', null, 'flex'],
            width: ['100vw', null, 'auto'],
            height: ['100vh', null, 'auto'],
            position: ['fixed', null, 'static'],
            bg: ['white', null, 'transparent'],
            top: 0,
            left: 0,
            px: 6,
            pr: 0,
            zIndex: '1110',
          }}
        >
          {navItems.map(({href, title, ...rest}, i) => (
            <NavLink
              key={i}
              href={href}
              fontSize={[8, null, 4]}
              mr={0}
              ml={[0, null, 6]}
              sx={{
                '&:last-child': {
                  mr: '0',
                },
              }}
              {...rest}
            >
              {title}
            </NavLink>
          ))}
        </Box>
      </Flex>
    </Container>
  );
}
