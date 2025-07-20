import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import agriculture from "../../assets/agriculture.jpeg"
function Agriculture(){
    return(
        <>
        <PageLayout title='' />
        <div className="page-grid">
         <ProfileCard 
         name='Omidiji Ezekiel Abolade' 
         title='Agriculture and Food Security '
         bio='The department aims to enhance food security, boost Agricultural productivity, promote sustainable and smart practices, support farmers and agricbusinesses'
         image={agriculture}/>
          </div>
        </>
    )
}

export default Agriculture;