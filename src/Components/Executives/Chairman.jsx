import ProfileCard from "../ProfileCard2";
import PageLayout from "../PageLayout";
import chairman from "../../assets/fbimg2.jpg"
import { Helmet } from "react-helmet-async";
function Chairman(){
    return(
        <>
        <Helmet>
            <title>Chairman - Ipokia Local Government</title>
        </Helmet>
        <PageLayout title='THE CHAIRMAN' />
        <div className="page-grid">
         <ProfileCard 
         name='HON. JOHNSON AKOHOMEH AVOSEH AKA CORNERSTONE.' 
         title='  THE EXECUTIVE CHAIRMAN OF IPOKIA LOCAL GOVERNMENT. '
         bio='Hon. Johnson Akohomeh Avoseh  the Executive Chairman of Ipokia Local Government  and 
currently serves as the Public Relations Officer of the Ogun State Chapter of the Association 
of Local Governments of Nigeria ALGON. A man of vision, character and enduring public 
spirit, he has devoted over fifteen years to grassroots governance, political mobilisation and 
youth empowerment. 
His academic journey reflects a steadfast commitment to excellence. He holds a Master’s 
degree in Public Administration with a specialisation in Local Government Administration 
from the University of Lagos, Nigeria’s premier institution. He began his education in Ipokia 
and completed his secondary studies at Muslim Progressive High School, Oke Odan. He 
later obtained a Diploma in Criminal Justice Administration from the University of Lagos and 
a Bachelor’s degree in Public Administration from Lagos State University, Anthony Village 
Campus. 
His early involvement in public affairs was shaped by a strong sense of purpose and 
community responsibility. He has served with distinction in various strategic roles including 
Supervisor for Works and Housing in Ipokia Local Government and Youth Leader of the All 
Progressives Congress APC in the same council area. His tenure as a board member of Ogun 
State Television OGTV under the appointment of His Excellency Prince Dapo Abiodun CON 
was marked by active participation, integrity and meaningful contributions. 
As founder of the New Ipokia Movement, he has championed initiatives that promote civic 
engagement, leadership development and political inclusion, particularly among young 
people across the twelve wards of Ipokia. Through this platform, he has inspired a generation 
to reflect on responsible leadership and shared progress. 
With a reputation for discipline, credibility and accessibility, he brings to public office not 
only academic preparation but also the lived experience of service, selflessness and hard 
work. His administration is defined by a clear mission to reposition Ipokia Local Government 
for sustainable development, responsive governance and inclusive growth.'
         image={chairman}/>
          </div>
        </>
    )
}

export default Chairman;