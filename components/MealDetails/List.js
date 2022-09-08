import {StyleSheet, Text, View} from "react-native";


const List = ({list}) => {
    return list.map(item => (
        <View
            key={item}
            style={styles.listItem}
        >
            <Text style={styles.itemText}>{item}</Text>
        </View>
    ))
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
        overflow: 'hidden',
    },
    itemText: {
        color: '#351401',
        textAlign: 'center',
    }
})

export default List;