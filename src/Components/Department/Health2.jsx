import ProfileCard2 from "../ProfileCard2";
import PageLayout from "../PageLayout";
import healthimg from "../../assets/health.jpeg"
const Health2=()=>{
    const healthservice = [
        "Health education and promotion;",
"Immunization against childhood killer diseases;",
"Reproductive, Maternal, Adolescent and Child Health;",
"Nutrition;",
"Provision of essential drugs;",
"Treatment of minor ailments;",
"Prevention of communicable diseases;",
"Primary eye care and",
"Primary oral care."
    ];
    return(
        <>
          <PageLayout title='MEDICAL OFFICER OF HEALTH' />
        <div className="page-grid">
         <ProfileCard2 
         name='AKINDELE ADEBAYO MONSUR' 
         title='BRIEF OF IPOKIA LOCAL GOVERNMENT HEALTH AUTHORITY '
         bio='The Local Government Health Authority is saddled with the responsibility of providing primary health 
         care services to the good people of Ipokia Local Government Area. These services include:'
         list={healthservice}
         bios='All the services are provided by skilled and well-experienced health care workers of various cadres which include doctor, nurses, midwives, community health officers, community extension workers, junior community health extension workers, pharmacy technicians, laboratory technicians, health educators and medical record technician.
These services are rendered in 31 functional health facilities across the 12 wards of the Local Government Area.
'
         image={healthimg}/>
          </div>
        </>
    )
}

export default Health2;