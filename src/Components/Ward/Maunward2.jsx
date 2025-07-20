import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import ward9 from "../../assets/ward9.jpeg"


function Maunward2(){
    return(
        <>
          <PageLayout title='Ipokia Members of The Legislative Council'/>
          <div className="page-grid">
          <ProfileCard
          name='Hon. Nutayi Ebenezer Babatunde '
          title=' Councillor Representing,  Maun Ward. 1 Chairman Committee Water and Environmental Sanitation.  '
          bio='The Committee aims to promote a healthy Environment, improves Public health, and enhance the overall quality of life for Community members.'
           image={ward9}/>
           </div>
        </>
    )
}


export default Maunward2;