import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgServicos = require('../imgs/detalhe_servico.png');


export default class CenaServicos extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={false}
                backgroundColor = '#19D1C8'
                />
                      
                <BarraNavegacao voltar={true} navigator={this.props.nav} corBarra='#19D1C8' />

                <View style={styles.nossosServicos}>
                    <Image source={imgServicos} />
                    <Text style={styles.txtnServicos} >Nossos Serviços:</Text>
                </View>
                
                <View style={styles.detalheServicos}>
                    <Text  style={styles.txtdetalheServicos}>- Consultoria</Text>
                    <Text  style={styles.txtdetalheServicos}>- Processos</Text>
                    <Text  style={styles.txtdetalheServicos}>- Acompanhamento de Produtos</Text>
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
    nossosServicos:{
        flexDirection: 'row',
        margin: 15,
    },
    txtnServicos:{
        color: '#19D1C8',
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25,
    },
    detalheServicos:{
        padding: 20,
        marginTop: 10
    },
    txtdetalheServicos:{
        fontSize: 18,
        marginLeft: 20
    }
   
    
  });