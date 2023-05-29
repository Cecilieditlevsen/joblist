import { tw } from 'twind'

import { FilterButton } from '@components/job-list/filter-button.tsx'

import { useCategories } from '@hooks/use-categories.ts'

export const Filters = () => {
  const categoriesQuery = useCategories()

  if (categoriesQuery.data) {
    const categories = [{ id: 'all', name: 'Alle' }, ...categoriesQuery.data]

    return (
      <div>
        <ul
          aria-label={'Filtrer jobs'}
          className={tw`list-none flex flex-col lg:flex-row gap-3 py-8 px-0 m-0 lg:gap-5`}
        >
          {categories.map((category) => (
            <li key={category.id}>
              <FilterButton id={category.id} name={category.name} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (categoriesQuery.isLoading) {
    return (
      <ul className={tw`list-none flex flex-wrap py-8 px-0 m-0 gap-5 `}>
        <li>
          <div
            className={tw`bg-gray-200 rounded animate-pulse h-[30px] w-[200px]`}
          />
        </li>

        <li>
          <div
            className={tw`bg-gray-200 rounded animate-pulse h-[30px] w-[200px]`}
          />
        </li>

        <li>
          <div
            className={tw`bg-gray-200 rounded animate-pulse h-[30px] w-[200px]`}
          />
        </li>
      </ul>
    )
  }

  return null
}
