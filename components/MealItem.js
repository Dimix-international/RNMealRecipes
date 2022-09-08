import {Text, View, Pressable, StyleSheet, Image, Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({id, title, imageUrl, affordability, complexity, duration}) => {
    const navigation = useNavigation();

    const selectMealHandler = () => {
        navigation.navigate('MealInfo', {
            id,
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => (
                    pressed ? styles.buttonPressed : null
                )}
                onPress={selectMealHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                         style={styles.image}
                         source={{uri: imageUrl}}
                        />
                        <Text style={styles.title}>{title}</Text>
                     </View>
                    <MealDetails
                        affordability={affordability}
                        complexity={complexity}
                        duration={duration}
                    />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 20,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 4,
        shadowOpacity: 0.25,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        //закругляем уголки сверху картинки для ios
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        //если картинка url обязательно указываем width и height
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: '700',
        textAlign: "center",
        fontSize: 18,
        padding: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    }
});

export default MealItem;