import { ButtonsView } from './View/ButtonsView'
import { LinkContainer } from './View/LinkContainer'
import { CheckboxContainer } from './View/CheckboxContainer'
import { ModalView } from './View/ModalContainer'
import { DatePickerView } from './View/DatePicker'
import { ToastComponent } from './View/ToastComponent'
import { InputView } from './View/InputView'
import { TextAreaView } from './View/TextArea'
import { SelectView } from './View/SelectView'
import { DropdownView } from './View/DropdownView'
import { ColorPickerView } from './View/ColorPickerView'
import { IconView } from './View/IconView'
import './App.css'

function App() {

  return (
    <>
      <ButtonsView />
      <LinkContainer />
      <CheckboxContainer />
      <ModalView />
      <DatePickerView />
      <ToastComponent />
      <InputView />
      <TextAreaView />
      <SelectView />
      <DropdownView />
      <ColorPickerView />
      <IconView />
    </>
  )
}

export default App
