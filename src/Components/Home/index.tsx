import styles from './home.module.scss';


export default function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.banner} >
        <img src="https://barbearia-alura00.netlify.app/banner.jpg" alt="banner" />
      </div>

      <main className={styles.main} >
        <h1>Sobre a Barbearia Alura</h1>
        <img src="https://barbearia-alura00.netlify.app/utensilios.jpg" alt="" />
        <p>Localizada no coração da cidade a <strong>Barbearia Alura</strong> traz para o mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.</p>

        <p id="missao"><em>Nossa missão é: <strong>"Proporcionar auto-estima e qualidade de vida aos clientes"</strong>.</em></p>

        <p>Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.</p>

        <section className={styles.map}>
          <h1>Nosso estabelecimento</h1>
          <p>Nosso estabelecimento está localizado no coração da cidade</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233760.81246579476!2d-46.97731377053101!3d-23.729090023490304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCaelum%20-%20Escola%20de%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1644856735669!5m2!1spt-BR!2sbr"
            width="100%" height="300" loading="lazy"></iframe>
        </section>

        <section className={styles.benefits}>
          <h1>Benefícios</h1>
          <ul>
            <li>Atentedimento aos clientes</li>
            <li>Espaço diferenciado</li>
            <li>Localização</li>
            <li>Profissionais Qualificados</li>
            <li>Pontualidade</li>
            <li>Limpeza</li>
          </ul>
          <img src="https://barbearia-alura00.netlify.app/beneficios.jpg" alt="" />

          <div className={styles.video}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/wcVVXUV0YUY" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
        </section>

      </main>

    </div >


  )
}