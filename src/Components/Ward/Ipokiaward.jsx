import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import ward7 from "../../assets/ward7.jpeg"


function Ipokiaward(){
    return(
        <>
          <PageLayout title='Ipokia Members of The Legislative Council'/>
          <div className="page-grid">
          <ProfileCard
          name='Hon. Fagbenro Afees Awolowo '
          title=' Councillor  Ipokia Ward 1'
          bio='Legislative Council'
           image={ward7}/>
           </div>
        </>
    )
}


export default Ipokiaward;