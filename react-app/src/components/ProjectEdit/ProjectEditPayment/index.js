import paymentStyles from './ProjectEditPayment.module.css'

function ProjectEditPayment() {
  return (
    <div className={paymentStyles.pageContainer}>
      <div>
        <div className={paymentStyles.title}>Confirm your identity and link a bank account</div>
        <div className={paymentStyles.subTitle}>Provide additional details about yourself and where funds should be sent, if your project is successfully funded.</div>
      </div>
      <div>
        <div className={paymentStyles.blockWrapper}>
          <section className={paymentStyles.block}>
            <div className={paymentStyles.infoContainer}>
              <div>Contact Email</div>
            </div>
            <div className={paymentStyles.standIn}></div>
          </section>
        </div>
        <div className={paymentStyles.blockWrapper}>
          <section className={paymentStyles.block}>
            <div className={paymentStyles.infoContainer}>
              <div className={paymentStyles.mainInputHeader}>Funds recipient</div>
              <div className={paymentStyles.mainInputSubHeader}>Enter info for the individual or legal entity running this project.</div>
              <div className={paymentStyles.mainInputSubHeader}>If you’re running this project as a legal entity, someone within the organization should complete this section.</div>
              <div className={paymentStyles.mainInputSubHeader}>All of the info entered here (including the name) must match the info associated with the bank account that will be used to receive funds, if this project is successfully funded.</div>
            </div>
            <div className={paymentStyles.standIn}></div>
          </section>
        </div>
        <div className={paymentStyles.blockWrapper}>
          <section className={paymentStyles.block}>
            <div className={paymentStyles.infoContainer}>
              <div className={paymentStyles.mainInputHeader}>Identity confirmation</div>
              <div className={paymentStyles.mainInputSubHeader}>Please enter your legal name and info, no nicknames or abbreviations.</div>
              <div className={paymentStyles.mainInputSubHeader}>This name may be different than your profile name but both will appear on your creator bio.</div>
              <div className={paymentStyles.mainInputSubHeader}>Allow up to three business days for confirmation.</div>
            </div>
            <div className={paymentStyles.standIn}></div>
          </section>
        </div>
        <div className={paymentStyles.blockWrapper}>
          <section className={paymentStyles.block}>
            <div className={paymentStyles.infoContainer}>
              <div className={paymentStyles.mainInputHeader}>Bank account</div>
              <div className={paymentStyles.mainInputSubHeader}>Add a checking account that belongs to the individual or entity who will receive funds if the project reaches its goal. The account should support direct deposits and be located in Australia. We don’t support wire transfers, savings accounts, or virtual bank accounts.</div>
              <div className={paymentStyles.mainInputSubHeader}>Make sure your details are correct—you can’t change them after you launch. We may not be able to help if your payout is rejected by your bank or sent to the wrong account.</div>
            </div>
            <div className={paymentStyles.standIn}></div>
          </section>
        </div>
        <div className={paymentStyles.blockWrapper}>
          <section className={paymentStyles.block}>
            <div  className={paymentStyles.infoContainer}>
              <div className={paymentStyles.mainInputHeader}>Payment source</div>
              <div className={paymentStyles.mainInputSubHeader}>Add a credit or debit card that we may use in the event of chargebacks.</div>
              <div className={paymentStyles.mainInputSubHeader}>Make sure the card belongs to the same individual or legal entity running this project.</div>
              <div className={paymentStyles.mainInputSubHeader}>The card must be a Visa, Mastercard, or American Express. Discover, JCB, Maestro, and Visa Electron cards are not accepted.</div>
            </div>
            <div className={paymentStyles.standIn}></div>
          </section>
        </div>
      </div>
    </div>
    )
}

export default ProjectEditPayment
