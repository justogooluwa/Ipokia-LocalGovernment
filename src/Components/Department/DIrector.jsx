import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import director from "../../assets/director.jpeg"
function Director(){
    return(
        <>
        <PageLayout title='Head of Local Government (HOLGA)' />
        <div className="page-grid">
         <ProfileCard 
         name='Senapon Emmanuel Pogbe (JP)' 
         title='Head of Local Government Administration '
        //  bio='The department aims to enhance food security, boost Agricultural productivity, promote sustainable and smart practices, support farmers and agricbusinesses'
         image={director}/>
          </div>
        </>
    )
}

export default Director;