import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import vicechairman from "../../assets/vicechairman.jpeg"


function ViceChairman(){
    return(
        <>
          <PageLayout title='VICE CHAIRMAN'/>
          <div className="page-grid">
          <ProfileCard
          name='HON. OKEWOLE GRACE OLUFUNMILAYO'
          title='VICE CHAIRMAN, IPOKIA LOCAL GOVERNMENT'
        //   bio=' Committee Chairman on Education and Information typically to enhance quality Education and Information.'
           image={vicechairman}/>
           </div>
        </>
    )
}


export default ViceChairman;