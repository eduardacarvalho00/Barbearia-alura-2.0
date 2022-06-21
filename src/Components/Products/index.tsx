import styles from './products.module.scss';

export default function Products() {
  return (
    <div className={styles.Container}>
      <ul>
        <li>
          <h2>Cabelo</h2>
          <img src="https://barbearia-alura00.netlify.app/cabelo.jpg" alt="cabelo" />
          <p >Na tesoura ou na máquina, como o cliente preferir</p>
          <p><strong>R$25,00</strong></p>
        </li>
        <li>
          <h2>Barba</h2>
          <img src="https://barbearia-alura00.netlify.app/barba.jpg" alt="barba" />
          <p>Corte e desenho profissional de barba</p>
          <p><strong>R$18,00</strong></p>
        </li>
        <li>
          <h2>Cabelo+Barba</h2>
          <img src="https://barbearia-alura00.netlify.app/cabelo+barba.jpg" alt="cabelo+barba" />
          <p >Pacote completo de cabelo e <br /> barba</p>
          <p><strong>R$23,00</strong></p>
        </li>
      </ul>
    </div>
  )
}