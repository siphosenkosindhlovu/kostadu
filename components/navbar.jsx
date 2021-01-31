import { Flex, Box, Link, Text, Button } from 'rebass';
import NavLink from '../components/links/nav-link';
import Container from '../components/container';
import Avatar from './avatar';
import { useState } from 'react';
export default function NavBar() {
  const [isOpen ,setIsOpen]  = useState(false)
  const navItems = [
    { href: '/biograpgy', title: 'BIOGRAPGY' },
    { href: '/projects', title: 'PROJECTS' },
    { href: '/essays', title: 'ESSAYS' },
    { href: '/publications', title: 'PUBLICATIONS' },
    { href: '/videos', title: 'VIDEOS' },
    { href: '/contact', title: 'CONTACT' },
  ];
  return (
    <Container>
      <Flex
        as="header"
        justifyContent="space-between"
        px={[0, null, null, null, 8]}
        py={[6, null, null, null, 8]}
        sx={{ flexDirection: ['column', null, null, 'row'] }}
      >
        <Flex
          alignItems="center"
          sx={{ flexDirection: ['row'], justifyContent: 'space-between' }}
        >
          <Flex alignItems="center">
            <Avatar src="/images/avatar.png" mr={[3, null, null, null, 5]} />
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
          <Button sx={{display: [null, null, null, 'none']}} onClick={() => setIsOpen(!isOpen)}>Menu</Button>
        </Flex>
        <Box
          as="navbar"
          flexDirection={['column', null, 'row']}
          alignItems={['flex-start', null, 'center']}
          pt={[9, 0]}
          mt={[9, 0]}
          sx={{
            display: [isOpen ? 'flex' : 'none', null, null, 'flex'],
            width: ['100vw', null, null, 'auto'],
            height: ['100vh', null, null, 'auto'],
            position: ['fixed', null, null, 'static'],
            top: 0,
            left: 0,
            px: 6,
          }}
        >
          {navItems.map((navItem, i) => (
            <NavLink
              key={i}
              href={navItem.href}
              fontSize={[8, null, null, 4]}
              pb={2}
              ml={0}
            >
              {navItem.title}
            </NavLink>
          ))}
        </Box>
      </Flex>
    </Container>
  );
}
