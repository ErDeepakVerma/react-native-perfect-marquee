<h2 align="center">React Native Perfect Marquee</h2>

 
  React Native Perfect Marquee is a lightweightReact Native component that harnesses silky smooth marquees
  for both ANDROIDos and Ios.Also RTL compatible (I18nManager)

  This React Native Perfect Marquee component allows text to scroll smoothly in both directions (left to right or right to left). It supports both a   single title and looped title, offering a seamless, customizable animation with various dynamic properties.
<br>

 <h4> Latest Update </h4>
 <br>
 numOfRepetitions=120 default (If render is not an issue manually set to 400 to 800 as per requirement). 
 Default is sufficient.

 RTL compatible (I18nManager) 

 <h4> Any Issues </h4>
 Please let me know
 <br>
  Email me on- deepak142verma@gmail.com 
  <br>
  Message me on Instagram- m_deepakverma (Quick response)
  <br>
  Link-- https://www.instagram.com/m_deepakverma/profilecard/?igsh=MXBpYjdua2FwbDgzaw==
<br>

<h3 align="left">Installation </h3>
<h5>npm i react-native-perfect-marquee</h5>
<br>

# Usage
<br>

 <h4>First Configure</h4>
  react-native-reanimated


  <h4>Step 1: Install the package</h4>
  npm install react-native-reanimated

  <h4>Step 2: Add Reanimated's babel plugin</h4>
   module.exports = {
    presets: [
      ... // don't add it here :
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };

  <h4>Step 3: Clear Metro bundler cache (recommended)</h4>
  npm start -- --reset-cache


  <h4>Did'nt worked</h4>
   Try restart your whole project


  <h4>Still not working</h4>
  Check official documentation of react-native-reanimated on below link
  https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/
<br>


<h5>To use the component, first import Marquee into your file:</h5>
Reload metro after making changes or restart app
    import Marquees from  "react-native-perfect-marquee";
    Then wrap the <Marquees> tags around any component or text you'd like to slide.
      <View style={{flex:1}}>    //always wrap it with outer container for work perfectly
      <Marquees 
          textColor={'red'}
          fontWeight={'900'}
          fontFamily={Rubik}
          fontSize={32}
           autofill ={true} // or just write autofill=If true Max words 60 include spacing 
           //if autofill={false} no word limit just adjust marqueeSpeed={} as per your need 
          marqueeDirection={'left'}  // or {'right'}
          marqueeSpeed={10}
          title={'ENTER YOUR TEXT HERE'}
          letterSpacing={5}
          backgroundColor={'black'}
          marginTop={10}
          marginBottom={10}
          padding={22}
          numOfRepetitions={120} is (Default) else set upto 800 as per requirement but more is number heavy is render 
          />


# A sample file might look like this:


     import React from "react";
     import { View } from "react-native";
     import Marquees from  "react-native-perfect-marquee";
     const App =({data})=>{ 
       return
        ( 
         
       <Marquees 
      textColor={data?.style?.text_color}  //you can also use it dynamically
      fontWeight={data?.style?.fontWeight}
      textColor={'red'}
          fontWeight={'900'}
          fontFamily={Rubik}
          fontSize={32}
           autofill ={true}  or just write autofill
          marqueeDirection={'left'}  OR {'right}
          marqueeSpeed={10}
          title={'ENTER YOUR TEXT HERE'}
          letterSpacing={5}
          backgroundColor={'black'}
          marginTop={10}
          marginBottom={10}
          padding={22}
                    />
                />
      </View>
            )
          }
          export default App;




| **Prop**          | **Description**                                              |     **Value**     |        **Example**         |
|-------------------|--------------------------------------------------------------|-------------------|----------------------------|
| `textColor`       |Customize the color of the scrolling text.                    | `string`          | `textColor={'green'}`      |
| `fontWeight`      |Control the font weight of the scrolling text.                | `'900'`           | `fontWeight={'900'}`       |
| `fontFamily`      |Specify the font family for the title text.                   | `string`          | `fontFamily={'Arial'}`     |
| `fontSize`        |Adjust the font size of the title text.                       | `32`              | `fontSize={32}`            |
| `autofill`        |Automatically adjusts the text width for smooth scrolling.    | `boolean`         | `autofill={true}`          |
| `marqueeDirection`|Set the scroll direction of the marquee, either left or right.| `'left' | 'right' | `marqueeDirection={'left'}`|
| `marqueeSpeed`    |Control the speed of the scrolling text.                      | `10 to 100`       | `marqueeSpeed={10}`        |
| `title`           |The actual text content that will scroll in the marquee.      | `string`          | `title={'Marquee'}`        |
| `letterSpacing`   |Define the spacing between letters of the scrolling text.     | `1 to 5`          | `letterSpacing={2}`        |
| `backgroundColor` |Set the background color of the marquee.                      | `string`          | `backgroundColor={'red'}`  |
| `marginTop`       |Add margin to the top of the marquee.                         | `number`          | `marginTop={10}`           |
| `marginBottom`    |Add margin to the bottom of the marquee.                      | `number`          | `marginBottom={10}`        |
| `padding`         |Add padding around the content inside the marquee.            | `number`          | `padding={10}`             |

<br>
<br>

 # Support Me on PayPal Or GooglePay

Welcome help me to build this awesome lib.

[[PayPal]](https://www.paypal.me/mdeepakverma)
  
Or via Google Pay:

UPI-- deepak142verma@okaxis

Any amount appreciated