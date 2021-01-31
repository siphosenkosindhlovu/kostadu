import { Box } from 'rebase';

export default function Container({ section = true, children, ...props }) {
  return <Box sx={{ maxWidth: section ? '100%' : '1396px', ...props.sx }}>
    {children}
  </Box>;
}
