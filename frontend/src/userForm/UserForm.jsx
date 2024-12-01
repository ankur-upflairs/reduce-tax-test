import React from 'react'
import IncomeForm from './IncomeSources'
import BasicDetails from './BasicDetails'
import UploadForm16 from './UplodeForm16'
import FinancialDetailsForm from './FinancialDetails'
import BasicDetails2 from './BasicDetails2'
import BankAndAadhaarDetails from './BankDetails'
import ITRForm from './ExtraDetails'

function UserForm() {
  return (
    <div>
      <IncomeForm/>
      <UploadForm16/>
      <FinancialDetailsForm/>
      <BasicDetails/>
      <BasicDetails2/>
      <BankAndAadhaarDetails/>
      <ITRForm/>
    </div>
  )
}

export default UserForm
