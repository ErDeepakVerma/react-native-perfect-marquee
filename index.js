import React, { useEffect, useState } from "react";
import {View, Dimensions, ScrollView } from "react-native";
import Animated, {Easing,useSharedValue,useAnimatedStyle,withRepeat,withTiming,} from "react-native-reanimated";
const { width } = Dimensions.get("window");
const Marquee = ({textColor,fontWeight,fontFamily,fontSize, autofill,marqueeDirection,marqueeSpeed,title,letterSpacing,backgroundColor,marginTop,marginBottom,padding }) => {
  const [textWidth, setTextWidth] = useState(0);
  const translateX = useSharedValue(0);
  useEffect(() => {
    if (textWidth > 0) {
     {autofill ?
      translateX.value =   marqueeDirection === "right" ? -(textWidth)+width:(width):
      translateX.value = -(Number(marqueeDirection === "right" ?textWidth+25:width))}
      translateX.value = withRepeat(
      withTiming( marqueeDirection === "left"&& !autofill ?textWidth:
                  marqueeDirection === "left"&& autofill ?textWidth:width,{ 
      duration:autofill ? textWidth/marqueeSpeed*820 : (width*1700)/marqueeSpeed,
      easing: Easing.linear }),
      -1, false );}}, [textWidth]);
  const widthComp= textWidth>width-50;
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: marqueeDirection === "right" ?translateX.value:-translateX.value }],
  }));
  const titleSpacing =title.split('').join(' '.repeat(Math.max(1/2, Math.floor(letterSpacing || 0 / 2))));
  const repeatedText = title || '';

  const addSpaces = (text, count) => {
  const spaces = ' '.repeat(Math.max(1/2, Math.floor(count / 2))); 
        return text.split('').join(spaces)+spaces+spaces; };
  
  const spaceCount = letterSpacing || 0; 
  const numberOfRepetitions = 900; 
  
  const loopedText = new Array(numberOfRepetitions).fill(addSpaces(repeatedText, spaceCount)).join(' ');
  return (
    <View
  
     style={{  backgroundColor:backgroundColor,
               marginTop:Number(marginTop),
               marginBottom: Number(marginBottom),
               paddingVertical:padding,}}>
       <ScrollView style={{ flexDirection: 'row' ,}}
                   contentContainerStyle={{width: !autofill ?(widthComp) ?null:'100%':null}}>
            <Animated.Text
            
                onLayout={(event) => {
                  const { width: measuredWidth } = event.nativeEvent.layout;
                                                   setTextWidth(measuredWidth); }}
                style={[animatedStyle, {
                        fontSize: fontSize || 32,
                        color: textColor,
                        marginRight: 16,
                        fontWeight:fontWeight,
                        fontFamily:fontFamily,
                        alignSelf:autofill || widthComp ?null:'flex-start'
                        }]}>
                 {autofill ? loopedText : titleSpacing}
             </Animated.Text>
       </ScrollView>
    </View>
  );
};

export default Marquee;