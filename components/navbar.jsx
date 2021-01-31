import { Flex, Box, Link, Text } from 'rebass';
import NavLink from '../components/links/nav-link';
import Container from '../components/container';
import Avatar from './avatar';
export default function NavBar() {
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
        px={[6, null, null, null, 8]}
        py={[0, null, null, null, 8]}
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

        <Flex
          flexDirection={['column', null, 'row']}
          as="navbar"
          alignItems="center"
        >
          {navItems.map((navItem, i) => (
            <NavLink key={i} href={navItem.href}>
              {navItem.title}
            </NavLink>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}
