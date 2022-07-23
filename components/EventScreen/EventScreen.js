import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  Button as ButtonPaper,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  TextInput,
  TextInputMask,
} from 'react-native-paper';
import uuid from 'react-native-uuid';

import Header from '../Header/header';
import Evento from './Event';
import API from './APIEvento';
import Footer from '../Footer/footer';
import Constants from 'expo-constants';

import foto from '../assets/assetImgEvento.jpg';

import * as APIEvento from './APIEvento';

export default () => {
  const [visible, setVisible] = useState(false);
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    carregarEventos();
  }, []);

  async function carregarEventos() {
    const dados = await APIEvento.buscarTodas();
    setEventos(dados);
  }

  const renderItem = ({ item }) => {
    const { id, nome, local, data, hora } = item;

    return (
      <TouchableOpacity
        onPress={() => {
          setEventos(item);
          setVisible(true);
        }}>
        <Evento
          foto={foto}
          nome={item.nome}
          hora={item.hora}
          local={item.local}
          data={item.data}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Provider>

        <FlatList data={eventos} renderItem={renderItem} />

        <Portal>
          <Dialog visible={visible} onDismiss={() => setVisible(false)}>
            <Dialog.Title>{}</Dialog.Title>

            <Dialog.Content>
              <Evento
                foto={foto}
                nome={eventos.nome}
                hora={eventos.hora}
                local={eventos.local}
                data={eventos.data}
              />
            </Dialog.Content>

            <Dialog.Actions>
              <ButtonPaper onPress={() => setVisible(true)}>
                CANCELAR
              </ButtonPaper>
              <ButtonPaper>COMPRAR</ButtonPaper>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>

    </View>
  );
};

///////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor:'white'
  },
});
