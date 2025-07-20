import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import ilaseward from "../../assets/wardilase.jpeg"


function Ilase(){
    return(
        <>
          <PageLayout title='Ipokia Members of The Legislative Council'/>
          <div className="page-grid">
          <ProfileCard
          name=' HON. BALOGUN DANIEL OLAWALE. '
          title=' COUNCILOR, IHUNBO/ILASE WARD. '
          bio=' CHIEF WHIP'
           image={ilaseward}/>
           </div>
        </>
    )
}


export default Ilase;