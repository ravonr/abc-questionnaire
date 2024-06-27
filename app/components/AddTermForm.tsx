'use client'
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Formik } from 'formik'

import Button from './Button'
import FiveBars from './FiveBars'
import Icon from './Icon'

const AddTermForm = () => {
  const supabase = createClientComponentClient()
  const [message, setMessage] = useState('')

  return (
    <div className="add-term-form boder-solid mx-[10px] border px-[10px] pb-6 pt-[10px] lg:ml-8 lg:mr-6">
      <div className="mb-4 items-center lg:grid lg:grid-cols-3 lg:gap-2">
        <FiveBars />
        <p className="text-center font-andale text-sm font-normal leading-[19.6px] text-borderColor">
          Submission form
        </p>
        <FiveBars />
      </div>
      <Icon
        className=" mb-2 h-[16px] w-[16px] lg:h-auto lg:w-auto"
        type="star"
      />
      <Formik
        initialValues={{ term: '', condition: '', contributor: '' }}
        onSubmit={async (values, { setSubmitting }) => {
          if (!values.term || !values.condition || !values.contributor) {
            setMessage('Please fill out all fields')
            return
          }
          const { error } = await supabase.from('terms').insert(values)
          setSubmitting(false)
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <p className="font-andale text-sm font-normal leading-[19.6px] text-borderColor">
              what’s your term?
            </p>
            <label
              htmlFor="term-input"
              className="font-andale text-sm font-normal italic leading-[19.6px] text-borderColor"
            >
              What terms do you associate with the internet, computing, and
              cyber culture? What words do we ignore? What words do we need to
              use in new ways?
            </label>

            <input
              type="text"
              name="term"
              id="term-input"
              onChange={handleChange}
              value={values.term}
              className="mt-4 w-full rounded-none border border-solid border-borderColor bg-transparent p-2 font-andale"
            />
            <p className="font-andale text-sm font-normal  leading-[19.6px] text-borderColor">
              what do you imagine is the condition of this term?
            </p>
            <label
              htmlFor="term-conditions"
              className="mt-6 font-andale text-sm font-normal italic leading-[19.6px] text-borderColor"
            >
              How do you want to reimagine this term? In what ways could the
              conditions of this term help us toward more liberatory,
              sustainable, and communal futures?{' '}
            </label>
            <textarea
              id="term-conditions"
              name="condition"
              onChange={handleChange}
              value={values.condition}
              className="mt-4 min-h-[229px] w-full rounded-none border border-solid border-borderColor bg-transparent p-2 font-andale"
            />
            <p className="font-andale text-sm font-normal  leading-[19.6px] text-borderColor">
              Contributor Name
            </p>
            <label
              htmlFor="contributor-input"
              className="mt-6 font-andale text-sm font-normal italic leading-[19.6px] text-borderColor"
            >
              How would you like to be referred to as?
            </label>
            <input
              id="contributor-input"
              type="text"
              name="contributor"
              onChange={handleChange}
              value={values.contributor}
              className="mt-4 w-full rounded-none border border-solid border-borderColor bg-transparent p-2 font-andale"
            />

            <div className="mt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                text="submit"
              ></Button>
              {isSubmitting && (
                <p className="mt-2 font-andale text-sm font-normal leading-[19.6px] text-borderColor">
                  loading...
                </p>
              )}
              {message.length > 0 && (
                <p className="mt-2 font-andale text-sm font-normal leading-[19.6px] text-borderColor">
                  {message}
                </p>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddTermForm
