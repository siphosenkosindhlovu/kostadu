import { Box, Heading } from 'rebass';
const socialLinks = [
  {
    name: 'YouTube',
    link: '#',
  },
  {
    name: 'LinkedIn',
    link: '#',
  },
  {
    name: 'Telegram',
    link: '#',
  },
];
const Contacts = (props) => (
  <>
    {socialLinks.map((link, i) => (
      <Heading
        key={i}
        as="a"
        href={link.link}
        mb={[8, null, null, null, 10]}
        variant="heading"
        fontSize={[6, null, null, null, 10]}
        sx={{ display: 'block', color: 'white', textDecoration: 'none' }}
      >
        {link.name}
      </Heading>
    ))}
  </>
);

export default Contacts;
