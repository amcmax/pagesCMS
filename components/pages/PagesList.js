import styles from "../../styles/Home.module.css";
import PageLink from "./PageLink";

export default function PagesList({allPages}) {

  return (
    <div className={styles.grid}>
      {allPages.map((page) => {
        return <PageLink key={page._id} page={page} />;
      })}
    </div>
  );
}
