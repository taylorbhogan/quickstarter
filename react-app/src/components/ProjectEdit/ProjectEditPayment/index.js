import { useSelector } from "react-redux";
import paymentStyles from "./ProjectEditPayment.module.css";
import { NavLink } from "react-router-dom";

function ProjectEditPayment() {
  const user = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Thanks for clicking that button. Eventually we will use it to send emails. Not yet though."
    );
  };

  return (
    <div className={paymentStyles.pageContainer}>
      <div>
        <div className={paymentStyles.title}>
          Confirm your identity and link a bank account
        </div>
        <div className={paymentStyles.subTitle}>
          Provide additional details about yourself and where funds should be
          sent, if your project is successfully funded.
        </div>
      </div>
      <div>
        <div className={paymentStyles.blockWrapper}>
          <section className={paymentStyles.block}>
            <div className={paymentStyles.infoContainer}>
              <div className={paymentStyles.mainInputHeader}>Contact email</div>
              <div className={paymentStyles.mainInputSubHeader}>
                Confirm the email address we should use for correspondence about
                this project.
              </div>
              <div className={paymentStyles.mainInputSubHeader}>
                If the incorrect email is shown here,{" "}
                <NavLink
                  className={paymentStyles.greenLink}
                  to={`/users/${user.id}`}
                >
                  update it on your account
                </NavLink>
                .
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className={paymentStyles.form}>
                <input
                  value={user.email}
                  className={paymentStyles.input}
                ></input>
                <button className={paymentStyles.button}>
                  Send verification email
                </button>
              </form>
            </div>
          </section>
        </div>
        <div className={paymentStyles.blockWrapper}>
          <section className={paymentStyles.block}>
            <div className={paymentStyles.infoContainer}>
              <div className={paymentStyles.mainInputHeader}>
                Funds recipient
              </div>
              <div className={paymentStyles.mainInputSubHeader}>
                Enter info for the individual or legal entity running this
                project.
              </div>
              <div className={paymentStyles.mainInputSubHeader}>
                If you’re running this project as a legal entity, someone within
                the organization should complete this section.
              </div>
              <div className={paymentStyles.mainInputSubHeader}>
                All of the info entered here (including the name) must match the
                info associated with the bank account that will be used to
                receive funds, if this project is successfully funded.
              </div>
            </div>
            <div className={paymentStyles.lockedContainer}>
              <div className={paymentStyles.locked}>
                <div className={paymentStyles.lock}>
                  <span>
                    <i className="fas fa-lock" />
                  </span>
                </div>
                <div className={paymentStyles.unlock}>
                  Complete the above steps to unlock this section
                </div>
              </div>
              <div className={paymentStyles.greenText}>
                <span>
                  <i className="fas fa-lightbulb" />
                </span>
                <span>
                  {" "}
                  Know the tax implications for running your project as an
                  individual, legal entity, and/or non-profit.{" "}
                </span>
                <span className={paymentStyles.learnMore}>Learn more...</span>
              </div>
            </div>
          </section>
        </div>
        <div className={paymentStyles.blockWrapper}>
          <section className={paymentStyles.block}>
            <div className={paymentStyles.infoContainer}>
              <div className={paymentStyles.mainInputHeader}>
                Identity confirmation
              </div>
              <div className={paymentStyles.mainInputSubHeader}>
                Please enter your legal name and info, no nicknames or
                abbreviations.
              </div>
              <div className={paymentStyles.mainInputSubHeader}>
                This name may be different than your profile name but both will
                appear on your creator bio.
              </div>
              <div className={paymentStyles.mainInputSubHeaderAllow}>
                <span>
                  <i className="fas fa-stopwatch" />
                </span>{" "}
                Allow up to three business days for confirmation.
              </div>
            </div>
            <div className={paymentStyles.lockedContainer}>
              <div className={paymentStyles.locked}>
                <div className={paymentStyles.lock}>
                  <span>
                    <i className="fas fa-lock" />
                  </span>
                </div>
                <div className={paymentStyles.unlock}>
                  Complete the above steps to unlock this section
                </div>
              </div>
              <div className={paymentStyles.greenText}>
                <span>
                  <i className="fas fa-lightbulb" />
                </span>
                <span>
                  {" "}
                  Confirming your identity and meeting eligibility requirements
                  help keep Kickstarter safe.{" "}
                </span>
                <span className={paymentStyles.learnMore}>Learn more...</span>
              </div>
            </div>
          </section>
        </div>
        <div className={paymentStyles.blockWrapper}>
          <section className={paymentStyles.block}>
            <div className={paymentStyles.infoContainer}>
              <div className={paymentStyles.mainInputHeader}>Bank account</div>
              <div className={paymentStyles.mainInputSubHeader}>
                Add a checking account that belongs to the individual or entity
                who will receive funds if the project reaches its goal. The
                account should support direct deposits and be located in
                Austria. Projects raising funds in euros can use bank accounts
                in
                <span className={paymentStyles.applicableLink}>
                  {" "}
                  applicable European countries
                </span>
                . We don’t support wire transfers, savings accounts, or virtual
                bank accounts.
              </div>
              <div className={paymentStyles.mainInputSubHeader}>
                Make sure your details are correct—you can’t change them after
                you launch. We may not be able to help if your payout is
                rejected by your bank or sent to the wrong account.
              </div>
            </div>
            <div className={paymentStyles.lockedContainer}>
              <div className={paymentStyles.locked}>
                <div className={paymentStyles.lock}>
                  <span>
                    <i className="fas fa-lock" />
                  </span>
                </div>
                <div className={paymentStyles.unlock}>
                  Complete the above steps to unlock this section
                </div>
              </div>
              <div className={paymentStyles.greenText}>
                <span>
                  <i className="fas fa-lightbulb" />
                </span>
                <span>
                  {" "}
                  Individual funds recipients must personally own this bank
                  account.
                  {/* Otherwise, business recipients must be owned by a business account. */}{" "}
                </span>
              </div>
            </div>
          </section>
        </div>
        <div className={paymentStyles.blockWrapper}>
          <section className={paymentStyles.block}>
            <div className={paymentStyles.infoContainer}>
              <div className={paymentStyles.mainInputHeader}>
                Payment source
              </div>
              <div className={paymentStyles.mainInputSubHeader}>
                Add a credit or debit card that we may use in the event of
                chargebacks.
              </div>
              <div className={paymentStyles.mainInputSubHeader}>
                Make sure the card belongs to the same individual or legal
                entity running this project.
              </div>
              <div className={paymentStyles.mainInputSubHeader}>
                The card must be a Visa, Mastercard, or American Express.
                Discover, JCB, Maestro, and Visa Electron cards are not
                accepted.
              </div>
            </div>
            <div className={paymentStyles.lockedContainer}>
              <div className={paymentStyles.locked}>
                <div className={paymentStyles.lock}>
                  <span>
                    <i className="fas fa-lock" />
                  </span>
                </div>
                <div className={paymentStyles.unlock}>
                  Complete the above steps to unlock this section
                </div>
              </div>
              <div className={paymentStyles.greenText}>
                <span>
                  <i className="fas fa-lightbulb" />
                </span>
                <span> Chargebacks occur when a backer files a dispute. </span>
                <span className={paymentStyles.learnMore}>Learn more...</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectEditPayment;
