import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'

import CenaClientes from './src/components/CenaClientes';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

class app5 extends Component {
  render() {
    return (
      <Navigator
      initialRoute = {{id: 'a'}}
      renderScene = { (route, navigator) => {

        switch (route.id) {
          case 'a':
            //exebir a cenaPrincipal
            return(
              <CenaPrincipal nav={navigator} />
            );
          break;

          case 'clientes':
            //exibir cenaClientes
            return(
              <CenaClientes nav={navigator} />
            );
          break;

          case 'contatos':
            //exibir cenaContatos
            return(
              <CenaContatos nav={navigator} />
            );
          break;

          case 'empresa':
            //exibir cenaEmpresa
            return(
              <CenaEmpresa nav={navigator} />
            );
          break;

          case 'servicos':
            //exibir cenaServicos
            return(
              <CenaServicos nav={navigator} />
            );
          break;            
        }
      }}
     />
    );
  }
}


AppRegistry.registerComponent('app5', () => app5);
