import React from "react";
import { View, Text, Image } from 'react-native';

import {logostyles} from "./logostyles";

const Logo = () => (
    <View style = {logostyles.container}>
        <Image style = {logostyles.imageStyle}source={require('../assets/logo-img.png')}>
            
        </Image>

        <Text style = {logostyles.text}>Curv</Text>
    </View>
);

export default Logo;