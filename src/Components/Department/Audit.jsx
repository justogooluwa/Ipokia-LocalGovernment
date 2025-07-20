import PageLayout from "../PageLayout";
import ProfileCard from "../ProfileCard";
import audit from "../../assets/audit.jpeg"


function Audit(){
    return(
        <>
        <PageLayout title='INTERNAL AUDIT'/>
        <div className="page-grid">
            <ProfileCard
            name=' ADENIYI AKEEB ALAO'
            title=' Head Internal Audit Unit'
            bio='Internal Audit Unit is Statutorily saddled with the responsibilities of pre and post Auditing of relevant financial records to ensure value for public fund at the best quality with the moderate cost available.

Equally of importance is to ensure that financial obligations undertaking by the local government comply with all provisions contained in the Model Financial Memoranda as well as other regulations issued from time to time.'
image={audit}/>
        </div>
        </>
    )
}


export default Audit;