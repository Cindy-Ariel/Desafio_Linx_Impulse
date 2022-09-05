import { Botao } from '../Button'
import { Input } from '../Input'
import S from './inscricao.module.css'

export function Inscricao() {
  return (
    <div className={S.inscricao}>
      <Input nome="Seu nome:" />
      <Input nome="Email:" />
      <Input nome="CPF" />
      <Botao aoClicar={() => console.log('envidado')} nome="Enviar" />
    </div>

  )
}
