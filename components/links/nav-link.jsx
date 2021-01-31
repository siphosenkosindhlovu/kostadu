import Link from 'next/link';
import BaseLink from './base-link';

export default function NavLink({ href, children, ...props }) {
  return (
    <Link href={href} passHref>
      <BaseLink
        variant="navlink"
        my={2}
        ml={0}
        {...props}
        sx={{
          textTransform: 'uppercase',
          mx: 3,
          position: 'relative',
          '&:after': {
            content: '" "',
            display: 'block',
            position: 'absolute',
            bottom: -1,
            width: '0%',
            height: '4px',
            bg: 'blue',
            transition: 'all 0.3s',
          },
          '&:hover': {
            '&:after': {
              width: '100%',
            },
          },
        }}
      >
        {children}
      </BaseLink>
    </Link>
  );
}
