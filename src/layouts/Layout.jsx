import styles from "../layouts/Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="#">Botostart</a> | React.js Full Course
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>
          Developed by{" "}
          <a
            href="https://github.com/parsamehrpooshan"
            target="_blank"
            rel="noreferrer"
          >
            Parsa Mehrpooshan
          </a>{" "}
          with ❤️
        </p>
      </footer>
    </>
  );
}

export default Layout;
