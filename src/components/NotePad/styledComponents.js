import styled from 'styled-components'

export const TextEditorContainer = styled.div`
  display:flex;
 
  justify-content:center;
  align-items:center;
  height:100vh;
  background-color:#25262c;
`

export const NoteImageContainer = styled.div`

  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  background-color:#1b1c22;
  padding:20px;
  width:70%;
  border-radius:20px;
  @media screen and (max-width:768px){
    flex-direction:column;
    width:90%;

  }
`
export const ImageContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  width:50%;
  padding:20px;
`

export const NotePadImage = styled.img`
  height:300px;
  @media screen and (max-width:768px){
    height:250px;
  }
`

export const Title = styled.h1`
  font-family:'Roboto';
  font-size:30px;
  font-weight:500;
  color:#fff;
`
export const NotePadContainer = styled.div`
  
  background-color:#25262c;
  width:50%;
  border:1px solid #cbd5e1;
  border-radius:10px;
  height:70vh;
  @media screen and (max-width:768px){
    height:40vh;
    width:80%;
  }
`
export const NoteEditOptions = styled.ul`
  display:flex;
  flex-direction:row;
  padding-left:20px;
`
export const HorizantalLine = styled.hr`
  color:#cbd5e1;
`

export const EditOption = styled.li`
  list-style-type:none;
  padding-right:30px;
  font-size:30px;
   
`
export const TextAreaInput = styled.textarea`
background-color: transparent;
  color: #f8fafc;
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  resize: none;  
  width: 100%;
  height: 100%;
  box-sizing: border-box; 
  text-decoration:${props => props.textUnderline};
  font-weight:${props => props.fontWeight};
  font-style:${props => props.fontStyle};
`

export const OptionButton = styled.button`
  border:none;
  outline:none;
  background-color:transparent;
  font-size:30px;
  cursor:pointer;
  color: ${props => props.color}
`
