import { tw } from 'twind'

import { Filters } from '@components/job-list/filters.tsx'
import { Input } from '@components/job-list/input.tsx'
import { Jobs } from '@components/job-list/jobs.tsx'
import { useThemeActions, useThemeValue } from '@components/job-list/store.ts'

export const JobList = () => {
  const { setTheme } = useThemeActions()
  const theme = useThemeValue()
  const themeToggleButton = document.querySelector('#color-theme-selector')

  themeToggleButton?.addEventListener('click', () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  })

  return (
    <div className={tw`font-sans bg-transparent`}>
      <h2
        className={tw`text-heading-small md:text-heading-large font-semibold font-primary m-0`}
      >
        Få overblikket over ledige jobs her
      </h2>

      <Filters />
      <Input />
      <Jobs />
    </div>
  )
}
