import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";


const CategoriesScreen = ({navigation}) => {

    const renderCategoryItem = (itemData) => {
        const {title, color, id} = itemData.item;

        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                //parent object
                categoryId: id,
            });
        }
        return (
            <CategoryGridTitle
                title={title}
                color={color}
                onPress={pressHandler}
            />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
        />

    )
}

export default CategoriesScreen;