import React, { useState } from 'react'
import { FaceFrownIcon, FaceSmileIcon } from '@heroicons/react/24/solid'
import styles from './styles.module.css'
import { options } from './utils'
import { reportFeedback } from './utils'

/**
 * Renders the appropriate header for the feedback widget.
 */
const FeedbackWidgetHeader = ({ header, subheader }) => {
  return (
    <p className={styles.text}>
      <strong>{header}</strong>
      {subheader}
    </p>
  )
}

/**
 * Renders the appropriate form to render to retrieve feedback.
 */
export const FeedbackWidgetForm = ({
  isRoot,
  helpful,
  onSubmit,
  option,
  onOptionChange,
}) => {
  return helpful ? (
    <form onSubmit={onSubmit} className={styles.form}>
      <textarea
        autoFocus
        id="feedbackForm"
        className={`${styles.optionalField} ${styles.positiveOptionalField}`}
        maxLength={2000}
        placeholder="Optional. Want to share a bit more about what was helpful? Solved your issue? Easy to understand? Accurate? Something else?"
      ></textarea>
      <input className={styles.submit} type="submit" value="Submit" />
    </form>
  ) : (
    <form onSubmit={onSubmit} className={styles.form}>
      {options.map((currentOption, index) => {
        return (
          <div className={styles.optionContainer}>
            <label className={styles.label} htmlFor={currentOption}>
              {currentOption}
              <input
                className={`${styles.input} ${isRoot ? styles.inputDark : ''}`}
                type="radio"
                name="option"
                value={currentOption}
                id={currentOption}
                checked={currentOption === option}
                onChange={onOptionChange}
              />
              <span className={styles.checkbox}></span>
            </label>
            {currentOption === option && (
              <textarea
                autoFocus
                id="feedbackForm"
                className={styles.optionalField}
                maxLength={2000}
                placeholder="Optional, but can you provide a few more details to help us
                          understand the issue?"
              ></textarea>
            )}
          </div>
        )
      })}
      <input
        disabled={!option}
        className={
          !option ? `${styles.submit} ${styles.disabledSubmit}` : styles.submit
        }
        type="submit"
        value="Submit"
      />
    </form>
  )
}

/**
 * Question component that renders smile and frown buttons
 */
const FeedbackQuestion = ({ onSmileClick, onFrownClick }) => {
  return (
    <div className={styles.questionContainer}>
      <button
        className={`${styles.button} ${styles.smile}`}
        onClick={onSmileClick}
      >
        <FaceSmileIcon className="p-1" width="26" />
        Yes
      </button>
      <button
        className={`${styles.button} ${styles.frown}`}
        onClick={onFrownClick}
      >
        <FaceFrownIcon className="p-1" width="26" />
        No
      </button>
    </div>
  )
}

/**
 *
 * Feedback widget parent component that triggers the feedback flow
 */

const FeedbackWidget = ({ isRoot }) => {
  const [helpful, setHelpful] = useState()
  const [option, setOption] = useState()

  const onOptionChange = (e) => {
    setOption(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // Necessary but temporary workaround
    const extraFeedback = document.getElementById('feedbackForm')?.value
    console.log('EXTRA FEEDBACK', extraFeedback)

    if (helpful === true) {
      reportFeedback(true, null, extraFeedback)
    } else if (helpful === false) {
      reportFeedback(false, option, extraFeedback)
    }
    // Resets helpful check as we no longer need the form to render.
    setHelpful(null)
  }

  const onSmileClick = () => {
    setHelpful(true)
  }

  const onFrownClick = () => {
    setHelpful(false)
  }

  return (
    <div className={styles.container}>
      <div
        className={
          helpful === undefined
            ? styles.containerWithoutForm
            : styles.containerWithForm
        }
      >
        <FeedbackWidgetHeader
          header={
            helpful === null
              ? 'Thank you! Your feedback helps us improve the XMTP documentation.'
              : helpful === false
              ? 'What went wrong? '
              : helpful === true
              ? 'What was helpful?'
              : 'Was the information on this page helpful?'
          }
          subheader={
            helpful === false && 'Help us improve by providing feedback.'
          }
        />

        {helpful === undefined && (
          <FeedbackQuestion
            onSmileClick={onSmileClick}
            onFrownClick={onFrownClick}
          />
        )}
        {(helpful === true || helpful === false) && (
          <FeedbackWidgetForm
            isRoot={isRoot}
            helpful={helpful}
            onSubmit={onSubmit}
            option={option}
            onOptionChange={onOptionChange}
          />
        )}
      </div>
    </div>
  )
}

export default FeedbackWidget
