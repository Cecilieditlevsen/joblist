import { useHover } from 'react-aria'
import { useNavigate } from 'react-router-dom'
import { content } from '@twind/content'
import clsx from 'clsx'
import { tw } from 'twind'
import { css } from 'twind/css'

import { FocusRing } from '@components/global/focus-ring.tsx'
import {
  useJobListActions,
  useJobListFilters,
  useThemeValue,
} from '@components/job-list/store.ts'

type FilterButtonProps = {
  id: string
  name: string
}

export const FilterButton = ({ name, id }: FilterButtonProps) => {
  const navigate = useNavigate()
  const { hoverProps, isHovered } = useHover({})
  const { setFilters, setSearchValue } = useJobListActions()
  const filters = useJobListFilters()
  const theme = useThemeValue()

  const isDarkMode = theme === 'dark'

  const styles = css({
    'text-align': 'start',
  })

  const handleClick = () => {
    const params = new URLSearchParams()
    setFilters(id)
    setSearchValue('')

    params.set('category', id)
    navigate(`?${params.toString()}`)
  }

  const isActive = filters === id

  return (
    <FocusRing>
      <button
        {...hoverProps}
        aria-label={`filtrer jobs efter ${name}`}
        aria-pressed={isActive}
        onClick={handleClick}
        className={clsx(
          [
            tw`${tw(styles)} bg-transparent after::(${content(
              '""'
            )} absolute w-full h-[2px] transition-all duration-200 bottom-0 left-0 -translate-x-full) relative pb-[3px] overflow-hidden rounded outline-none font-base font-primary border-none text-sub-heading-small md:text-sub-heading-large m-0 p-0`,
          ],
          {
            [tw`after::translate-x-0 text-black after::bg-black`]:
              !isDarkMode && (isHovered || isActive),
            [tw`after::translate-x-0 text-white after::bg-white`]:
              isDarkMode && (isHovered || isActive),
            [tw`text-link`]: !isDarkMode && !isHovered && !isActive,
            [tw`text-white`]: isDarkMode && !isHovered && !isActive,
          }
        )}
        type={'button'}
      >
        {name}
      </button>
    </FocusRing>
  )
}
