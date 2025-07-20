import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import ward3 from "../../assets/ward3.jpeg"


function Maunward(){
    return(
        <>
          <PageLayout title='Ipokia Members of The Legislative Council'/>
          <div className="page-grid">
          <ProfileCard
          name='Hon. Hunkokoe Suuru Ezekiel '
          title=' Councillor  Maun Ward 2/ Chairman Committee, Works  and Housing '
          bio='Brief of department. Committee Chairman on works and Housing typically overseas the development, implementation, and maintenance of infrastructure and housing projects within the local government.'
           image={ward3}/>
           </div>
        </>
    )
}


export default Maunward;