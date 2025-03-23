import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
 
const Home = () => {
    const loggedIn = {firstName: 'Sudha'}
  return (
    <section className='home'>
       <div className='home-content'>
            <header className='home-header'>
                Welcome Sudha
                <HeaderBox  type="greeting" title="Welcome" 
                user={loggedIn?.firstName || 'Guest'} subtext="Access and manage your account efficiently"
                />
                {/* totlabalance section 
                 -- accounts [] 
                 -- totlbnk -- curnt blnce
                */}
                
                 <TotalBalanceBox accounts={[]} totalBanks={1}
                 totalCurrentBalance={1250.0}
                 />

                    


            </header>
       </div>

    </section>
  )
}

export default Home
