import Paragraph from './Paragraph'

const Hero = () => {
  return (
    <div className="border-borderColor  border border-b-0 border-l-0 border-solid pr-8 pt-6">
      <h1>Questionnaire ABC Glossary</h1>

      <Paragraph>
        Use these exercises to revisit your relationship to the internet and the
        web through language. What words do we use? What words do we ignore?
        What words do we need to use in new ways? Afterwards submit your
        reimagined term and its new definition.
      </Paragraph>
      <Paragraph>
        This questionnaire is part of a framework and glossary for an
        anti-colonial Black feminist critical media ecology, or abc glossary for
        short, a growing reimagining of computing-related terminology from
        hardware to software beyond the conditions of e-colonialism — toward
        abundant relationship between humans, technology, and nature.
      </Paragraph>
    </div>
  )
}

export default Hero
