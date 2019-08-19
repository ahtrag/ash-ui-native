import React from "react";
import PropTypes from "prop-types";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const Icon = props => {
  const { color, size, type, children } = props;
  const newProps = { name: children, color, size };

  switch (type) {
    case "AntDesign":
      return <AntDesign {...newProps} />;
    case "Entypo":
      return <Entypo {...newProps} />;
    case "EvilIcons":
      return <EvilIcons {...newProps} />;
    case "Feather":
      return <Feather {...newProps} />;
    case "FontAwesome":
      return <FontAwesome {...newProps} />;
    case "FontAwesome5":
      return <FontAwesome5 {...newProps} />;
    case "Fontisto":
      return <Fontisto {...newProps} />;
    case "Foundation":
      return <Foundation {...newProps} />;
    case "Ionicons":
      return <Ionicons {...newProps} />;
    case "MaterialIcons":
      return <MaterialIcons {...newProps} />;
    case "MaterialCommunityIcons":
      return <MaterialCommunityIcons {...newProps} />;
    case "Octicons":
      return <Octicons {...newProps} />;
    case "Zocial":
      return <Zocial {...newProps} />;
    case "SimpleLineIcons":
      return <SimpleLineIcons {...newProps} />;
    default:
      return <AntDesign {...newProps} />;
  }
};

Icon.defaultProps = {
  color: "#000000",
  size: 24,
  type: "AntDesign"
};

Icon.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.oneOf([
    "AntDesign",
    "Entypo",
    "EvilIcons",
    "Feather",
    "FontAwesome",
    "FontAwesome5",
    "Fontisto",
    "Foundation",
    "Ionicons",
    "MaterialIcons",
    "MaterialCommunityIcons",
    "Octicons",
    "Zocial",
    "SimpleLineIcons"
  ])
};

export default Icon;
