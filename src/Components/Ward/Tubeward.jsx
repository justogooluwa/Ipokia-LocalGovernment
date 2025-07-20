import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import ward2 from "../../assets/ward2.jpeg"


function Tubeward(){
    return(
        <>
          <PageLayout title='Ipokia Members of The Legislative Council'/>
          <div className="page-grid">
          <ProfileCard
          name='HON. NUDAMAJO MONDAY DOHETO '
          title='DEPUTY LEADER OF THE HOUSE OF LEGISLATIVE COUNCIL/ CHAIRMAN HOUSE COMMITTEE ON PEACE AND SECURITY.'
           image={ward2}/>
           </div>
        </>
    )
}


export default Tubeward;