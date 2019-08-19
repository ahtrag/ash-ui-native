import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";

const IconButton = props => {
  const { icon, color, onPress, children, style } = props;
  const newIcon = { ...defaultIconProps, ...icon };

  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple("rgba(0, 0, 0, 0.15)", true)}
    >
      <View
        style={[
          styles.root,
          { backgroundColor: color },
          style,
          { position: "relative", top: 0, left: 0, bottom: 0, right: 0 }
        ]}
      >
        <Icon {...newIcon}>{children}</Icon>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 48,
    width: 48,
    borderRadius: 48 / 2,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  }
});

const defaultIconProps = {
  type: "AntDesign",
  color: "#000000",
  size: 26
};

IconButton.defaultProps = {
  icon: defaultIconProps,
  color: "transparent"
};

IconButton.propTypes = {
  children: PropTypes.any.isRequired,
  icon: PropTypes.shape({
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
    ]),
    color: PropTypes.string,
    size: PropTypes.number
  }),
  color: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ]),
  onPress: PropTypes.func
};

export default IconButton;
