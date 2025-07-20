import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import Admin2 from "../../assets/admin2.jpeg"
function Health(){
    return(
        <>
        <PageLayout title='THE SUPERVISORS AND SPECIAL ADVISERS IN IPOKIA LOCAL GOVERNMENT' />
        <div className="page-grid">
         <ProfileCard 
         name='CHIEF BANKOLE OLUSHOLA SIMON.' 
         title=' SUPERVISOR FOR HEALTH AND MEDICAL IPOKIA LOCAL GOVERNMENT. '
         bio='Supervision of Primary health care and medical practices'
         image={Admin2}/>
          </div>
        </>
    )
}

export default Health;