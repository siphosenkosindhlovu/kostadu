import { Box } from 'rebass';

export default function Aside({withAside, children, ...props }) {
  const getWidth = withAside ? '30%' : 'auto';
  return (
    <Box
      ml={[null, null, '10%']}
      mr={[null, null, withAside ? '10%' : 'auto']}
      width={[null, null, getWidth]}
      {...props}
    >
      {children}
    </Box>
  );
}
