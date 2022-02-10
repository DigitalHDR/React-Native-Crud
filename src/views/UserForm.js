// src/views/userform.js
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

export default ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {})

  return (
    <View style={style.form}>

      <Text>Nome</Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({ ...user, name })} //! atualiza o nome dentro do usuario
        placeholder='Informe o Nome'
        value={user.name}
      />

      <Text>Email</Text>
      <TextInput
        style={style.input}
        onChangeText={email => setUser({ ...user, email })} //! atualiza o nome dentro do usuario
        placeholder='Informe o email'
        value={user.email}
      />

      <Text>Url</Text>
      <TextInput
        style={style.input}
        onChangeText={url => setUser({ ...user, url })} //! atualiza o nome dentro do usuario
        placeholder='Informe a Url do avatar'
        value={user.url}
      />

      <Button 
        title="salvar"
        onPress={() => {
          navigation.goBack()
        }}
      />

    </View>
  )
}

const style = StyleSheet.create({
  form: {
    padding: 12
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  }
})