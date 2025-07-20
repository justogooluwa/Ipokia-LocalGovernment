import PageLayout from "../PageLayout";
import ProfileCard from "../ProfileCard";
import Admin5 from "../../assets/admin5.jpeg"


function Waters(){
    return(
        <>
       <PageLayout title='SUPERVISORS' />
        <div className="page-grid">
         <ProfileCard 
         name='Sosoedo Denayin Amos  ' 
         title=' Supervisor for Water Supply and Environmental Sanitation.'
         bio='Water supply, safeguarding and Planning of Environment services in Ipokia Local Government  Ogun State.'
         image={Admin5}/>
          </div>
        </>
    )
}

export default Waters;