import React from 'react';
import { View, StyleSheet } from 'react-native';
import BotaoProps from './compone/BotaoProps';

const App = () => {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  const teste = () => {
    console.log('Segundo teste');
  };

  return(
    <View style={style.container}>
      <BotaoProps label="Clique aqui" corFundo="green" onPress={handlePress} />
      <BotaoProps label="Clique Agora" corFundo="pink" onPress={handlePress} />
      <BotaoProps label="sun" corFundo="yellow" onPress={handlePress} />
      <BotaoProps label="ocean" corFundo="lightblue" onPress={handlePress} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;