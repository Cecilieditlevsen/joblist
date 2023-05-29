import { tw } from 'twind'

export const JobSkeleton = () => {
  return (
    <li className={tw`w-full first:border-none border-1  border-t-solid`}>
      <div className={tw` py-6  grid grid-cols-12 gap-[15px]`}>
        <div
          className={tw`col-span-6 h-[20px] relative bg-gray-200 rounded animate-pulse lg:col-span-2 `}
        ></div>

        <p
          className={tw`p-0 m-0 col-span-6 bg-gray-200 rounded animate-pulse lg:col-span-6 `}
        ></p>
        <p
          className={tw`p-0 m-0 col-span-6 col-start-7 bg-gray-200 rounded animate-pulse lg:col-span-2 lg:col-start-9 `}
        ></p>

        <p
          className={tw`p-0 m-0 col-span-6 col-start-7 lg:col-span-2 bg-gray-200 rounded animate-pulse lg:col-start-11`}
        ></p>
      </div>
    </li>
  )
}
