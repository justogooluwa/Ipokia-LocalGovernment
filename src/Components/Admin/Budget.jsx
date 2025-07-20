import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import Admin6 from "../../assets/admin6.jpeg"
function Budget(){
    return(
        <>
        <PageLayout title='THE SUPERVISORS AND SPECIAL ADVISERS IN IPOKIA LOCAL GOVERNMENT' />
        <div className="page-grid">
         <ProfileCard 
         name='Adegbite Olufunke Oluwatoyin. ' 
         title='  Assistant Chief Planning Officer. '
         bio='The department of Budget, Planning, Research and Statistics is statutorily responsible for economic planning, data generation, data analysis and processing for informed decision making regarding governmental policies, programmes and projects.'
         image={Admin6}/>
          </div>
        </>
    )
}

export default Budget;