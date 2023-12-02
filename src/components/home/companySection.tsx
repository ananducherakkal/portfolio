import React from "react";
import CompanyCard from "./companyCard";

interface ICompanySection {}
const CompanySection = React.forwardRef<HTMLDivElement, ICompanySection>(
  (props, ref) => {
    return (
      <div className="min-h-screen px-24 py-10" ref={ref}>
        <div className="text-4xl font-medium mb-4">Experience</div>
        <CompanyCard
          name="Marktine Technologies"
          position="Full-Stack developer"
          startYear="2022 June"
          endYear="2023 July"
          websiteUrl="https://marktine.com/"
          websiteLogo="/images/marktineLogo.png"
          location="Jaipur, India"
        />
        <CompanyCard
          name="Sekel Tech"
          position="Front-End developer"
          startYear="2021 Aug"
          endYear="2022 June"
          websiteUrl="https://sekel.tech/"
          websiteLogo="/images/sekelLogo.png"
          location="Banglore, India"
        />
        <CompanyCard
          name="Dynata"
          position="Surevey Programmer"
          startYear="2022 June"
          endYear="2019 November"
          websiteUrl="https://www.dynata.com/"
          websiteLogo="/images/dynataLogo.png"
          location="Noide, India"
        />
      </div>
    );
  }
);

export default CompanySection;
