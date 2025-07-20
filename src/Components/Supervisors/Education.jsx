import PageLayout from "../PageLayout";
import ProfileCard from "../ProfileCard";
import education from "../../assets/education.jpeg"


function Education(){
    return(
        <>
        <PageLayout title=' SUPERVISOR'/>
        <div className="page-grid">
            <ProfileCard 
            name='Iyanda kazeem Ayelade'
            title=' Supervisor for Education, Information and Sports'
            bio=' Primary School supervision and Primary Education management in Ipokia Local Government'
            image={education}/>
            
        </div>
        </>
    )
}

export default Education;