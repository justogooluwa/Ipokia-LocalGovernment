import ProfileCard from "../ProfileCard";
import ProfileCard2 from "../ProfileCard2";
import PageLayout from "../PageLayout";
// import Admin5 from "../../assets/admin5.jpeg"
import Admin6 from "../../assets/ward12.jpeg"
function Water(){
    const duties = [
        "Routine house to house inspection",
        "Water supply and sanitation",
        "Pauper burial",
        "Vector control",
        "Waste management",
        "Market sanitation",
        "Meat hygiene and sanitary maintenance of abattoirs",
        "Food hygiene and safety",
        "Control of stray animals",
        "Emergency relief program",
        "Health education and mobilization of members of the public",
        "Revenue generation",
        "School health services",
        "Monitoring and Evaluation",
        "Sanitary maintenance of cemetery",
        "Enforcement of environmental laws and regulations",
        "Housing and sanitation/ construction and contemporary environmental issues"
      ];

      const duty = [
        "Water supply unit",
        " Environmental Sanitation unit",
        "Hygiene, Education and mobilization unit",
        " Monitoring and Evaluation unit"
      ];
    return(
        <>
        <PageLayout title='THE SUPERVISORS AND SPECIAL ADVISERS IN IPOKIA LOCAL GOVERNMENT' />
        {/* <div className="page-grid">
         <ProfileCard 
         name='Sosoedo Denayin Amos  ' 
         title=' Supervisor for Water Supply and Environmental Sanitation.'
         bio='Water supply, safeguarding and Planning of Environment services in Ipokia Local Government  Ogun State.'
         image={Admin5}/>
          </div> */}

          <div className="page-grid">
         <ProfileCard2
         name=' Afolabi Taiwo Olugbolade   ' 
         title='Director Department: Water Supply and Environmental Sanitation  '
         bio='Water supply and Environmental Sanitation department is one of the eight departments in ipokia LG. It is sub-divided into four units.
Which are'
             list={duty} 
             bios='The department is made up of the Environmental Health Officers, Environmental Health Technology, Environmental Health 
Technician. In addition, the statutory duties of the department are as follows.'
             lists={duties}
         image={Admin6}/>
          </div>
        </>
    )
}

export default Water;