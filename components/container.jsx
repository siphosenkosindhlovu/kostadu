import { Box } from 'rebass';

export default function Container({ section = false, children, sx, ...props }) {
  return (
    <Box
      {...props}
      sx={{
        maxWidth: section ? '100%' : '1396px',
        px: [6, null, null, 2],
        m: 'auto',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
