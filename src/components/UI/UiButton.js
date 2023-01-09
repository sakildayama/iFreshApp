import { StyleSheet, ActivityIndicator, View } from 'react-native';
import React, { memo } from 'react';
import Paragraph from './Paragraph';
import colors from '../../constants/colors';
import Clickable from '../HOC/Clickable';

const UiButton = ({
    text = 'Press Me',
    onPress = () => { },
    loading = false,
    disable = false,
    backgroundColor = colors.primary,
    style = {},
    textColor = colors.white,
    txtSize = 16
}) => {
    const buttonDisable = disable || loading;
    const buttonStyle = [
        styles.button,
        { backgroundColor },
        style,
    ];
    return (
        <View style={{ opacity: disable ? 0.7 : 1 }}>
            <Clickable onPress={onPress} disable={buttonDisable} style={buttonStyle}>
                {
                    loading ?
                        <ActivityIndicator color={textColor} size="small" />
                        :
                        <Paragraph size={txtSize} type="medium" color={textColor}>
                            {text}
                        </Paragraph>
                }
            </Clickable>
        </View>

    );
};

export default memo(UiButton);

const styles = StyleSheet.create({
    button: {
        padding: 10,
        // borderRadius:12,
        width: '100%',
        justifyContent: 'center',
       alignItems:"center",
    }
});

