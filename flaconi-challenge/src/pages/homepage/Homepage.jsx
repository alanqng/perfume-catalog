import React from 'react';
import {Item} from "../../components/item/Item";
import {HomepageDiv} from "./homepage.styles";

const Homepage = () => {
    return (
        <HomepageDiv>
            <div className={'items'}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>

            </div>

        </HomepageDiv>
    );
}

export default Homepage;
