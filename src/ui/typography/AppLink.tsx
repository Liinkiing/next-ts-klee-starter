import { Box, BoxProps, KleeFontFamily, KleeFontWeight } from '@liinkiing/klee'
import Link, { LinkProps } from 'next/link'
import React from 'react'

interface Props extends LinkProps, BoxProps {}

const AppLink = React.forwardRef<HTMLElement, Props>(
  ({ href, as, replace, scroll, shallow, prefetch, passHref = true, ...rest }, ref) => {
    return (
      <Link
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}
        prefetch={prefetch}
      >
        <Box
          ref={ref}
          sx={{ textDecoration: 'none' }}
          fontWeight={KleeFontWeight.Semibold}
          fontFamily={KleeFontFamily.Body}
          color="blue.800"
          as="a"
          {...rest}
        />
      </Link>
    )
  },
)

AppLink.displayName = 'AppLink'

export default AppLink
