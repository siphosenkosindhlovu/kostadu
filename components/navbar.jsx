import { Flex, Box, Link, Text, Button } from 'rebass';
import NavLink from '../components/links/nav-link';
import Container from '../components/container';
import Avatar from './avatar';
import { useState } from 'react';
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  // const openStyles = isOpen ? 
  //   {
  //     display: block,

  //   } : {
  //   opacity: [0, ]
  // } 
  const navItems = [
    { href: '/bio', title: 'BIOGRAPGY' },
    { href: '/projects', title: 'PROJECTS' },
    { href: '/essays', title: 'ESSAYS' },
    { href: '/featured', title: 'PUBLICATIONS' },
    { href: '/videos', title: 'VIDEOS' },
    { href: '/contact', title: 'CONTACT' },
  ];
  return (
    <Container sx={{ zIndex: "10000", position: 'relative' }}>
      <Flex
        as="header"
        justifyContent="space-between"
        px={[0, null, null, null, 9]}
        py={6}
        sx={{ flexDirection: ['column', null, 'row'] }}
      >
        <Flex
          alignItems="center"
          sx={{ flexDirection: ['row'], justifyContent: 'space-between' }}
        >
          <Flex as="a" href="/" variant="link" alignItems="center">
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
            sx={{ display: [null, null, 'none'] }}
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </Button>
        </Flex>
        <Box
          
          as="navbar"
          flexDirection={['column', null, 'row']}
          alignItems={['flex-start', null, 'center']}
          pt={[10, null, 0]}
          mt={[10, null, 0]}
          sx={{
            display: [isOpen ? 'flex' : 'none', null, 'flex'],
            width: ['100vw', null, 'auto'],
            height: ['100vh', null, 'auto'],
            position: ['fixed', null, 'static'],
            top: 0,
            left: 0,
            px: 6,
            '&.animate' : {
              'display' : 'block'
            }
          }}
        >
          {navItems.map((navItem, i) => (
            <NavLink
              key={i}
              href={navItem.href}
              fontSize={[8, null, 4]}
              mr={0}
              ml={[0, null, 6]}
            >
              {navItem.title}
            </NavLink>
          ))}
        </Box>
      </Flex>
    </Container>
  );
}
