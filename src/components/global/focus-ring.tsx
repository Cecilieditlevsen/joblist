import type { ReactElement } from 'react'
import type { AriaFocusRingProps } from 'react-aria'
import { FocusRing as AriaFocusRing } from 'react-aria'
import clsx from 'clsx'
import { tw } from 'twind'

type FocusRingProps = {
  children: ReactElement
  size?: 'large' | 'small'
} & AriaFocusRingProps

export const FocusRing = ({
  children,
  size = 'large',
  ...props
}: FocusRingProps) => {
  return (
    <AriaFocusRing
      {...props}
      focusRingClass={clsx(
        [tw`outline-none ring-[#11724F] rounded ring-offset-[#EDF4E7]`],
        {
          [tw`ring-2 ring-offset-4`]: size === 'large',
          [tw`ring-2 ring-offset-2`]: size === 'small',
        }
      )}
    >
      {children}
    </AriaFocusRing>
  )
}
