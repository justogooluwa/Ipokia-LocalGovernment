import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import ward10 from "../../assets/ward10.jpeg"


function Agadaward(){
    return(
        <>
          <PageLayout title='Ipokia Members of The Legislative Council'/>
          <div className="page-grid">
          <ProfileCard
          name='Hon. Whensu Josiah Oluwadamilare '
          title=' Councillor Agada ward/Chairman Committee on Education and Information.'
          bio=' Committee Chairman on Education and Information typically to enhance quality Education and Information.'
           image={ward10}/>
           </div>
        </>
    )
}


export default Agadaward;