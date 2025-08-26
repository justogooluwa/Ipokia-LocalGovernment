import PageLayout from "../Components/PageLayout";
import "./AboutIpokia.css"
import { Helmet } from "react-helmet-async";

function AboutIpokia(){
    const brief=[
        "Ipokia Local Government, often refers to as the “Main Gate to the Gateway State”, is one of the 182 Local Government Councils created by the then Military Administration under the headship of Late General Sanni Abacha on the 13th day of December,1996 out of the Old Egbado South Local Government. It has its headquarters in Ogun State, Ipokia Local Government happens to be among the five newly created Local Government at that time. Other are: Ijebu North East, Atan Imeko- Afon, Imeko: Remo North, Isara: and Eweko, Itori."
    ]
    const location=[
        "The entire Local Government covers area of approximately180.535 square kilometers. The population, according to the outcome of the 1991 National Population Census, is about 300,000 people It is on record that the Local Government has more than 300 towns, villages and hamlets. It is bounded in the North by Yewa North Local Government and Lagos State in the South. It also shares boundaries with Benin Republic in the Western part and Yewa South and Ado-Odo/Ota Local Governments in the Eastern part."
    ]
    const people =[
        "The inhabitants of the area are predominantly Anagos, Eyos, and Eguns. The people have a very rich cultural heritage notably the traditional dancers like the Arobajo, Ajangbode, Izangbeto, Awuse, Efe, Agbe, Sato, Gbedegorome, among others. These serve as major sources of entertainment for the people of the area during social functions. On the side of religion, Islam, Christianity and the traditional religions are widely accepted."
    ]
    const occupation =[
        "Majority of the people are farmer as a result of the vegetation of the areaWhich is more of savannah type. The area enjoys considerable rainfall as in other parts of the southern Region of the Country. The vegetation and the climatic condition found here have good support for planting of oil palm tress (a major cash crop) on a large scale. This explains why the Local Government has palm oil and kernel in large quantities. The people also engage in the production of local mats, lagba, fufu, koko. The main agricultural products found in the area are cassava, melon, maize, cucumber or sweet potatoes and yam."
    ]
    const landmark =[
        "Ipokia Local Government is blessed with an important and a very rich island know as ‘‘TONGEJI ISLAND’’ The island is situated on the Badagry creek and lies on the extreme corner of the Western part of the Local Government. It is of significant economic importance not only to the Local Government and the State, but also to the Federal government. It stretches to the Republic of Benin. It remains the only notable tourist attraction in the area. It is also important to place it on record that the Island has a large deposit of crude petroleum in commercial quantities. The exploration of this product would soon commence.   "
    ]
    const tradition=[
        "Ipokia Local Government can boast of a strong traditional heritage and a sound cultural at the head of which are enlightened Royal Fathers as shown below."
    ]
    const admin = [
        "Like any other Local Governments, there are two major organs recognized by the law; the Executive and the Legislative Arms. The Local Government has witnessed nine (9) district administrations since inception. Out of this figure, six (6) were Caretaker/Transition Committees in nature, while there are3 elected functionaries (including the present dispensation under Hon. Kayode Oke). The detailed information on this is in Plublication. To assist the two organs mentioned above in translating the polices programme of the three tiers of government (the Local, State and the Federal Government) into reality, are key professional spread across seven distinct but collaborating Departments. They include; Administration, Finance & Supplies, Works and Housing, Agriculture and Natural Resources, Medical and Planning, research and Statistics. The Department are further divided into Sections, Units and Divisions for effective discharge of activities at the greatest level."
    ]
    const politicalward =[
        "For effective governance at the Local Government level, Ipokia Local Government is divided into twelve (12) Political Wards as shown in the list below."
    ]
    const politicalwardlist =[
        "Ipokia Ward I" ,
        "Ipokia Ward II", 
        "Maun Ward I ",
        "Maun Ward II",
        "Idiroko Ward",
        "Ajegunle Ward",
        "Agosasa Ward",
        "Ijofin Ward",
        "Agada Ward",
        "Tube Ward",
        "Ihunbo/Ilashe Ward",
        "Ifonyitedo Ward"
    ]
    const economic =[
        "The basic reason for the creation of any Local Government is usually summed up as a way of ensuring fast development and growth from both the social and economic angels. Without sounding too immodest. The birth of Ipokia Local Government has brought about monumental strides in many areas such as education, road maintenance and development, health care services, environmental sanitation, agriculture, water, among others. These achievements are available in the records of the Local Government from year to year. With the pace of development in the Local Government of recent, the people of the area stand to benefit from the provision of infrastructure and other social benefits."
    ]
    const schools =[
        "AFRICAN CHURCH PRIMARY SCHOOL, OWOTEDO IDOLOGUN",
        "ANSAR-UD-DEEN SCHOOL, IDIMARUN",
        "BAPTIST DAY PRIMARY SCHOOL, ALAARI",
        "BAPTIST DAY PRIMARY SCHOOL, IGBORODO",
        "IPOKIA LOCAL GOVERNMENT SCHOOL, IGBODOROJU",
"BAPTIST DAY SCHOOL, ITA - ONIMOSA",
"BAPTIST DAY PRIMARY SCHOOL, IDOSA",
"BAPTIST DAY PRIMARY SCHOOL, IFONYINTEDO",
"BAPTIST DAY PRIMARY SCHOOL, IWUKU - IYASI",
"BAPTIST DAY PRIMARY SCHOOL, MADOGA",
"BAPTIST DAY PRIMARYSCHOOL, VAWHE - TAFA",
"CHRIST CHURCH SCHOOL, IPOKIA",
"COMMUNITY PRIMARY SCHOOL, AHUNTEDO/ONIGBEDU",
"COMMUNITY PRIMARY SCHOOL, AFERIKU-ISIOKO",
"COMMUNITY PRIMARY SCHOOL, AHOVO IZIGI",
"COMMUNITY PRIMARY SCHOOL, AJAHUNKOME",
"COMMUNITY PRIMARY SCHOOL, AJEGUNLE",
"COMMUNITY PRIMARY SCHOOL, ASEKO",
"COMMUNITY PRIMARY SCHOOL, ASIPA-IKORODU",
"COMMUNITY PRIMARY SCHOOL, ATHANMAYI",
"COMMUNITY PRIMARY SCHOOL, IBADAN-TUBE",
"COMMUNITY PRIMARY SCHOOL, IDOFORO",
"COMMUNITY PRIMARY SCHOOL, IDOJORI",
"COMMUNITY PRIMARY SCHOOL, IDOMOGUN",
"COMMUNITY PRIMARY SCHOOL, IDOTUN",
"COMMUNITY PRIMARY SCHOOL, IGATE",
"COMMUNITY PRIMARY SCHOOL, IGBO-ADIGUNSI",
"COMMUNITY PRIMARY SCHOOL, IGUU",
"COMMUNITY PRIMARY SCHOOL, ILAGBE",
"COMMUNITY PRIMARY SCHOOL, ODAN - IJAYE",
"COMMUNITY PRIMARY SCHOOL, ILERO",
"COMMUNITY PRIMARY SCHOOL, ITA-EGE/AJELENDE",
"COMMUNITY PRIMARY SCHOOL, IWUKU-SEJE",
"COMMUNITY PRIMARY SCHOOL, KAJOLA-AKOPIN",
"COMMUNITY PRIMARY SCHOOL, KOKO",
"COMMUNITY PRIMARY SCHOOL, MAFAN-TUBE",
"COMMUNITY PRIMARY SCHOOL, ODAN-AJE, IDIROKO",
"COMMUNITY PRIMARY SCHOOL, OGOSA",
"COMMUNITY PRIMARY SCHOOL, OKE-OJUMO",
"COMMUNITY PRIMARY SCHOOL, SAASA",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, AYETORO-AKOJAGA",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, MEDE - OGOSA",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, AGO - EGUN",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, AGOSASA",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, ANAGUNJI",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, BILAFON-MODO",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, IDATA - IDOTUN",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, IDIROKO",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, IDOLORISA",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, IDOSEMO",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, IFONYINTEDO",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, AKERE",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, IGUDE",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, IJOFIN",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, IKOLAJE-IDIROKO",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, ILASE",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, ILEPA-GBODOJEGO",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, IPINLE",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, IPOKIA",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, IROPO",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, ITA ONIMOWO",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, MAUN",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, ONIRO",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, TUBE",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, VAWHE PEVI",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, VAWHE -TUKURU",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, WHEKAN",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, IPONRAN",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, IMULE",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, TONGEJI-ISLAND",
"METHODIST PRIMARY SCHOOL, AGADA",
"METHODIST PRIMARY SCHOOL, BODE-ASE",
"METHODIST PRIMARY SCHOOL, IDOPETU",
"METHODIST PRIMARY SCHOOL, IGANMI",
"METHODIST PRIMARY SCHOOL, IJOFIN",
"METHODIST PRIMARY SCHOOL, ILESI",
"METHODIST PRIMARY SCHOOL, ODEPATA",
"METHODIST PRIMARY SCHOOL, OSIBADAN",
"METHODIST PRIMARY SCHOOL, VAWHE HUNDO",
"NAWAR - UD -DEEN PRIMARY SCHOOL, AGOSASA",
"ROMAN CATHOLIC MISSION PRIMARY SCHOOL, ITA-EGBE",
"ROMAN CATHOLIC MISSION PRIMARY SCHOOL, ONFO",
"ROMAN CATHOLIC MISSION SCHOOL, AGOSASA",
"ST. JOHN'S PRIMARY SCHOOL, IHUNBO",
"THE APOSTOLIC CHURCH SCHOOL, OBANINGBE",
"U.A.M.C. PRIMARY SCHOOL, WASINMI-IKORODU",
"UNITED PRIMARY SCHOOL, IBATEFIN",
"UNITED AFRICAN METHODIST CHURCH PRIMARY SCHOOL, IPOKIA",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL, II IDIROKO.",
"IPOKIA LOCAL GOVERNMENT PRIMARY SCHOOL  II, TUBE.",
    ]
    const healthcentername =[
       "AGADA H/C",
"IGUU H/C",
"WHEKAN H/C",
"AGOSASA MPHC",
"AGOSASA PHC",
"IBATEFIN H/C",
"AJEGUNLE H/C",
"IDIROKO H/C",
"IDIROKO G/H",
"ODO – ERAN H/C",
"OJUROKO H/C",
"IFOYINTEDO H/C",
"ALARI H/C",
"IROPO H/C",
"ATAN OTA H/C",
"KOKO H/C",
"MADOGA H/C",
"IKORODU H/C",
"IHUNBO H/C",
"ILASE H/C",
"ITA-EGBE H/C",
"IJOFIN H/C",
"BODE-ASE H/C",
"IPOKIA H/C",
"ONFO H/C",
"IPOKIA G/H",
"ODAN IJAYE H/C",
"ONIRO H/C",
"MAUN I H/C",
"AHOVO H/C",
"VAWHE HUNDO H/C",
"VAWHE TAFA H/C",
"FANJI H/C",
"TUBE H/C",
    ]
    const healthward=[
"AGADA",
"AGADA",
"AGADA",
"AGOSASA",
"AGOSASA",
"AGOSASA",
"IDIROKO",
"IDIROKO",
"IDIROKO",
"IDIROKO",
"IDIROKO",
"IFOYINTEDO",
"IFOYINTEDO",
"IFOYINTEDO",
"IFOTINTEDO",
"IFOYINTEDO",
"IFOYINTEDO",
"IFOYINTEDO",
"IHUNBO-LASE",
"IHUNBO-LASE",
"IHUNBO-LASE",
"IJOFIN",
"IJOFIN",
"IPOKIA I",
"IPOKIA II",
"IPOKIA I",
"IPOKIA II",
"IPOKIA II",
"MAUN I",
"MAUN I",
"MAUN II",
"MAUN II",
"MAUN II",
"TUBE",
    ]
    const obas=[
       " OBA ISA OLANIYAN			-		ONIPOKIA OF IPOKIA",
	"VACANT					-		ONIKO OF IKOLAJE	",
	"OBA JAMES A. IGBOWU			-		OPO OF IDOSEMO",
	"OBA M. A. AWODE			-		OLOLO OF IJOFIN",
	"OBA SIKIRU I. O. ADEGBOLA		-		ALAYE OF ONIRO AGUDE",
	"OBA AZEEZ TAIWO AKINPELU	-		OJA OF AGOSASA",
	"AKOKO OF TONGEJI (VACANT) 	-		TONGEJI ISLAND	",
	"VACANT					-		OLU OF IFOYINTEDO",
	"OBA JOHN ADEWALE OLAIFA		-		ALASE OF ILASHE",
	"OOBA JOHN BABAJIDE FADOUNGBO	-		OLOKO EYE OF OKO EYE",
	"OBA ISAAC O. AKINLOLU OJO		-		ONIMEDE OF MEDE OGOSA ",
	"OBA ABISOYE MATHEW ADEMOLA	-		ONITAEGE OF ITA EGE",
	"OBA JOSEPH OLAMIDE ADESIYAN	-		ONIHUNBO OF IHUNBO ",
	"OBA ISAAC KEHINDE ADEISA		-		OGIYAN OF ALAARI",

    ]
    const markets=[
      "  TUBE MARKET",
   "AGOSASA MARKET",
	"IHUNBO MARKET",
	"KOKO MARKET",
	"TAFA MARKET",
	"AJEGUNLE MARKET",
	"LOLA MARKET, IDIROKO",
	"MAUN MARKET"

    ]
    return(
        <>
         <Helmet>
        <title>AboutIpokia - Ipokia Local Government</title>
    </Helmet>
        <PageLayout title={"About Ipokia Local Goverment"} />
        
        <h1 className="header">SHORT BRIEF ON IPOKIA LOCAL GOVERNMENT</h1>
        {brief.map((item, index) => <p key={index}>{item}</p>)}
  
        <h1 className="header">The Location</h1>
        {location.map((item, index) => <p key={index}>{item}</p>)}
  
        <h1 className="header">The People</h1>
        {people.map((item, index) => <p key={index}>{item}</p>)}
  
        <h1 className="header">Occupation</h1>
        {occupation.map((item, index) => <p key={index}>{item}</p>)}
  
        <h1 className="header">LandMark</h1>
        {landmark.map((item, index) => <p key={index}>{item}</p>)}
  
        <h1 className="header">Traditional Rulers</h1>
        {tradition.map((item, index) => <p key={index}>{item}</p>)}
  
        <h1 className="header">Administrative Structure</h1>
        {admin.map((item, index) => <p key={index}>{item}</p>)}
  
        <div className="politics">
          <h1 className="header">Political Ward</h1>
          {politicalward.map((item, index) => <p key={index}>{item}</p>)}
          <ol>
            {politicalwardlist.map((ward, index) => (
              <li key={index}>{ward}</li>
            ))}
          </ol>
        </div>
  
        <h1 className="header">SOCIO–ECONOMIC/DEVELOPMENTAL EFFORTS SINCE INCEPTION</h1>
        {economic.map((item, index) => <p key={index}>{item}</p>)}
  
        <h1 className="header">EXISTING SCHOOLS AT IPOKIA LOCAL GOVERNMENT</h1>
        <ol>
          {schools.map((school, index) => (
            <li key={index}>{school}</li>
          ))}
        </ol>
  
        <div className="health">
  <h1 className="header">HEALTH CENTRES IN THE LOCAL GOVERNMENT</h1>
  <table className="health-table">
    <thead>
      <tr>
        <th>S/N</th> 
        <th>NAME OF HEALTH CENTRE</th>
        <th>WARD</th>
      </tr>
    </thead>
    <tbody>
      {healthcentername.map((center, index) => (
        <tr key={index}>
          <td>{index + 1}</td> 
          <td>{center}</td>
          <td>{healthward[index] || ""}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  
        <div className="oba">
          <h1 className="header">OBA’S IN IPOKIA LOCAL GOVERNMENT</h1>
          <ol>
            {obas.map((oba, index) => (
              <li key={index}>{oba}</li>
            ))}
          </ol>
        </div>
  
        <div className="market">
          <h1 className="header">LIST OF MARKETS AT IPOKIA LOCAL GOVERNMENT</h1>
          <ol>
            {markets.map((market, index) => (
              <li key={index}>{market}</li>
            ))}
          </ol>
        </div>
      </>
    )
}


export default AboutIpokia;