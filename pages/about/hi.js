import styles from "../../styles/hi.module.scss";
function Hi() {
  console.log();
  return (
    <>
      <h1 className={` `}>hello welcome</h1>
      <h1 className={` ${styles.body}`}>hello welcome</h1>
      <h1 className={` ${styles.body}`}>hello welcome</h1>
    </>
  );
}
export default Hi;
