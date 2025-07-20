import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import secetary from "../../assets/secetary.jpeg"


function Secetary(){
    return(
        <>
          <PageLayout title='SECRETARY'/>
          <div className="page-grid">
          <ProfileCard
          name='HON. BABAJIDE JOHNSON OLUSHOLA'
          title='SECRETARY TO LOCAL GOVERNMENT'
        //   bio=' Committee Chairman on Education and Information typically to enhance quality Education and Information.'
           image={secetary}/>
           </div>
        </>
    )
}


export default Secetary;