import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={false}
                backgroundColor = '#B9C941'
                />
                      
                <BarraNavegacao voltar={true} navigator={this.props.nav} corBarra='#B9C941' />

                <View style={styles.nossosClientes}>
                    <Image source={detalheClientes} />
                    <Text style={styles.txtnClientes} >Nosso Clientes:</Text>
                </View>
                <View style={styles.detalheCliente}>
                    <Image source={cliente1} />
                    <Text  style={styles.txtdetalheCliente}>Cliente 1 </Text>
                </View>

                <View style={styles.detalheCliente}>
                    <Image source={cliente2} />
                    <Text style={styles.txtdetalheCliente}>Cliente 2 </Text>
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
    nossosClientes:{
        flexDirection: 'row',
        margin: 15,
    },
    txtnClientes:{
        color: '#B9C941',
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25,
    },
    detalheCliente:{
        padding: 20,
        marginTop: 10
    },
    txtdetalheCliente:{
        fontSize: 18,
        marginLeft: 20
    }
   
    
  });