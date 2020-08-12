# react-native-send-help-message
Componente envio de mensagem de ajuda

## Install
add in package.json:
```bash
"react-native-send-help-message": "git+https://libs:ofImhksJ@git.codificar.com.br/react-components/react-native-send-help-message",
```

execute the command:
```bash
$ yarn
or
$ npm install 
```

## Usage

```javascript
import React from 'react'
import SendMessageHelp from 'react-native-send-help-message'


  returnValue = (value) => {
    console.log('response request: ', value)
  }


  returnEmptyMessage = () => {
    console.log('Empty field description warning')
  }

 
 <SendMessageHelp
  providerId={6}
  providerToken='2y10aOUFzkBkWb64I67aLpgAmcOsFjuFVKUrGtmr8Eis0F026Fo3FK'
  route='https://dev3.motoristaprivado.com.br/api/v3/provider/request/help'
  title='Insira sua mensagem'
  textButtonSend='Enviar'
  buttonColor='#d8d8d8'
  returnRequest={this.returnValue.bind(this.responseRequest)}
  returnEmptyMessage={this.returnEmptyMessage.bind()}
  />


```



## Properties

| Prop  | Default  | Type | isRequired | Description
| :------------ |:---------------:| :---------------:|:---------------:|--
| providerId | '' | `number` | ✔️ | provider id number. |
| providerToken | '' | `string` | ✔️ | provider token. |
| requestId | '' | `number` | ✔️ | request id number. |
| route | '' | `string` | ✔️ | api route. |
| title | '' | `string` | ✔️ | Title text screen. |
| textButtonSend | 'Enviar' | `string` |  | The button text. |
| buttonColor | '#6EB986' | `string` |  | The button color. |
| returnRequest | '' | `callback function` |  | A function who return the api response. |
| returnEmptyMessage | '' | `callback function` |  | A function who return when message field is empty. |