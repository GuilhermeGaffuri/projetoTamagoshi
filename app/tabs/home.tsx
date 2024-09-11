import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router'; // Importar useRouter se estiver usando expo-router

// Definição do tipo para os dados dos bichinhos
type Pet = {
    id: string;
    name: string;
    hunger: string;
    sleep: string;
    fun: string;
    status: string;
    image: string;
};

// Dados fictícios dos bichinhos
const data: Pet[] = [
    {
        id: '1',
        name: 'Bichinho 1',
        hunger: '50%',
        sleep: '30%',
        fun: '70%',
        status: 'Feliz',
        image: 'https://example.com/character1.png',
    },
    {
        id: '2',
        name: 'Bichinho 2',
        hunger: '20%',
        sleep: '60%',
        fun: '50%',
        status: 'Cansado',
        image: 'https://example.com/character2.png',
    },
    {
        id: '3',
        name: 'Bichinho 3',
        hunger: '80%',
        sleep: '40%',
        fun: '30%',
        status: 'Triste',
        image: 'https://example.com/character3.png',
    },
    {
        id: '4',
        name: 'Bichinho 4',
        hunger: '10%',
        sleep: '90%',
        fun: '80%',
        status: 'Animado',
        image: 'https://example.com/character4.png',
    },
];

const PetList: React.FC = () => {
    const router = useRouter(); // Usar useRouter para navegação

    const renderItem = ({ item }: { item: Pet }) => (
        <Pressable
            style={styles.item}
            onPress={() => router.push({ pathname: './BichinhoDetalhes', params: { id: item.id } })} // Navegar para a tela do bichinho com o ID como parâmetro
        >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text>Atributos:</Text>
                <Text>Fome: {item.hunger}</Text>
                <Text>Sono: {item.sleep}</Text>
                <Text>Divertimento: {item.fun}</Text>
                <Text>Status: {item.status}</Text>
            </View>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Pressable
                style={styles.button}
                onPress={() => router.push('./cadastrar')} // Ajuste o caminho conforme necessário
            >
                <Text style={styles.buttonText}>Cadastrar Bichinho</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#E3F2FD',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    button: {
        backgroundColor: '#7B1FA2',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 25,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        marginTop: 20,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default PetList;
