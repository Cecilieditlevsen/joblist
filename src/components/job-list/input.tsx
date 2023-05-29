import { useRef } from 'react'
import { useTextField } from 'react-aria'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { tw } from 'twind'

import { FocusRing } from '@components/global/focus-ring.tsx'
import {
  useJobListActions,
  useJobListSearchValue,
  useThemeValue,
} from '@components/job-list/store.ts'

export const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const searchParam = useJobListSearchValue()
  const { setSearchValue, clearSearchParam } = useJobListActions()
  const theme = useThemeValue()

  const isDarkMode = theme === 'dark'

  const { inputProps, labelProps } = useTextField(
    {
      label: 'Søg efter job',
      placeholder: 'Søg her',
      inputElementType: 'input',
      onChange: setSearchValue,
    },
    inputRef
  )

  return (
    <div className={tw`w-full relative`}>
      <label aria-label={'søg efter jobs'} {...labelProps} />

      <FocusRing isTextInput={true}>
        <input
          {...inputProps}
          ref={(node) => node?.focus()}
          className={clsx(
            [
              tw`box-border relative w-full px-[18px] py-[15px] rounded border-solid border-gray-300 focus:border-transparent`,
            ],
            {
              [tw`bg-dark-600 text-white placeholder::text-white`]: isDarkMode,
            }
          )}
          value={searchParam}
        />
      </FocusRing>

      <FocusRing size={'small'}>
        <div
          className={tw`absolute top-1/2 -translate-y-1/2 right-5 flex items-center justify-center`}
        >
          {searchParam ? (
            <AnimatePresence mode={'wait'} initial={false}>
              <motion.button
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                onClick={clearSearchParam}
                className={clsx(
                  [tw`border-none bg-transparent m-0 p-0 w-7 h-7`],
                  {
                    [tw`text-dark-highlight-200`]: isDarkMode,
                  }
                )}
              >
                <XMarkIcon className={tw`w-7`} />
              </motion.button>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <motion.div
                className={clsx([tw`w-7 h-7`], {
                  [tw`text-dark-highlight-200`]: isDarkMode,
                })}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <MagnifyingGlassIcon className={tw`w-7`} />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </FocusRing>
    </div>
  )
}
