import React from 'react'

const TotalBalanceBox = ({totalBanks,totalCurrentBalance} : TotalBalanceBoxProps) => {
  return (
    
      <section className='total-balance'>Total balanceBox
         <div className="total-balance-chart">
                {/*  doughnut chart*/}
         </div>
         <div className="bg-blue-100">Test Border Radius</div>

         <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                 Bank Accounts : {totalBanks}
            </h2>
            <div className='flex flex-col gap-'>
                <p className='total-balance-amount flex-center gap-2'>
                    {totalCurrentBalance}
                </p>
            </div>
         </div>
      </section>
    
  )
}

export default TotalBalanceBox
