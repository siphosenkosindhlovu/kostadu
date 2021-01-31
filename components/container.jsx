import { Box } from 'rebass';

export default function Container({ section = false, children, ...props }) {
  return (
    <Box
      sx={{
        maxWidth: section ? '100%' : '1396px',
        px: [6, null, null, 2],
        m: 'auto',
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
}
