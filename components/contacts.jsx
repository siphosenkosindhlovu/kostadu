import { Box, Heading } from 'rebass';
const socialLinks = [
  {
    name: 'YouTube',
    link: 'https://m.youtube.com/c/KostaDu',
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/kostadu',
  },
  {
    name: 'Telegram',
    link: 'https://t.me/KostaDu',
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
