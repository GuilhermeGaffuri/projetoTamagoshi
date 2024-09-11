import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'; // Usar useRoute para acessar parâmetros da rota e useNavigation para navegação

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

const BichinhoDetalhes: React.FC = () => {
    const route = useRoute(); // Usar useRoute para acessar parâmetros da rota
    const navigation = useNavigation(); // Usar useNavigation para navegação
    const { id } = route.params as { id: string }; // Obter o ID do bichinho da URL

    const bichinho = data.find(b => b.id === id); // Encontrar o bichinho correspondente pelo ID

    const [hunger, setHunger] = useState<number>(bichinho ? parseInt(bichinho.hunger) : 0);
    const [sleep, setSleep] = useState<number>(bichinho ? parseInt(bichinho.sleep) : 0);
    const [fun, setFun] = useState<number>(bichinho ? parseInt(bichinho.fun) : 0);

    useEffect(() => {
        if (bichinho) {
            setHunger(parseInt(bichinho.hunger));
            setSleep(parseInt(bichinho.sleep));
            setFun(parseInt(bichinho.fun));
        }
    }, [bichinho]);

    if (!id || !bichinho) {
        return <Text>Bichinho não encontrado</Text>; // Caso o bichinho não seja encontrado ou ID esteja indefinido
    }

    const handleFeed = () => {
        setHunger(prevHunger => Math.min(prevHunger + 15, 100));
    };

    const handleSleep = () => {
        setSleep(prevSleep => Math.min(prevSleep + 15, 100));
    };

    const handleFun = () => {
        setFun(prevFun => Math.min(prevFun + 15, 100));
    };

    return (
        <View style={styles.container}>
            <View style={styles.bichinhoContainer}>
                <Image source={{ uri: bichinho.image }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{bichinho.name}</Text>
                    <Text>Atributos:</Text>
                    <Text>Fome: {hunger}%</Text>
                    <Text>Sono: {sleep}%</Text>
                    <Text>Divertimento: {fun}%</Text>
                    <Text>Status: {bichinho.status}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={handleFeed}>
                    <Text style={styles.buttonText}>Alimentar</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={handleSleep}>
                    <Text style={styles.buttonText}>Deixar Dormir</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={handleFun}>
                    <Text style={styles.buttonText}>Brincar</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#E3F2FD',
    },
    bichinhoContainer: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 16,
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 8,
        marginBottom: 16,
    },
    infoContainer: {
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#7B1FA2',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default BichinhoDetalhes;
