import {Text, View, StyleSheet, Image, ScrollView, Button} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import {useContext, useLayoutEffect} from "react";
import IconButton from "../components/IconButton";
import { Entypo } from '@expo/vector-icons';
import {FavoritesContext} from "../store/context/favorites";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../store/redux/favorites";

const MealInfoScreen = ({route, navigation}) => {
    const {id} = route.params;
    const meal = MEALS.find(meal => meal.id === id);

  //  const {ids, addFavorite, removeFavorite} = useContext(FavoritesContext);

   const ids =  useSelector((state) => state.favoriteMeals.ids);
   const dispatch = useDispatch();

    const {
        title,
        imageUrl,
        duration,
        complexity,
        affordability,
        ingredients,
        steps,
    } = meal;

    const isFavoriteMeal = ids.includes(id);

    const headerButtonPressHandler = () => {
        if(isFavoriteMeal) {
            dispatch(removeFavorite({ id }));
      //      removeFavorite(id);
            return;
        }
        dispatch(addFavorite({ id }));
     //   addFavorite(id);
    }

    const colorOfStar = isFavoriteMeal ? 'gold' : 'white';

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    style={styles.iconButton}
                    onPress={headerButtonPressHandler}
                >
                    <Entypo name="star" size={24} color={colorOfStar} />
                </IconButton>
            }
        })
    },[navigation, headerButtonPressHandler])

    return(
        <ScrollView style={styles.root}>
            <Image
                source={{uri: imageUrl}}
                style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
            <MealDetails
                affordability={affordability}
                complexity={complexity}
                duration={duration}
                textStyle={styles.detailText}
            />
            <View style={styles.detailsContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients:</Subtitle>
                    <List list={ingredients}/>
                    <Subtitle>Steps:</Subtitle>
                    <List list={steps}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: '700',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#fff',
    },
    detailText: {
        color: '#fff',
    },
    detailsContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%'
    },
    iconButton: {
        paddingHorizontal: 10
    }
})

export default MealInfoScreen;