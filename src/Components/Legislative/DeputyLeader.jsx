import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import deputy from "../../assets/deputy.jpeg"


function DeputyLeader(){
    return(
        <>
          <PageLayout title='MAJORITY LEADER'/>
          <div className="page-grid">
          <ProfileCard
          name='HON AKALA SHERIFF OPEYEMI '
          title='MAJORITY LEADER'
        //   bio=' Committee Chairman on Education and Information typically to enhance quality Education and Information.'
           image={deputy}/>
           </div>
        </>
    )
}


export default DeputyLeader;