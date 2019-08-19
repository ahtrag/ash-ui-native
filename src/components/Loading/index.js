import React from "react";
import PropTypes from "prop-types";
import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Text
} from "react-native";

const { height, width } = Dimensions.get("window");

const Loading = props => {
  const { show, size, color } = props;

  if (show) {
    return (
      <View style={styles.root}>
        <ActivityIndicator size={size} color={color} />
        <Text style={styles.text}>Mohon Tunggu</Text>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    height,
    width,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  },
  text: {
    color: "#FFFFFF",
    marginTop: 8,
    fontSize: 18
  }
});

Loading.defaultProps = {
  size: "large",
  color: "#4285F4"
};

Loading.propTypes = {
  show: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(["small", "large"]),
  color: PropTypes.string
};

export default Loading;
