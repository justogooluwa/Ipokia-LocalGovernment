import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import Admin4 from "../../assets/admin4.jpeg"
function Agric(){
    return(
        <>
        <PageLayout title='THE SUPERVISORS AND SPECIAL ADVISERS IN IPOKIA LOCAL GOVERNMENT' />
        <div className="page-grid">
         <ProfileCard 
         name='Akindele Luqmon Olabisi ' 
         title='  SUPERVISOR FOR AGRICULTURE AND NATURAL RESOURCES '
         bio='Supervision of Agricultural activities and the harnessing of the natural resources'
         image={Admin4}/>
          </div>
        </>
    )
}

export default Agric;