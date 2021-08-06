import styles from "../styles/Home.module.css";

export default function PageLink({ page }) {
  return (
    <a
      key={page._id}
      href={`/${encodeURIComponent(page.url)}`}
      className={styles.card}
    >
      <img src={page?.screenImage?.publicUrlTransformed} />
      <h3>{page.name}</h3>
    </a>
  );
}
