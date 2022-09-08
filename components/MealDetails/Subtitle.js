import {StyleSheet, Text, View} from "react-native";


const Subtitle = ({children}) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitleContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#e2b497',
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
    }
})

export default Subtitle;