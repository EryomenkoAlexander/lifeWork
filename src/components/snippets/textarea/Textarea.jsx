import React from 'react'
import s from './Textarea.module.css'

const Textarea = ({name, title, placeholder, options, errors, register}) => {
    let getError = (name, errors) => {
        if (name === 'textNews' && errors.textNews) return errors.textNews.message;
        if (name === 'textInsuredEvent' && errors.textInsuredEvent) return errors.textInsuredEvent.message
        if(name === 'details' && errors.details) return errors.details.message
    }
 
    let getOptions = (options) => {
        let resOpt = {};
        for (let key in options) {
            switch (key) {
                case 'required': resOpt.required = options.required; continue;
                case 'minLength': resOpt.minLength = options.minLength; continue;
                case 'pattern': resOpt.pattern = options.pattern; continue;
                case 'maxLength': resOpt.maxLength = options.maxLength; continue;
                default: resOpt.error = 'ERROR, no values in options';
            }
        }
        return resOpt;
    }

  return (
    <label
      className={[s.wrapper, getError(name, errors) && s.error].join(
        " "
      )}
    >
      <h4>{title}</h4>
      <div>
      <textarea
        placeholder={placeholder}
        {...register(name, getOptions(options))}
      ></textarea>
      </div>
      <span>{getError(name, errors) || "⁣"}</span>
    </label>
  );
}

export default Textarea