import type { ReactNode } from 'react'
import { tw } from 'twind'

type LinkProps = {
  children: ReactNode
  href: string
}

export const Link = ({ children, href }: LinkProps) => {
  return (
    <a
      href={href}
      target={'blank'}
      className={tw` no-underline`}
    >
      {children}
    </a>
  )
}
