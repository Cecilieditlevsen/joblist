import { setup } from 'twind'
import * as colors from 'twind/colors'

import { Container } from '@components/global/container.tsx'
import { JobList } from '@components/job-list'

setup({
  preflight: false,
  hash: true,
  theme: {
    extend: {
      screens: {
        xs: '576',
        sm: '769px',
        md: '992px',
        lg: '1200px',
      },
      fontSize: {
        base: 'var(--component-body-font-size)',
        'sub-heading-small':
          'calc(0.0624em*var(--article-subheading-font-size-sm))',
        'sub-heading-large':
          'calc(0.0624em*var(--article-subheading-font-size-lg))',
        'heading-small': 'calc(0.0625em*var(--h1-font-size-sm))',
        'heading-large': 'calc(0.0625em*var(--h1-font-size-lg))',
      },
      fontWeight: {
        semibold: 'var(--heading-font-weight)',
        base: 'var(--body-font-weight)',
      },
      fontFamily: {
        primary: 'var(--font-family-primary)',
      },
      colors: {
        ...colors,
        black: 'var(--color-black)',
        link: 'var(--color-link)',
        'dark-600': 'var(--darkmode-600)',
        'dark-500': 'var(--darkmode-500)',
        'dark-400': 'var(--darkmode-400)',
        'dark-highlight-200': 'var(--darkmode-hightlight-1-200)',
      },
    },
  },
})

// container should be removed before build
function App() {
  if (import.meta.env.DEV) {
    return (
      <>
        <Container>
          <JobList />
        </Container>
      </>
    )
  }

  return (
    <>
      <JobList />
    </>
  )
}

export default App
