import React from 'react'
import s from './InsuredEvent.module.css'
import { useSelector } from 'react-redux'
import InsuredEventForm from '../insured-event-form/InsuredEventForm'
import Docs from '../../../snippets/docs/Docs'

const InsuredEvent = () => {
  let insuredEvent = useSelector(state => state.cabinet.insuredEvent)

  return (
    <div className={s.insuredEvent}>
      <h2>{insuredEvent.title}</h2>
      <div className={s.wrapper}>
        <InsuredEventForm inputs={insuredEvent.inputs} />
        <div className={s.docs}>
        <Docs
          text={insuredEvent.textLink}
          docsLink={insuredEvent.documentLink}
        />
        </div>
      </div>
    </div>
  );
}

export default InsuredEvent