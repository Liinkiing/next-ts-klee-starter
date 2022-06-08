import type { BoxProps } from '@liinkiing/klee'
import { Box, KleeFontFamily, KleeFontWeight, useColorModeValue } from '@liinkiing/klee'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { forwardRef } from 'react'

interface Props extends LinkProps, Omit<BoxProps, 'onMouseEnter' | 'onClick'> {}

const AppLink = forwardRef<HTMLElement, Props>(
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
          color={useColorModeValue('blue.800', 'blue.400')}
          as="a"
          {...rest}
        />
      </Link>
    )
  },
)

AppLink.displayName = 'AppLink'

export default AppLink
