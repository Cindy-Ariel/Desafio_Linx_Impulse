import { Botao } from '../Button'
import S from './header.module.css'

export function Header() {
  return (
    <header className={S.header}>
      <h3>uma seleção de produtos</h3>
      <h1>especial para você</h1>
      <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
      <nav>
        <ul className={S.listOption}>
          <li className={S.li}><Botao largura="160px" nome="Conheça a Linx" /></li>
          <li className={S.li}><Botao largura="160px" nome="Ajude o algorítimo" /></li>
          <li className={S.li}><Botao largura="160px" nome="Seus produtos" /></li>
          <li className={S.li}><Botao largura="160px" nome="Compartilhe" /></li>

        </ul>

      </nav>
    </header>

  )
}
