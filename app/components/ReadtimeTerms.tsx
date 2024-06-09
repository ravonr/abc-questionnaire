'use client'

import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import Term from './Term'

interface TermProps {
  term: string
  condition: string
  contributor: string
  created_at: string
  id: number
}

interface Props {
  serverTerms: TermProps[]
}

const ReadtimeTerms = ({ serverTerms }: Props) => {
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
          const newTerm = {
            term: payload.new.term,
            condition: payload.new.condition,
            contributor: payload.new.contributor,
            created_at: payload.new.created_at,
            id: payload.new.id,
          }

          setTerms([newTerm, ...terms])
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
