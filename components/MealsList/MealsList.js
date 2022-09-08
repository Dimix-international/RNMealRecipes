import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "../MealItem";

const MealsList = ({meals}) => {

    const renderMealItem = (itemData) => {
        const {
            title,
            imageUrl,
            affordability,
            complexity,
            duration,
            id,
        } = itemData.item;

        return <MealItem
            id={id}
            title={title}
            imageUrl={imageUrl}
            affordability={affordability}
            complexity={complexity}
            duration={duration}
        />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={meals}
                renderItem={renderMealItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
})

export default MealsList;