import React from "react";
import PageLayout from "../PageLayout";
import ProfileCard2 from "../ProfileCard2";
import communityImage from "../../assets/social.jpeg"; 

const CommunitySocialDevelopment = () => {
  return (
    <>
    <PageLayout title='THE SUPERVISORS AND SPECIAL ADVISERS IN IPOKIA LOCAL GOVERNMENT' />
    <div className="page-grid">
      <ProfileCard2
        name="Community & Social Development Department – Ipokia Local Government"
        title="Promoting Well-being, Equity & Sustainability"
        bio="Community & Social Development refers to the processes and initiatives aimed at enhancing the well-being, quality of life and socio-economic conditions of individuals within a community. It involves empowering people, fostering inclusiveness and promoting sustainable practices to build resilient and thriving societies."
        list={[
          "Empowerment: Strengthening the capacity of individuals and groups to actively participate in decisions that affect their lives and communities.",
          "Equity and Inclusion: Ensuring fair access to opportunities, resources and services for all, particularly marginalized and vulnerable populations.",
          "Social Cohesion: Promoting trust, cooperation and a sense of belonging among community members to foster unity and mutual support.",
          "Sustainability: Encouraging long-term development strategies that integrate social, economic and environmental dimensions."
        ]}
        bios="Core Areas of Focus:"
        lists={[
          "Education and skills training.",
          "Eradication of social vices.",
          "Social and family welfare.",
          "Poverty Alleviation.",
          "Youth and Women Empowerment.",
          "Infrastructure and Basic Services.",
          "Environment – Sustainability.",
          "Civic participation and Good Governance."
        ]}
        image={communityImage}
      />
      {/* <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "1rem 2rem" }}>
        <p className="bio" style={{ fontFamily: 'Rubik, sans-serif', color: '#555', lineHeight: 1.7 }}>
          <strong>Conclusion:</strong> Community and social development is essential for building inclusive, equitable and sustainable societies. Its success relies on the collaborative efforts of governments, non-governmental actors and the communities themselves to address social issues and promote comprehensive progress.
        </p>
      </div> */}
    </div>
    </>
  );
};

export default CommunitySocialDevelopment;
