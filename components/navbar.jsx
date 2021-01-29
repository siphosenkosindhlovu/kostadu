import { Flex, Box, Link, Text } from 'rebass';
import NavLink from '../components/links/nav-link';
import Avatar from './avatar';
export default function NavBar() {
  const navItems = {
  }
  return (
    <Flex as="header" justifyContent="space-between" px={[6, null, null, null, 8]} py={[6, null, null, null, 8]}>
      <Flex alignItems="center">
        <Avatar src="/images/avatar.png" mr={[3, null, null, null, 5]} />
        <Text 
          as="span" 
          fontFamily="heading" 
          fontSize={[5, null, null, 7, 8]}>
          Kosta{' '}
          <Text as="span" color="blue">
            Du
          </Text>
        </Text>
      </Flex>
      
      <Flex flexDirection={["column", null, "row"]} as="navbar" alignItems="center">
        <NavLink href="/biograpgy">
          BIOGRAPGY
        </NavLink>
        <NavLink href="/projects">
          PROJECTS
        </NavLink>
        <NavLink href="/essays">
          ESSAYS
        </NavLink>
        <NavLink href="/publications">
          PUBLICATIONS
        </NavLink>
        <NavLink href="/videos">
          VIDEOS
        </NavLink>
        <NavLink href="/contact">
          CONTACT
        </NavLink>
      </Flex>
    </Flex>
  );
}
