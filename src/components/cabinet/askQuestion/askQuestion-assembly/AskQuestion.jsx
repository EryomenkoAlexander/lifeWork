import React from 'react'
import { useSelector } from 'react-redux'
import s from './AskQuestion.module.css'
import AskQuestionForm from '../askQuestion-form/AskQuestionForm'

const AskQuestion = () => {
  let askQuestion = useSelector(state => state.cabinet.askQuestion)
  
  return (
    <div className={s.askQuestion}>
      <h2>{askQuestion.title}</h2>
      <div className={s.wrapper}>
        <AskQuestionForm inputs={askQuestion.inputs} />
      </div>
    </div>
  );
}

export default AskQuestion