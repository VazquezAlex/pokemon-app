// Core imports.
import { Text } from "react-native";

// Local imports.
import { TitleProps } from "./Title.types";
import { titleStyles } from "./Title.styles";

/**
 * Component title.
 * 
 * @param { TitleProps } props - Properties for the component.
 * @returns { JSX.Element } - Title component.
 */
const Title = ({ text }: TitleProps): JSX.Element => {

    return (
        <Text style = { titleStyles.title }>{ text }</Text>
    );
}

export default Title;
