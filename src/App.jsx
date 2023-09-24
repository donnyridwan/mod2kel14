import Card from './card'
import './App.css'
import { styled } from 'styled-components'
import TextInput from './Textinput';

const CardContainer = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 10px;
  padding: 10px;
`;
function App() {
  return (
    <>
      <h1>Klik buat pindah ke ig</h1>
      <CardContainer>
        <Card Nama="Donny Ridwan S" 
              Nim="21120120130083" 
              Email="donnyr65@gmail.com" 
              link="https://www.instagram.com/donny_ridwan/"
        />
        <Card Nama="Aggy Achya Fadhlika " 
              Nim="21120120140119" 
              Email="aggyachya@gmail.com" 
              link="https://www.instagram.com/aggyachya/"
        />
        <Card Nama="Lintang Fadhillah Haikal " 
              Nim="21120120140121" 
              Email="lintangfadhillahhaikal7588@gmail.com" 
              link="https://www.instagram.com/teng_fdh/"
        />
        <Card Nama="Fitriawan Arya Nugraha" 
              Nim="21120120140153" 
              Email="nugrahaaryaa17@gmail.com" 
              link="https://www.instagram.com/aryanug_17/"
        />
      </CardContainer>
      <TextInput/>
    </>
  )
}

export default App
