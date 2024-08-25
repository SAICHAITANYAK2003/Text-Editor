import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  TextEditorContainer,
  NotePadContainer,
  NoteImageContainer,
  ImageContainer,
  NotePadImage,
  Title,
  NoteEditOptions,
  EditOption,
  TextAreaInput,
  HorizantalLine,
  OptionButton,
} from './styledComponents'

class NotePad extends Component {
  state = {
    isTexttoBold: false,
    isTexttoItalic: false,
    isTextUnderline: false,
  }
  onChangetoBold = () => {
    this.setState(prevState => ({isTexttoBold: !prevState.isTexttoBold}))
  }
  onChangeItalic = () => {
    this.setState(prevState => ({isTexttoItalic: !prevState.isTexttoItalic}))
  }
  onChangeUnderline = () => {
    this.setState(prevState => ({isTextUnderline: !prevState.isTextUnderline}))
  }

  render() {
    const {isTextUnderline, isTexttoBold, isTexttoItalic} = this.state

    const color = isTexttoBold ? '#faff00' : '#f1f5f9'

    const italicBtnColor = isTexttoItalic ? '#faff00' : '#f1f5f9'

    const underlineBtnColor = isTextUnderline ? '#faff00' : '#f1f5f9'

    const fontWeight = isTexttoBold ? 'bold' : 'normal'

    const fontStyle = isTexttoItalic ? 'italic' : 'normal'

    const textUnderline = isTextUnderline ? 'underline' : 'normal'

    return (
      <TextEditorContainer>
        <NoteImageContainer>
          <ImageContainer>
            <Title>Text Editor</Title>
            <NotePadImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <NotePadContainer>
            <NoteEditOptions>
              <EditOption>
                <OptionButton
                  color={color}
                  type="button"
                  onClick={this.onChangetoBold}
                  data-testid="bold"
                >
                  <VscBold />
                </OptionButton>
              </EditOption>
              <EditOption>
                <OptionButton
                  color={italicBtnColor}
                  type="button"
                  onClick={this.onChangeItalic}
                  data-testid="italic"
                >
                  <GoItalic />
                </OptionButton>
              </EditOption>
              <EditOption>
                <OptionButton
                  color={underlineBtnColor}
                  type="button"
                  onClick={this.onChangeUnderline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline />
                </OptionButton>
              </EditOption>
            </NoteEditOptions>
            <HorizantalLine />
            <TextAreaInput
              fontStyle={fontStyle}
              fontWeight={fontWeight}
              textUnderline={textUnderline}
            />
          </NotePadContainer>
        </NoteImageContainer>
      </TextEditorContainer>
    )
  }
}

export default NotePad
