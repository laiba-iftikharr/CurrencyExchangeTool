import React, {PropTypes} from "react";
import { View } from "react-native";

const Container = ({children}) => (
    <View style = {{flex: 1,
            alignitems: 'center',
            justifyContent: 'center',
            backgroundColor: '#78866B',}}>
        {children}
    </View>
);


// Container.propTypes = {
//     children: PropTypes.any,
// };

export default Container;