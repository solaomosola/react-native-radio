## react-native-radio-input
A pure react, easy to use and highly customizable radio group. As easy as html radio.

![sample](https://user-images.githubusercontent.com/9248956/42413128-e42f1464-8211-11e8-80b8-abc95d29c71a.gif)
![sample2](https://user-images.githubusercontent.com/9248956/42413530-5c7f5cfa-821a-11e8-883f-15791cde731b.gif)

* [Installation](#Installation)
* [Example](#Example)
  * [Basic](#Basic)
  * [Moderate to Advanced](#Moderate-To-Advanced)
    * [Styling](#Styling) 
    * [Icons](#Icons)
  * [Props](#Props)
* [License](#License)
#Installation
``` 
npm i react-native-radio-input
```
#Examples
##Basic
```
import RadioGroup from "react-native-radio-input";
import Radio from "react-native-radio-input";
...
getChecked = (value) => {
    // value = our checked value
    console.log(value)
  }
...
<RadioGroup getChecked={this.getChecked}>
    <Radio iconName={"lens"} label={"The first option"} value={"A"}/>
    <Radio iconName={"lens"} label={"The first option"} value={"B"}/>
    <Radio iconName={"lens"} label={"I need numbers"} value={1}/>
    <Radio label={"Is IconName Optional?"} value={"Yes"}/>
    <Radio label={"Show Sentence Value"} value={"This is a Sentence"}/>
</RadioGroup>
...
```
###Moderate-To-Advanced
You can add styles, see the props
```
...
getChecked = (value) => {
    // value = our checked value
    console.log(value)
  }
...
<RadioGroup getChecked={this.getChecked} RadioGroupStyle={{flexDirection: "row" }}>
    <Radio iconName={"lens"} label={"The first option"} value={"A"} />
    <Radio iconName={"lens"} label={"The first option"} value={"B"}/>
    <Radio iconName={"lens"} label={"I need numbers"} value={1}/>
    <Radio label={"Is IconName Optional?"} value={"Yes"}/>
    <Radio label={"Show Sentence Value"} value={"This is a Sentence"}/>
</RadioGroup>
...
```
####Styling
Style the radio group, radio button, the label, and the core of the button.

####Icons
The core of the button is made of icons from react-native-vector-icons

##Props


######Radio Group

<table class="tg">
  <tr>
    <th class="tg-yw4l"><b>prop</b></th>
    <th class="tg-yw4l"><b>Proptype</b></th>
    <th class="tg-yw4l"><b>Required</b></th>
    <th class="tg-yw4l"><b>Default</b></th>
    <th class="tg-yw4l"><b>Example</b></th>
  </tr>
  <tr>
    <td class="tg-yw4l">getChecked</td>
    <td class="tg-yw4l">Function</td>
    <td class="tg-yw4l">Yes</td>
    <td class="tg-yw4l">null</td>
    <td class="tg-yw4l">
    1. getChecked=(value)=>{console.log(value)}<br>
    2. function getChecked(value){console.log(value)}
    </td>
  </tr>
  <tr>
    <td class="tg-yw4l">RadioGroupStyle</td>
    <td class="tg-yw4l">React Native View Style</td>
    <td class="tg-yw4l">No</td>
    <td class="tg-yw4l">null</td>
    <td class="tg-yw4l">RadioGroupStyle={{flexDirection:"row"}}</td>
  </tr>
  <tr>
    <td class="tg-yw4l">RadioStyle</td>
    <td class="tg-yw4l">React Native View Style</td>
    <td class="tg-yw4l">No</td>
    <td class="tg-yw4l">null</td>
    <td class="tg-yw4l">RadioStyle={{backgroundColor:"yellow"}}</td>
  </tr>
  <tr>
    <td class="tg-yw4l">IconStyle</td>
    <td class="tg-yw4l">React Native Text Style</td>
    <td class="tg-yw4l">No</td>
    <td class="tg-yw4l">null</td>
    <td class="tg-yw4l">IconStyle={{fontSize:12}}</td>
  </tr>
  <tr>
    <td class="tg-yw4l">labelStyle</td>
    <td class="tg-yw4l">React Native Text Style</td>
    <td class="tg-yw4l">No</td>
    <td class="tg-yw4l">null</td>
    <td class="tg-yw4l">labelStyle={{fontSize:12}}</td>
  </tr>
  <tr>
    <td class="tg-yw4l">coreStyle</td>
    <td class="tg-yw4l">React Native Text Style</td>
    <td class="tg-yw4l">No</td>
    <td class="tg-yw4l">null</td>
    <td class="tg-yw4l">coreStyle={{fontSize:12}}</td>
  </tr>
  
</table>
getChecked - function to receive the selected value - usage - See [Basic](#Basic) - (Required) 
RadioGroupStyle - React Native View Style
RadioStyle - React Native View Style
IconStyle - React Native Text Style
labelStyle - React Native Text Style
coreStyle - React Native Text Style

#####Radio 

<table class="tg">
  <tr>
    <th class="tg-yw4l"><b>prop</b></th>
    <th class="tg-yw4l"><b>Proptype</b></th>
    <th class="tg-yw4l"><b>Required</b></th>
    <th class="tg-yw4l"><b>Default</b></th>
    <th class="tg-yw4l"><b>Example</b></th>

  </tr>
  <tr>
    <td class="tg-yw4l">iconGroup</td>
    <td class="tg-yw4l">String</td>
    <td class="tg-yw4l">No</td>
    <td class="tg-yw4l">MaterialIcons</td>
    <td class="tg-yw4l">iconGroup = {"MaterialIcons"}</td>
  </tr>
  <tr>
    <td class="tg-yw4l">iconName</td>
    <td class="tg-yw4l">String</td>
    <td class="tg-yw4l">No</td>
    <td class="tg-yw4l">lens</td>
    <td class="tg-yw4l">iconName = {"lens"}</td>
  </tr>
  <tr>
    <td class="tg-yw4l">label</td>
    <td class="tg-yw4l">String</td>
    <td class="tg-yw4l">Yes</td>
    <td class="tg-yw4l">null</td>
    <td class="tg-yw4l">label = {"This is item 1"}</td>
  </tr>
  <tr>
    <td class="tg-yw4l">value</td>
    <td class="tg-yw4l">String or number</td>
    <td class="tg-yw4l">Yes</td>
    <td class="tg-yw4l">null</td>
    <td class="tg-yw4l">value = {"A"}</td>
  </tr>
  
</table>
iconGroup - based on react-native-vector-icons v4.6.0 by [@oblador](https://oblador.github.io/react-native-vector-icons) . All the icon groups are supported. Default is "MaterialIcons".

iconName - Any icon from the iconGroup mentioned. Default is "lens" - (Required).

label - Label that needs to be displayed by or under the radio button,

value - The return value for the radio button. (Required)

## License
[Apache 2.0](./LICENSE)
