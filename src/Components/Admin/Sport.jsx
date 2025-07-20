import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
// import Admin1 from "../../assets/admin1.jpeg"
import Admin2 from "../../assets/ward11.jpeg"
function Sport(){
    return(
        <>
        <PageLayout title='THE SUPERVISORS AND SPECIAL ADVISERS IN IPOKIA LOCAL GOVERNMENT' />
        {/* <div className="page-grid">
         <ProfileCard 
         name='Adelabu David Oyeleye' 
         title='S.A Community development, Youth Education and Sport.'
         bio='Executive member of the standing committee of Education, Community Dev, Youth, Education and Sports.'
         image={Admin1}/>
          </div> */}

          
        <div className="page-grid">
         <ProfileCard 
         name='OLUMIDE ESTHER OBIANUJU' 
         title='HEAD OF DEPARTMENT OF INFORMATION, EDUCATION,  PUBLIC RELATIONS AND SPORTS.'
         bio='The department of Information, Education, Public Relations And Sports is known as the image maker of the Local Government saddles with the responsibility to establish, sustain and maintain a mutual understanding between the government and her Publics (internal and esternal); using the means of mass communication.
This department is housed by a crop of professional who work day and night to ensure a good image of the government is spread and accepted in the nooks and crannies of her geographical territory.
It also see to the disemination of up- to- date information of the activities of the Local Government through various channels of communication created by which the government gets feedbacks on the information sent out and the latest gist about the government among the people.'
         image={Admin2}/>
          </div>
        </>
    )
}

export default Sport;