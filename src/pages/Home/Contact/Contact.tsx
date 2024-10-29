import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactContainer}>
      <div className={`container ${styles.contact}`}>
        <h1 className={styles.title}>CONTATO</h1>
        <p className={styles.paragraph}>
          Fique a vontade para entrar em contato comigo quando quiser, seja para
          propostos de trabalho ou tirar alguma duvida !!
        </p>
        <div className={styles.contactsInfo}>
          <p>
            <span></span>mateusguimaraes717@gmail.com
          </p>
          <p>
            <span></span>+55 (38) 9 9947-9136
          </p>
          <p>
            <span></span>
            <a href="">@linkedin</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
