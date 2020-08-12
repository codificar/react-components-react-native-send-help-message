import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import axios from 'axios'


class SendMessageHelp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            providerId: this.props.providerId,
            providerToken: this.props.providerToken,
            requestId: this.props.requestId,
            route: this.props.route,
            title: this.props.title,
            textButtonSend: this.props.textButtonSend ? this.props.textButtonSend : 'Enviar',
            buttonColor: this.props.buttonColor ? this.props.buttonColor : '#6EB986',
            note: '',
            isLoading: false
        }
    }


    sendNote() {
        if (this.state.note) {
            this.setState({ isLoading: true })
            let responseRequest = ''
            axios.post(this.state.route, {
                id: this.state.providerId,
                token: this.state.providerToken,
                request_id: this.state.requestId,
                note: this.state.note
            }).then(response => {
                this.setState({ isLoading: false })
                if (response.data.success) {
                    responseRequest = response.data
                    this.props.returnRequest(responseRequest)
                    this.setState({ note: '' })
                } else {
                    responseRequest = response.data
                    this.props.returnRequest(responseRequest)
                }
            }).catch(error => {
                this.setState({ isLoading: false })
                responseRequest = error
                this.props.returnRequest(responseRequest)
            })
        } else {
            this.props.returnEmptyMessage()
        }
    }


    render() {
        const buttonStyle = StyleSheet.create({
            btnNote: {
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 1,
                marginTop: 30,
                elevation: 5,
                borderRadius: 5,
                overflow: "hidden",
                width: '50%',
                alignSelf: 'center',
                alignItems: "center",
                height: 40,
                justifyContent: 'center',
                backgroundColor: this.state.buttonColor
            }
        })
        return (
            <View style={styles.container}>
                <Text style={styles.txtHelpTitle}>{this.state.title}</Text>
                <TextInput
                    style={styles.inputNote}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={text => this.setState({ note: text })}
                    value={this.state.note}
                />
                {this.state.isLoading ? (
                    <View style={buttonStyle.btnNote} onPress={() => this.sendNote()}>
                        <ActivityIndicator color='#ffffff' size='large' />
                    </View>
                ) : (
                        <TouchableOpacity style={buttonStyle.btnNote} onPress={() => this.sendNote()}>
                            <Text style={styles.txtSend}>{this.state.textButtonSend}</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    txtHelpTitle: {
        fontFamily: 'Roboto',
        color: '#2E2E2E',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    txtSend: {
        fontFamily: 'Roboto',
        color: '#ffffff',
        fontWeight: 'bold'
    },
    inputNote: {
        backgroundColor: '#d3d3d3',
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 5,
        textAlignVertical: 'top'
    },
})

export default SendMessageHelp