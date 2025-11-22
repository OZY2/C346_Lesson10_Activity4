import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const foodData = [
    {
        title: "Chinese Food",
        icon: "spoon",
        txtcolor: "#D32F2F",
        bgcolor: "#FFEBEE",
        data: [
            {
                name: 'Kung Pao Chicken',
                description: 'Spicy stir-fried chicken with peanuts',
                price: '$12.99',
                image: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/10/Kung-Pao-Chicken-square-FS-39-new.jpg'
            },
            {
                name: 'Dim Sum Platter',
                description: 'Assorted steamed dumplings',
                price: '$15.99',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzphsvSOyjjeqR0HmyZK8_JZS7LefC1f08Bw&s'
            },
        ],
    },
    {
        title: "Muslim Food",
        icon: "cutlery",
        txtcolor: "#388E3C",
        bgcolor: "#E8F5E9",
        data: [
            {
                name: 'Biryani Rice',
                description: 'Fragrant rice with spices and meat',
                price: '$14.99',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeq6gAFeIYlFYwQUkUhS_4Yi6t3TwrqQ6B-g&s'
            },
            {
                name: 'Chicken Kebab',
                description: 'Grilled marinated chicken skewers',
                price: '$11.99',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR905UC3H2irnTd3a8Ag3e34A8evFHeYQUjA&s'
            },
        ],
    },
    {
        title: "Thai Food",
        icon: "leaf",
        txtcolor: "#7B1FA2",
        bgcolor: "#F3E5F5",
        data: [
            {
                name: 'Pad Thai',
                description: 'Stir-fried rice noodles',
                price: '$13.99',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklJyKrjBQhtn0NNbEiKNHQ9ndKi-qMKdFWw&s'
            },
            {
                name: 'Green Curry',
                description: 'Spicy coconut milk curry',
                price: '$16.99',
                image: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/06/Thai-Green-Curry-square-FS.jpg'
            },
        ],
    },
];

const App = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemTextContainer}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodDescription}>{item.description}</Text>
                <Text style={styles.foodPrice}>{item.price}</Text>
            </View>
            <Image
                source={{ uri: item.image }}
                style={styles.foodImage}
            />
        </TouchableOpacity>
    );

    const renderSectionHeader = ({ section }) => (
        <View style={[styles.sectionHeader, { backgroundColor: section.bgcolor }]}>
            <FontAwesome name={section.icon} size={20} color={section.txtcolor} />
            <Text style={[styles.sectionTitle, { color: section.txtcolor, marginLeft: 10 }]}>
                {section.title}
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Food Explorer</Text>
                <Text style={styles.headerSubtitle}>Discover delicious cuisines</Text>
            </View>

            <SectionList
                sections={foodData}
                keyExtractor={(item, index) => item.name + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                style={styles.list}
                showsVerticalScrollIndicator={false}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingTop: 50,
    },
    header: {
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#666',
    },
    list: {
        flex: 1,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#e0e0e0',
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    itemTextContainer: {
        flex: 1,
        marginRight: 15,
    },
    foodName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    foodDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    foodPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    foodImage: {
        width: 100,
        height: 80,
        borderRadius: 8,
        resizeMode: 'cover',
    },
});

export default App;
