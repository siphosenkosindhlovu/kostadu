import { Box } from 'rebass';

export default function Main({ withAside = false, children, ...props }) {
  const getWidth = withAside ? '50%' : 'auto';
  return (
    <Box
      ml={[null, '10%']}
      mr={[null, withAside ? '0' : '10%']}
      width={[null, getWidth]}
      {...props}
    >
      {children}
    </Box>
  );
}
