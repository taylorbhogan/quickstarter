import styles from './ProjectCreateForm.module.css'
import { useState } from 'react';

function Form3({ changeStageButton, handleSubmit, country, countries, setCountry }) {
  const [div1True, setDiv1True] = useState(false)
  const [div2True, setDiv2True] = useState(false)
  const [div3True, setDiv3True] = useState(false)
  const [div4True, setDiv4True] = useState(false)
  const [lastClicked, setLastClicked] = useState(0)

  const handleClick = (int)=> {
    if (int === 1) {
      setLastClicked(1)
      if (div1True === true){
        setDiv1True(false)
      } else {
        setDiv1True(true)
      }
    } else if (int === 2) {
      setLastClicked(2)
      if (div2True === true){
        setDiv2True(false)
      } else {
        setDiv2True(true)
      }
    } else if (int === 3) {
      setLastClicked(3)
      if (div3True === true){
        setDiv3True(false)
      } else {
        setDiv3True(true)
      }
    } else if (int === 4) {
      setLastClicked(4)
      if (div4True === true){
        setDiv4True(false)
      } else {
        setDiv4True(true)
      }
    }
  }


  return (
    <div>
      <div className={styles.pageNumber}>3 of 3</div>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.formContents}>
          <h2>Finally, let’s confirm your eligibility.</h2>
          <h3>Tell us where you’re based and confirm a few other details before we proceed.</h3>
          <select
            onChange={(e) => setCountry(e.target.value)}
          >
            {countries.map(country =>
              <option
                value={country.id}
                key={country.id}>{country.name}</option>
            )}
          </select>
          <div
            className={styles.linkWrapper}
          >
            <div>
              <a href='https://help.kickstarter.com/hc/en-us/articles/115005128014'>
                  <div>
                    <span>
                      <i className="far fa-question-circle"></i>
                    </span>
                    <span> What if my country isn’t listed?</span>
                  </div>
              </a>
            </div>
          </div>

        </div>
        <div
          className={styles.toggleDivContainer}
        >
          <div
            className={styles.toggleDiv}
            style={lastClicked === 1 ? {border: '1px solid rgb(16, 115, 98)'} : null}
            // onClick={() => div1True === true ? setDiv1True(false) : setDiv1True(true)}
            // onClick={() => setLastClicked(1)}
            onClick={() => handleClick(1)}
          >
            {div1True ?
              (
                <span
                  className={styles.checkBoxIconChecked}>
                <i className="fas fa-check-circle"></i>
                </span>
              ) :
              (
                <span
                  className={styles.checkBoxIconUnchecked}>
                <i className="far fa-check-circle"></i>
                </span>
              )
            }
            <span
              className={styles.toggleDivText}
              >I am at least 18 years old.
            </span>
          </div>
          <div
            className={styles.toggleDiv}
            style={lastClicked === 2 ? {border: '1px solid rgb(16, 115, 98)'} : null}

            // onClick={() => div2True === true ? setDiv2True(false) : setDiv2True(true)}
            onClick={() => handleClick(2)}

          >
            {div2True ?
              (
                <span
                  className={styles.checkBoxIconChecked}>
                <i className="fas fa-check-circle"></i>
                </span>
              ) :
              (
                <span
                  className={styles.checkBoxIconUnchecked}>
                <i className="far fa-check-circle"></i>
                </span>
              )
            }
            <span
              className={styles.toggleDivText}
              >I can verify an address and bank account in {country}.
            </span>
          </div>
          <div
            className={styles.toggleDiv}
            style={lastClicked === 3 ? {border: '1px solid rgb(16, 115, 98)'} : null}

            // onClick={() => div3True === true ? setDiv3True(false) : setDiv3True(true)}
            onClick={() => handleClick(3)}
          >
            {div3True ?
              (
                <span
                  className={styles.checkBoxIconChecked}>
                <i className="fas fa-check-circle"></i>
                </span>
              ) :
              (
                <span
                  className={styles.checkBoxIconUnchecked}>
                <i className="far fa-check-circle"></i>
                </span>
              )
            }
            <span
              className={styles.toggleDivText}
              >I can verify a government issued ID.
            </span>
          </div>
          <div
            className={styles.toggleDiv}
            style={lastClicked === 4 ? {border: '1px solid rgb(16, 115, 98)'} : null}

            // onClick={() => div4True === true ? setDiv4True(false) : setDiv4True(true)}
            onClick={() => handleClick(4)}
          >
            {div4True ?
              (
                <span
                  className={styles.checkBoxIconChecked}>
                <i className="fas fa-check-circle"></i>
                </span>
              ) :
              (
                <span
                  className={styles.checkBoxIconUnchecked}>
                <i className="far fa-check-circle"></i>
                </span>
              )
            }
            <span
              className={styles.toggleDivText}
              >I can verify a government issued ID.
            </span>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button
            // this id is used in changeStageButton in ProjectCreateForm/index.js. to change it, change that function's logic
            className={styles.back}
            id={'back'}
            onClick={changeStageButton}
          ><span><i className="fas fa-long-arrow-alt-left"></i></span> Project idea</button>
          <button
            className={styles.next}
            type='submit'
          > Continue </button>
        </div>
        <div
          className={styles.littleTextHolder}
        >
          <div
            className={styles.littleText}
            >
            You're required to provide your location, age, national ID, banking and tax information, email, and mailing address to launch a project. By doing so, you also certify that the details you provide are complete and correct. This information is necessary to prevent fraud, comply with the law, and to deliver funds if you reach your funding goal.
          </div>
          <div
            className={styles.littleText}
          >
            Please note: Your ability to edit, hide, or delete a project is limited after you launch a project.
          </div>
        </div>
      </form>
    </div >
  )
}

export default Form3
