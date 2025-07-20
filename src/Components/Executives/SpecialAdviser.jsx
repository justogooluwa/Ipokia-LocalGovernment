import PageLayout from "../PageLayout";
import ProfileCard from "../ProfileCard";
import adviser from "../../assets/adviser.jpeg"
import Admin1 from "../../assets/admin1.jpeg"
import Duty from "../../assets/duty.jpeg"
import Revenue from "../../assets/revenue.jpeg"


function SpecialAdviser(){
    return(
        <>
        <PageLayout title='SPECIAL ADVISERS'/>
        <div className="page-grid">
            <ProfileCard 
            name=' Hon Hunpe Peter Nunayon'
            title='SPECIAL ADVISER to chairman on political matter'
            bio='Party affairs and grassroots mobilization'
            image={adviser}/>
        </div>

        <div className="page-grid">
         <ProfileCard 
         name='Adelabu David Oyeleye' 
         title='S.A Community development, Youth Education and Sport.'
         bio='Executive member of the standing committee of Education, Community Dev, Youth, Education and Sports.'
         image={Admin1}/>
          </div>

          <div className="page-grid">
            <ProfileCard 
            name=' MORUF JINADU'
            title='SA SPECIAL DUTIES '
            bio='Social welfare of the party and her members'
            image={Duty}/>
        </div>

        <div className="page-grid">
            <ProfileCard 
            name=' Hon Fagbenro Musa Oluwasegun'
            title=' S.A on internally Generated Revenue '
            bio='Standing member of the council’s committee on internally generated revenue.'
            image={Revenue}/>
        </div>
        </>
    )
}

export default SpecialAdviser;