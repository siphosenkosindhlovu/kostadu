import { Box } from 'rebass';

export default function Main({ withAside = false, children, ...props }) {
  const getWidth = withAside ? '50%' : 'auto';
  return (
    <Box
      ml={[null, null, '10%']}
      mr={[null, null, withAside ? '0' : '10%']}
      width={[null, null, getWidth]}
      {...props}
    >
      {children}
    </Box>
  );
}
