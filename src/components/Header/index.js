import React from "react";
import PropTypes from "prop-types";
import { View, Dimensions, StyleSheet } from "react-native";

const Header = props => {
  const { children, color, style } = props;

  return (
    <View style={[styles.root, { backgroundColor: color }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 65,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    elevation: 4
  }
});

Header.defaultProps = {
  color: "#FFFFFF"
};

Header.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ]),
  color: PropTypes.string
};

export default Header;
