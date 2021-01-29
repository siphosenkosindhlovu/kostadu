import {Box} from 'rebass'
export default function Layout({children, ...props}) {
  return (
    <Box {...props} sx={{
      maxWidth: '1640px',
      margin: 'auto',
      px: [6, 0]
    }}>
      {children}
    </Box>
  );
}
