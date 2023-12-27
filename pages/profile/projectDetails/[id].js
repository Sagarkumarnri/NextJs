import styles from "@/styles/Home.module.css";
import { useRouter } from "next/navigation";
import { useRouter as useNextRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { projects } from "@/public/Data/data";

const ProjectDetails = () => {
  const router = useRouter();
  const nextRouter = useNextRouter();
  const id = nextRouter?.query?.id

  return (
    <><ArrowBackIcon
      style={{ cursor: "pointer", paddingBottom: '15px' }}
      onClick={() => router.push("/profile/projectsList")} />
      <div className={styles.projectDetails}>
        <div className={styles.projectName}>{projects[id]?.projectName}</div>
        <div className={styles.projectData}>
          <div className={styles.countClient}>
            <span style={{ height: "50%", paddingBottom: '5px' }}>
              Start Date:
              <span style={{ paddingLeft: "10px", paddingBottom: '5px' }}>
                {projects[id]?.startDate}
              </span>
            </span>
            <span style={{ height: "50%", paddingBottom: '5px' }}>
              End Date :{" "}
              <span style={{ paddingLeft: "10px", paddingBottom: '5px' }}>
                {projects[id]?.endDate}
              </span>
            </span>
          </div>
          <div className={styles.countClient}>
            <span style={{ height: "50%", paddingBottom: '5px' }}>
              Team Size:{" "}
              <span style={{ paddingLeft: "10px", paddingBottom: '5px' }}>
                {projects[id]?.teamSize}
              </span>
            </span>
            <span style={{ height: "50%", paddingBottom: '5px' }}>
              Client:{" "}
              <span style={{ paddingLeft: "10px", paddingBottom: '5px' }}>
                {projects[id]?.client}
              </span>
            </span>
          </div>
        </div>
        <div className={styles.projectSummary}>
          <div className={styles.rolesAndResponsibillitesHeader}>
            Project Summary
          </div>
          <span style={{}}>{projects[id]?.summary}</span>
        </div>
        <div className={styles.rolesAndResponsibillites}>
          <div className={styles.rolesAndResponsibillitesHeader}>
            Roles and Responsibilities
          </div>

          <span style={{}}>
            {projects[id]?.rolesAndResponsibillities}
          </span>
        </div>
      </div>
    </>
  );
};
export default ProjectDetails;
