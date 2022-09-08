import {Pressable, StyleSheet} from "react-native";


const IconButton = ({onPress,children, style}) => {
    return (
        <Pressable
            style={({pressed}) => pressed
                ? [style, styles.pressed]
                : style
            }
            onPress={onPress}
        >
            {children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})

export default IconButton;