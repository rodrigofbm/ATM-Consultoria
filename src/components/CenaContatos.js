import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgContato = require('../imgs/detalhe_contato.png');


export default class CenaContatos extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={false}
                backgroundColor = '#61BD8C'
                />
                      
                <BarraNavegacao voltar={true} navigator={this.props.nav} corBarra='#61BD8C' />

                <View style={styles.nossosContato}>
                    <Image source={imgContato} />
                    <Text style={styles.txtnContato} >Contatos:</Text>
                </View>
                
                <View style={styles.detalheContato}>
                    <Text  style={styles.txtdetalheContato}>Tel: </Text>
                    <Text  style={styles.txtdetalheContato}>Cel: </Text>
                    <Text  style={styles.txtdetalheContato}>E-mail: </Text>
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
    nossosContato:{
        flexDirection: 'row',
        margin: 15,
    },
    txtnContato:{
        color: '#61BD8C',
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25,
    },
    detalheContato:{
        padding: 20,
        marginTop: 10
    },
    txtdetalheContato:{
        fontSize: 18,
        marginLeft: 20
    }
   
    
  });