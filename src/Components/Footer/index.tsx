import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="https://barbearia-alura00.netlify.app/logo-branco.png" alt="Logo da Barbearia Alura" />
      <p >&copy;Copyright Barbearia Alura - 2022</p>
    </footer>
  )
}