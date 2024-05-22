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
        <Paragraph className="text-center">
          Add new terms & conditions
        </Paragraph>
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
            <Paragraph>what’s your term?</Paragraph>
            <Paragraph>
              What words do we currently use to relate to community, technology,
              and nature? What words do we ignore?
            </Paragraph>
            <input
              type="text"
              name="term"
              onChange={handleChange}
              value={values.term}
              className="mt-4 w-full border border-solid border-borderColor bg-transparent p-2"
            />
            <Paragraph className="mt-6">
              Describe the conditions for this term. In what new ways do we need
              to reimagine your term?
            </Paragraph>
            <input
              type="textarea"
              name="condition"
              onChange={handleChange}
              value={values.condition}
              className="mt-4 min-h-[229px] w-full border border-solid border-borderColor bg-transparent p-2"
            />
            <Paragraph className="mt-6">
              contributor name How would you like to be referred to?
            </Paragraph>
            <input
              type="text"
              name="contributor"
              onChange={handleChange}
              value={values.contributor}
              className="mt-4 w-full border border-solid border-borderColor bg-transparent p-2"
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
