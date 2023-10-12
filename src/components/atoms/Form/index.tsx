import { InputForm } from './Input'
import { Input } from '../Input'
import SelectForm from './SelectForm'
import TextAreaForm from './TextArea'
import { TextArea } from '../TextArea'
import { Select } from '../Select'

export const Form = {
  Input: {
    ...Input,
    Input: InputForm,
  },
  TextArea: {
    ...TextArea,
    TextArea: TextAreaForm,
  },
  Select: {
    ...Select,
    Select: SelectForm,
  },
}
