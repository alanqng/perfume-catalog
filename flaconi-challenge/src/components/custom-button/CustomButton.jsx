import React from "react";
import {ButtonStyled} from "./custon-botton.styles";

export const CustomButton = ({title, ...otherProps}) => {

    return (
        <ButtonStyled {...otherProps}>
            {title}
        </ButtonStyled>
    )
}
