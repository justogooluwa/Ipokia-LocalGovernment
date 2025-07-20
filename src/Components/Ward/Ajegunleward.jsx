import ProfileCard from "../ProfileCard";
import PageLayout from "../PageLayout";
import ward5 from "../../assets/ward5.jpeg"


function Ajegunleward(){
    return(
        <>
          <PageLayout title='Ipokia Members of The Legislative Council'/>
          <div className="page-grid">
          <ProfileCard
          name='Rt. Hon. Agboku Olusegun James'
          title='  Councillor, Ajegunle WardChairman, House Committee on Finance and Appropriation. '
          bio='House Committee on Finance and Appropriations within the Ipokia Local Government Legislative Council is responsible for overseeing the fiscal planning, budgeting and appropriation processes of the Local Government. This office plays a crucial role in evaluating and approving the annual budget, monitoring financial expenditures and ensuring that public funds are allocated effectively and in accordance with statutory provisions.
It ensures transparency, accountability and financial discipline in the administration of Local Government resources. The office works closely with various departments to review budget proposals, track fund utilization and recommend adjustments where necessary for efficient service delivery and developmental progress across the Local Government Area.'
           image={ward5}/>
           </div>
        </>
    )
}


export default Ajegunleward;