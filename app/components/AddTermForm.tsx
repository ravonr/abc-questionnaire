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
    <div className="boder-solid mx-[10px] border px-[10px] pb-6 pt-[10px] lg:ml-8 lg:mr-6">
      <div className="mb-4 items-center lg:grid lg:grid-cols-3 lg:gap-2">
        <FiveBars />
        <p className="text-center font-andale text-sm font-normal leading-[19.6px] text-borderColor">
          Add new terms & conditions
        </p>
        <FiveBars />
      </div>
      <Icon className="h-[16px] w-[16px] lg:h-auto lg:w-auto" type="star" />
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
              className="font-andale text-sm font-normal leading-[19.6px] text-borderColor"
            >
              What words do we currently use to relate to community, technology,
              and nature? What words do we ignore?
            </label>

            <input
              type="text"
              name="term"
              id="term-input"
              onChange={handleChange}
              value={values.term}
              className="mt-4 w-full rounded-none border border-solid border-borderColor bg-transparent p-2 font-andale"
            />
            <label
              htmlFor="term-conditions"
              className="mt-6 font-andale text-sm font-normal leading-[19.6px] text-borderColor"
            >
              Describe the conditions for this term. In what new ways do we need
              to reimagine your term?
            </label>
            <textarea
              id="term-conditions"
              name="condition"
              onChange={handleChange}
              value={values.condition}
              className="mt-4 min-h-[229px] w-full rounded-none border border-solid border-borderColor bg-transparent p-2 font-andale"
            />
            <label
              htmlFor="contributor-input"
              className="mt-6 font-andale text-sm font-normal leading-[19.6px] text-borderColor"
            >
              contributor name How would you like to be referred to?
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
