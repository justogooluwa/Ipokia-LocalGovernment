import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import ward6 from "../../assets/ward6.jpeg"


function Agosasaward(){
    return(
        <>
          <PageLayout title='Ipokia Members of The Legislative Council'/>
          <div className="page-grid">
          <ProfileCard
          name='Hon. Odunbaku Toheeb Olabode '
          title=' Councillor Agosasa Ward'
          bio='Legislative Council'
           image={ward6}/>
           </div>
        </>
    )
}


export default Agosasaward;