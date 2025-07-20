import PageLayout from "../PageLayout";
import ProfileCard from "../ProfileCard";
import leader from "../../assets/isikalu.jpeg"

function Leader(){
    return(
        <>
        <PageLayout title='CLERK OF THE HOUSE'/>
        <div className="page-grid">
        <ProfileCard 
        name='Isikalu Goriola Olufemi, FCPA'
        title='Clerk of the House/Chief Administrative Officer'
        bio='This is an arm of the Local Government that is saddle with the statutory responsibility of enacting Bye Laws for the smooth operation of the Local Government. 
It is a unit in the Department of General Services and Administration of the Local Government. 
The unit also perform oversight function in various capacity to see that the Local Government work in compliance with the approved Appropriation Bill of a stipulated year. 
They are the main body that is saddle with the statutory responsibility of approving the Appropriation Bill of the Local Government.'
image={leader}/>
</div>
        </>
    )
}

export default Leader;