import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import Term from './Term'

const Terms = async () => {
  cookies().getAll()
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.from('terms').select('*')
  if (error) {
    console.error(error)
  }

  return (
    <>
      <div className="overflwo-scroll grid grid-cols-5 border border-l-0 border-r-0 border-t-0 border-solid border-borderColor bg-purple p-[10px] lg:overflow-auto lg:px-8 lg:py-[20px]">
        <p className="font-andale text-xs font-normal leading-[13.5px] text-ink">
          TERM
        </p>
        <div className="col-span-2">
          <p className="font-andale text-xs font-normal leading-[13.5px] text-ink">
            CONDITION
          </p>
        </div>
        <p className="font-andale text-xs font-normal leading-[13.5px] text-ink">
          CONTRIBUTOR
        </p>
        <p className="text-right font-andale text-xs font-normal leading-[13.5px] text-ink">
          TIMESTAMP
        </p>
      </div>

      <div>
        {data?.map((term) => {
          return <Term term={term} key={term.id} />
        })}
      </div>
    </>
  )
}

export default Terms
