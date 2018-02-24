import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgEmpresa = require('../imgs/detalhe_empresa.png');


export default class CenaEmpresa extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={false}
                backgroundColor = '#EC7148'
                />
                      
                <BarraNavegacao voltar={true} navigator={this.props.nav} corBarra='#EC7148' />

                <View style={styles.nossaEmpresa}>
                    <Image source={imgEmpresa} />
                    <Text style={styles.txtnEmpresa} >A Empresa:</Text>
                </View>
                
                <View style={styles.detalheEmpresa}>
                    <Text  style={styles.txtdetalheEmpresa}>Mensagem aleatória</Text>
                </View>

                
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    nossaEmpresa:{
        flexDirection: 'row',
        margin: 15,
    },
    txtnEmpresa:{
        color: '#EC7148',
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25,
    },
    detalheEmpresa:{
        padding: 20,
        marginTop: 10
    },
    txtdetalheEmpresa:{
        fontSize: 18,
        marginLeft: 20
    }
   
    
  });