import styles from "@/styles/Home.module.css";
import Header from "../public/components/header";
export default function Home() {
  return (
    <>
      <div className={styles.content}>
        <Header headerName={"Summary"}></Header>
        <span>
          I possess 3 years of valuable experience in developing full-stack
          applications, primarily focusing on front-end technologies such as
          React, Redux, Next Js and used UI libraries like Bootstrap, Material
          UI. Additionally, I am skilled in building robust backend applications
          using Spring Boot, Java 8, JPA, and JDBC. During my 5-month internship
          at DRDO, I gained hands-on experience as a Python Django Intern,
          further enhancing my expertise. Furthermore, I have practical
          knowledge in utilizing Redux Toolkit, Thunk,Saga and Next.js, and have
          successfully employed Cypress for automated testing. My proficiency in
          CICD tools, including GIT and Jenkins pipeline, streamlines the
          development and deployment processes. With a deep understanding of
          JavaScript and React, I am capable of crafting dynamic and responsive
          user interfaces. To ensure the quality and reliability of my code, I
          have been actively employing testing frameworks like React Testing
          Library and Jest. My experience extends to working with various
          database platforms like PostgreSQL and Firebase, enabling me to design
          effective data solutions. I am well-versed in software development
          practices, basic testing, and agile methodologies, ensuring the timely
          delivery of high-quality projects that adapt to changing requirements.
          Additionally, I possess knowledge of Spring Cloud and Microservices,
          further enhancing my capabilities in designing distributed and
          scalable systems. Moreover, I have experience in developing
          applications using Test-Driven Development (TDD), which emphasizes
          quality and maintainability in the development process.
        </span>
      </div>
    </>
  );
}
