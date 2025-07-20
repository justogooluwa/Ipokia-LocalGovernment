import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import nulge from "../../assets/nulge.jpeg"
function Nulge(){
    return(
        <>
        <PageLayout title='NULGE Chairman ' />
        <div className="page-grid">
         <ProfileCard 
         name=' Com. Towakennu Daniel Sesede ' 
         title=' NULGE Chairman 
Ipokia Local Government '
        //  bio='The department aims to enhance food security, boost Agricultural productivity, promote sustainable and smart practices, support farmers and agricbusinesses'
         image={nulge}/>
          </div>
        </>
    )
}

export default Nulge;