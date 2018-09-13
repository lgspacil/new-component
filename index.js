import React, {Component} from 'react';
import { isMobile } from 'mobile-device-detect';

if (isMobile){
    
    import { View, Text } from 'react-native';

    class CoolComponent extends Component {
        render(){
            return (
                <View>
                    <Text>I am a cool component in mobile!</Text>
                </View>
            )
        }
    }
    
    export default CoolComponent;

}else {
    class CoolComponent extends Component {
        render(){
            return (
                <div>
                    <p>I am a cool component in the web!</p>
                </div>
            )
        }
    }

    export default CoolComponent;
}

