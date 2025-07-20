import PageLayout from "../PageLayout";
import ProfileCard from "../ProfileCard";
import work from "../../assets/work.jpeg"
// import Admin5 from "../../assets/admin5.jpeg"


function Works(){
    return(
        <>
        <PageLayout title='SUPERVISOR FOR WORK AND HOUSING'/>
        <div className="page-grid">
            <ProfileCard 
            name='Hon Obeki John Jesuyon'
            title='Supervisor for work and housing'
            bio=' Supervision of the council’s approval, provisions and allocations'
            image={work}/>
            
        </div>
        </>
    )
}

export default Works;