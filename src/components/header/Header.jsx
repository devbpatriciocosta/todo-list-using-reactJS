import styles from './Header.module.css'

function Header () {
  return (
    <header className={styles.header}>
      <h6>Home</h6>
      <h6>Quem sou eu?</h6>
      <h6>Contatos</h6>
    </header>
  )
}

export default Header;