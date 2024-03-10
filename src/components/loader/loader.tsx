import styles from './loader.module.scss'

function Loader() {

  return (
    <div className={styles.loader}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export { Loader }
