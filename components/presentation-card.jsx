import { Box, Heading, Text, Image } from 'rebass';

const PresentationCard = ({ title, location_date, img, ...props }) => (
  <Box {...props} sx={{ position: 'relative' }}>
    <Image src={`/images/${img}`} alt={title}></Image>
    <Box sx={{ opacity: 0.6, position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, backgroundImage: 'linear-gradient(180deg, #1D1D1B00 0%, #1D1D1B 65%, #1D1D1B 100%)' }}></Box>
    <Box
      p={6}
      color="white"
      sx={{
        position: ['absolute'],
        bottom: 0,
        width: ['100%', null, '450px'],
      }}
    >
      <Heading variant="heading_2" mb={2}>
        {title}
      </Heading>
      <Text sx={{ opacity: 0.6 }}>{location_date}</Text>
    </Box>
  </Box>
);

export default PresentationCard;