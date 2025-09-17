import ProfileCard2 from "../ProfileCard2";
import PageLayout from "../PageLayout";
import dgsaimg from "../../assets/dgsa.jpeg"
const DGSA=()=>{
    const services = [
       " Issuance of Certificate of Origin",
      "  Solemnization of Marriage",
       " Naming of Street",
        "Issuance Letter of Identification and Attestation",
        "Award of Contracts",
     "  Other duties"

    ];
    return(
        <>
          <PageLayout title='DIRECTOR GENERAL SERVICES AND ADMINISTRATION(DGSA)' />
        <div className="page-grid">
         <ProfileCard2 
         name='AKINDELE ADEBAYO MONSUR' 
         title='BRIEF OF DIRECTOR GENERAL SERVICES AND ADMINISTRATION'
         bio='The General Services and Administration Department is the engine room of the Local Government saddled with tremendous responsibility ranging from implementation of 
         Government policies, Staff Development, and Welfarism, Personnel Management, Discipline among others.'
         list={services}
         image={dgsaimg}/>
          </div>
        </>
    )
}

export default DGSA;