import { content } from '@twind/content'
import { tw } from 'twind'
import { css } from 'twind/css'

import { FocusRing } from '@components/global/focus-ring.tsx'

import { Link } from '../global/link.tsx'

type ListItemProps = {
  title: string
  id: string
  category: string
  downloadUrl: string
}

export const Job = ({ downloadUrl, id, category, title }: ListItemProps) => {
  return (
    <FocusRing>
      <Link href={downloadUrl}>
        <div
          className={tw`no-underline py-6 text-black grid grid-cols-12 gap-[15px] `}
        >
          <p
            aria-hidden={true}
            className={tw`col-span-12 relative truncate text-ellipsis overflow-hidden lg:col-span-2 m-0 before::(${content(
              '"# "'
            )})`}
          >
            {id}
          </p>

          <p
            className={tw`${css({
              'overflow-wrap': 'break-word',
            })} p-0 m-0 col-span-12 lg:col-span-5 text-base font-primary font-semibold text-link`}
          >
            {title}
          </p>

          <p
            className={tw` p-0 m-0 col-span-12 lg:col-span-2 lg:col-start-9 font-primary text-base`}
          >
            {category}
          </p>

          <p
            className={tw` lg:${css({
              'text-align': 'end',
            })}  p-0 m-0 col-span-12 lg:col-span-2 lg:col-start-11 font-primary text-base font-semibold text-link`}
          >
            Læs mere
          </p>
        </div>
      </Link>
    </FocusRing>
  )
}
