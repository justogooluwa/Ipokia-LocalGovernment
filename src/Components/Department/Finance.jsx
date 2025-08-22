
import ProfileCard2 from "../ProfileCard2";
import PageLayout from "../PageLayout";
// import Admin5 from "../../assets/admin5.jpeg"
import Finances from "../../assets/finance.jpeg"
function Finance(){
    const duties = [
       "License",
       "Rents on Government properties",
       "Expunged",
       "Fees",
       "Fines",
       "Sales",
       "Earnings"
      ];

      const duty = [
        "Tube Market ",
        "Ago Sasa Market",
        "Ihunbo Market",
        "Idiroko Market",
        "Ajegunle Market",
        "Koko Market",
        "Maun Market",
        "Tafa Market"
      ];
    return(
        <>
        <PageLayout title='THE SUPERVISORS AND SPECIAL ADVISERS IN IPOKIA LOCAL GOVERNMENT' />
        {/* <div className="page-grid">
         <ProfileCard 
         name='Sosoedo Denayin Amos  ' 
         title=' Supervisor for Water Supply and Environmental Sanitation.'
         bio='Water supply, safeguarding and Planning of Environment services in Ipokia Local Government  Ogun State.'
         image={Admin5}/>
          </div> */}

          <div className="page-grid">
         <ProfileCard2
         name=' MR BAKENNE LUKMON ADEBOYE  ' 
         title=' DIRECTOR OF FINANCE AND SUPPLIES, IPOKIA LOCAL GOVERNMENT  '
         bio='The Department is saddled with the responsibility of providing financial advise to the Local Government.
The Department oversee revenue collections, budgeting and expenditure, as well as maintaining accurate financial records and reports.
The Department also keeps various ledgers which includes Cash Book, Departmental Vote Expenditure Account, Departmental Vote Revenue Account, Deposit and Advance book of account.
The Department has various revenue items such as...'
             list={duty} 
             bios=' We have various markets in Ipokia Local Government, under the control of the department. Such market includes.'
             lists={duties}
         image={Finances}/>
          </div>
        </>
    )
}

export default Finance;