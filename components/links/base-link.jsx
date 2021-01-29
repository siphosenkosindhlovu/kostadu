import { Link } from 'rebass';

export default function BaseLink({children, ...props}) {
  return (
    <Link
      {...props}
      sx={{
        textDecoration: 'none',
        color: 'dark',
        ...props.sx
      }}
    >{children}</Link>
  );
}
