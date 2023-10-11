import { InputForm } from './Input'
import { Input } from '../Input'
import SelectForm from './SelectForm'
import TextAreaForm from './TextArea'

export const Form = {
  Input: {
    ...Input,
    Input: InputForm,
  },
  TextArea: TextAreaForm,
  Select: SelectForm,
}
