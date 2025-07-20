import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import ward4 from "../../assets/ward4.jpeg"


function Idirokoward(){
    return(
        <>
          <PageLayout title='Ipokia Members of The Legislative Council'/>
          <div className="page-grid">
          <ProfileCard
          name='Adio Kehinde Adeniyi '
          title=' Honourable Councillor, Idiroko ward Agriculture and Natural Resources. '
          bio='My department focuses on developing and managing agriculture and natural resources, ensuring sustainable practices, food security, and environmental conservation within our community.
          Representing constituents interests,Making policy decisions,Overseeing community development, Providing guidance and support. '
        
           image={ward4}/>
           </div>
        </>
    )
}


export default Idirokoward;