'use client'

import Icon from './Icon'
import Paragraph from './Paragraph'
import Button from './Button'
import FiveBars from './FiveBars'
import { Formik } from 'formik'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

function AddTermForm() {
  const supabase = createClientComponentClient()

  return (
    <div className="boder-solid mr-6 border px-[10px] pb-6 pt-[10px]">
      <div className="mb-4 grid grid-cols-3 items-center gap-2">
        <FiveBars />
        <p className="font-andale text-center text-sm font-normal leading-[19.6px] text-borderColor">
          Add new terms & conditions
        </p>
        <FiveBars />
      </div>
      <Icon type="christmas" />
      <Formik
        initialValues={{ term: '', condition: '', contributor: '' }}
        onSubmit={async (values, { setSubmitting }) => {
          const { error } = await supabase.from('terms').insert(values)

          setSubmitting(false)
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <p className="font-andale text-sm font-normal leading-[19.6px] text-borderColor">
              what’s your term?
            </p>
            <p className="font-andale text-sm font-normal leading-[19.6px] text-borderColor">
              What words do we currently use to relate to community, technology,
              and nature? What words do we ignore?
            </p>
            <input
              type="text"
              name="term"
              onChange={handleChange}
              value={values.term}
              className="font-andale mt-4 w-full border border-solid border-borderColor bg-transparent p-2"
            />
            <p className="font-andale mt-6 text-sm font-normal leading-[19.6px] text-borderColor">
              Describe the conditions for this term. In what new ways do we need
              to reimagine your term?
            </p>
            <input
              type="textarea"
              name="condition"
              onChange={handleChange}
              value={values.condition}
              className="font-andale mt-4 min-h-[229px] w-full border border-solid border-borderColor bg-transparent p-2"
            />
            <p className="font-andale mt-6 text-sm font-normal leading-[19.6px] text-borderColor">
              contributor name How would you like to be referred to?
            </p>
            <input
              type="text"
              name="contributor"
              onChange={handleChange}
              value={values.contributor}
              className="font-andale mt-4 w-full border border-solid border-borderColor bg-transparent p-2"
            />

            <div className="mt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                text="submit"
              ></Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddTermForm
