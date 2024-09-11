import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, Image, FlatList, Platform } from 'react-native';

// Definição do tipo para as opções de imagens
type ImageOption = {
    id: string;
    uri: string;
};

// Opções de imagens para seleção
const imageOptions: ImageOption[] = [
    { id: '1', uri: 'https://example.com/character1.png' },
    { id: '2', uri: 'https://example.com/character2.png' },
    { id: '3', uri: 'https://example.com/character3.png' },
    { id: '4', uri: 'https://example.com/character4.png' },
];

const Cadastrar: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [selectedImage, setSelectedImage] = useState<string>('');

    const handleRegister = () => {
        if (!name || !selectedImage) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        Alert.alert('Sucesso', `Bichinho ${name} cadastrado!`);
        setName('');
        setSelectedImage('');
    };

    const selectImage = (uri: string) => {
        setSelectedImage(uri);
    };

    const renderImageOption = ({ item }: { item: ImageOption }) => (
        <Pressable
            onPress={() => selectImage(item.uri)}
            style={[styles.imageButton, selectedImage === item.uri && styles.selectedImageButton]}
        >
            <Image source={{ uri: item.uri }} style={styles.imageOption} />
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Bichinho</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do Bichinho"
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.label}>Escolha uma Imagem:</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={Platform.OS === 'web'}
                data={imageOptions}
                contentContainerStyle={styles.listContainer}
                renderItem={renderImageOption}
                keyExtractor={(item) => item.id}
            />
            <TextInput
                style={[styles.input, styles.hidden]}
                placeholder="URL da Imagem"
                value={selectedImage}
                onChangeText={setSelectedImage}
                editable={false}
            />
            <Pressable style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#424242',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#7B1FA2',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#424242',
        marginBottom: 10,
        textAlign: 'center',
    },
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    imageButton: {
        borderColor: '#7B1FA2',
        borderWidth: 2,
        borderRadius: 8,
        padding: 4,
        marginHorizontal: 8,
    },
    selectedImageButton: {
        borderColor: '#4CAF50', // Cor para indicar a seleção
    },
    imageOption: {
        width: 100,
        height: 100,
    },
    button: {
        backgroundColor: '#7B1FA2',
        paddingVertical: 14,
        borderRadius: 25,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        marginTop: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    hidden: {
        height: 0,
        borderWidth: 0,
        marginBottom: 0,
    },
});

export default Cadastrar;
