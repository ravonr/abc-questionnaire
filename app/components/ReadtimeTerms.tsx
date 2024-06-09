'use client'

import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import Term from './Term'

interface Term {
  term: {
    term: string
    condition: string
    contributor: string
    created_at: string
  }
}

const ReadtimeTerms = ({ serverTerms }: Term[]) => {
  const supabase = createClientComponentClient()
  const [terms, setTerms] = useState(serverTerms)

  useEffect(() => {
    const channel = supabase
      .channel('realtime terms')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'terms',
        },
        (payload) => {
          setTerms([payload.new, ...terms])
        },
      )
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase, terms, setTerms])

  return (
    <div>
      {terms?.map((term) => {
        return <Term term={term} key={term.id} />
      })}
    </div>
  )
}

export default ReadtimeTerms
