import { Botao } from '../Button'
import S from './header.module.css'

export function Header() {
  return (
    <header className={S.header}>
      <h2>uma seleção de produtos</h2>
      <h1>especial para você</h1>
      <h3>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</h3>
      <nav>
        <ul className={S.listOption}>
          <li><Botao nome="Conheça a Linx" /></li>
          <li><Botao nome="Ajude o algorítimo" /></li>
          <li><Botao nome="Seus produtos" /></li>
          <li><Botao nome="Compartilhe" /></li>

        </ul>

      </nav>
    </header>

  )
}
