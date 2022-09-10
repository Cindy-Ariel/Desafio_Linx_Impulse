import { Input } from '../Input'
import S from './compartilhe.module.css'

export function Compartilhe() {
  return (
    <div className={S.box_compartilhe}>
      <h1 className={S.tituto_compartilha}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</h1>

      <div className={S.input_compartilha}>
        <div className={S.input}>
          <Input nome="Nome do seu amigo:" />
        </div>
        <div className={S.input}>
          <Input nome="E-mail" />
        </div>

      </div>

    </div>

  )
}
