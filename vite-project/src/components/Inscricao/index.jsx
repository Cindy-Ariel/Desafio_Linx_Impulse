import { Botao } from '../Button'
import { Input } from '../Input'
import S from './inscricao.module.css'

export function Inscricao() {
  return (
    <div className={S.inscricao}>
      <Input nome="Seu nome:" />
      <Input nome="Email:" />
      <Input nome="CPF" />

      <div className={S.inputRadios}>

        <div>
          <input type="radio" name="webmaster" value="Masculino" />
          <label htmlFor="Masculino"> Masculino</label>
        </div>

        <div>
          <input type="radio" name="webmaster" value="Feminino" />
          <label htmlFor="Feminino">Feminino </label>
        </div>

      </div>

      <Botao nome="Enviar" />
    </div>

  )
}
