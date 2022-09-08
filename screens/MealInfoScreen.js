import {Text, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useLayoutEffect} from "react";


const MealInfo = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const {title} = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title
        })
    },[route])

    return(
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default MealInfo;