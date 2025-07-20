import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import ward8 from "../../assets/ward8.jpeg"


function Ijofinward(){
    return(
        <>
          <PageLayout title='Ipokia Members of The Legislative Council'/>
          <div className="page-grid">
          <ProfileCard
          name='Hon. Soyingbe Sewanu Folorunsho '
          title=' Councilor, Ijofin -Idosa ward. Chairman, House committee on Community Development and Women Affairs. '
          bio='The committee is saddle with the responsibility of supervising the activities of the CDAs and women development. This form part of the oversight function of the committee.'
           image={ward8}/>
           </div>
        </>
    )
}


export default Ijofinward;