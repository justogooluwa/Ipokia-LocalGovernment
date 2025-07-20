import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import ward1 from "../../assets/ward1.jpeg"


function Ifonyintedoward(){
    return(
        <>
          <PageLayout title='Ipokia Members of The Legislative Council'/>
          <div className="page-grid">
          <ProfileCard
          name='RT. HON. ADEYANJU AKEEM ALAMU'
          title='COUNCILLOR REPRESENTING IFONYINTEDO WARD ( LEADER OF THE HOUSE )'
          bio=' Legislative house Leader, this office is responsible for presiding over the chamber and managing their affairs.'
           image={ward1}/>
           </div>
        </>
    )
}


export default Ifonyintedoward;