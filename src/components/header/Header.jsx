import styles from './Header.module.css'

function Header () {
  return (
    <header className={styles.header}>
      
        <a href='http://localhost:3000/'>Home</a>
        <a href='https://www.linkedin.com/in/brunopatricioc/' target="_blank">Quem sou eu?</a>
        <a href='https://wa.me/5585997275152' target="_blank">Contatos</a>
            
    </header>
  )
}

export default Header;