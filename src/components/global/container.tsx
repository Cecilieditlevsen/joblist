import type { ReactNode } from 'react'
import { tw } from 'twind'

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={tw`w-full  box-border  px-[15px] mx-auto max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1410px]`}
    >
      {children}
    </div>
  )
}
