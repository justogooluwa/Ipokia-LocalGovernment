import "./Steps.css"
// import "bootstrap/dist/css/bootstrap.css";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

function Steps (){
    return(
        <>
         <div className="steps">
         <table>
          <tr>
          <th>
            <h2>Application Process</h2>
            </th>
            </tr>
            <tr>
              <td>
          <div className="step1">
            <p><span>Step 1</span>Fill Applicant Payment Details With Valid and Correct Email Address</p>
          </div>
          <div className="step2">
            <p><span>Step 2</span>Make Payment Online as directed after completion of Step 1</p>
          </div>
          <div className="step3">
            <p><span>Step 3</span>Check Your Email Address for Login Details</p>
          </div>
          <div className="step4">
            <p><span>Step 4</span>Before you Log in, Ensure you scan your Signature to a Folder </p>
          </div>
          <div className="step5">
            <p><span>Step 5</span>Click on the Login Button on the Website</p>
          </div>
          <div className="step6">
            <p><span>Step 6</span>Enter the Credentials/Account details sent to your Email</p>
          </div>
          <div className="step7">
            <p><span>Step 7</span>Fill in the Application Form with your details and uplod your Signature</p>
          </div>
          </td>
          </tr>
          </table>
         </div>
        
        </>
    )
}


export default Steps;