import styles from './Subtitle.module.css'

function Subtitle ({ text }) {
  return (
    <h4 className={styles.subtitle}>{text}</h4>
  )
}

export default Subtitle



/*
function Subtitle ({ text }) {
  return (
    <h4 className={styles.subtitle}>{ text }</h4>
  )
}

*/
