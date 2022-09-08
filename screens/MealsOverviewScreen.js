import { MEALS, CATEGORIES } from "../data/dummy-data";
import {useLayoutEffect} from "react";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({route, navigation}) => { //{navigation, route} - зарегестрирован  в <Stack.Screen />

    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(cat => cat.id === catId).title;
        //обязательно в useLayoutEffect, иначе работает некорректно
        //useLayoutEffect - избегаем 'дёрганья'
        navigation.setOptions({
            title: categoryTitle,
        })
    },[catId, navigation])


    return <MealsList meals={displayedMeals}/>
}

export default MealsOverviewScreen;