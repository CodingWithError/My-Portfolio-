import React from "react";
import Experience from "./Experience";
import "./ProffesionalExperience.css";

const ProffesionalExperience = () => {
  return (
    <section className="proffesional-experience" id="experience">
      <h1>My Projects</h1>
      <div className="experience-list">
        <Experience
          tagLine="Backend Project"
          website="https://github.com/CodingWithError/Backend_Spring_Boot"
          description="Worked on this java backend project using Spring Boot. It is a simple backend project with CRUD operations."
          skills={["System Design", "Spring Boot", "Java"]}
          logo="https://imgs.search.brave.com/sa2FWxtoUsKO6KQ-k32nnEcMSul6bIfrnt5VvirNtHI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi83Lzc5L1Nw/cmluZ19Cb290LnN2/Zy81MTJweC1TcHJp/bmdfQm9vdC5zdmcu/cG5n"
        />
        <Experience
          tagLine="Tic-Tac-Toe"
          website="https://github.com/CodingWithError/Tic_Tac_Toe_Backend"
          description="Made this tic-tac-toe game using Spring Boot. It is a simple backend project with CRUD operations."
          skills={["System Design", "Spring Boot", "Java"]}

          logo="https://imgs.search.brave.com/dbhTlx934Jf70z6xuqQyyQg9Bkyz0-uuU0eAnbEHQCo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8zLzMyL1Rp/Y190YWNfdG9lLnN2/Zy81MTJweC1UaWNf/dGFjX3RvZS5zdmcu/cG5n"
        />
      </div>
    </section>
  );
};

export default ProffesionalExperience;
