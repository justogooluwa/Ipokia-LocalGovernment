import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import works from "../../assets/works.jpeg"

function Housing(){
    return(
        <>
         <PageLayout title='THE SUPERVISORS AND SPECIAL ADVISERS IN IPOKIA LOCAL GOVERNMENT'/>   
         <div className="page-grid">
            <ProfileCard 
            name='Engr. Taiwo Olaneye Tinuosho, MNSE'
            title='HEAD OF WORKS, HOUSING, LAND AND SURVEY'
            bio='Works And Housing Department is responsible for execution, supervision and assessment of physical projects. The department is also saddled with the responsibilities of construction and maintenance of Roads, culverts, buildings, electrical installation and maintenance of vehicles and plants.'
            image={works}/>
         </div>
        </>
    )
}

export default Housing;