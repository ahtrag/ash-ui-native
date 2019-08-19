import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

const Content = props => {
  const { children, style } = props;

  return <View style={[styles.root, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  }
});

Content.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ])
};

export default Content;
