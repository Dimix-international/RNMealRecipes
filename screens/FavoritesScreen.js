import {StyleSheet, Text, View} from "react-native";
import {useContext} from "react";
import {FavoritesContext} from "../store/context/favorites";
import {MEALS} from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import {useSelector} from "react-redux";


const FavoritesScreen = () => {
    //const {ids} = useContext(FavoritesContext);
    const ids =  useSelector((state) => state.favoriteMeals.ids);

    //ids - массив id
    //MEALS - массив объектов
    //собираем массив объектов с id которые есть в массиве ids
    const favoriteMeals = MEALS.filter(meal => ids.includes(meal.id));

    if(!favoriteMeals.length) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet!</Text>
            </View>
        )
    }

    return <MealsList meals={favoriteMeals}/>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
    }
})

export default FavoritesScreen;