import styles from "@/styles/component.module.scss";
const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1>{props.headerName}</h1>
    </div>
  );
};
export default Header;
