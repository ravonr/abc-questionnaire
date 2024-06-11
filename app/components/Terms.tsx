import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
export const revalidate = 0

import ReadtimeTerms from './ReadtimeTerms'
import Term from './Term'

const Terms = async () => {
  cookies().getAll()
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase
    .from('terms')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
  }

  if (!data) {
    return (
      <p className="font-andale text-xs font-normal leading-[13.5px] text-ink">
        no terms found.
      </p>
    )
  }

  return (
    <>
      <div className="overflwo-scroll grid min-w-[600px] grid-cols-5 border border-l-0 border-r-0 border-t-0 border-solid border-borderColor bg-purple p-[10px] lg:min-w-0 lg:overflow-auto lg:px-8 lg:py-[20px]">
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

      <div className="min-w-[600px] lg:min-w-0">
        <ReadtimeTerms serverTerms={data ?? []} />
      </div>
    </>
  )
}

export default Terms
