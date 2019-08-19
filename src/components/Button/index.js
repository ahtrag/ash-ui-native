import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const Button = props => {
  const { fullWidth, align, rounded, color, onPress, children, style } = props;

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={[
          styles.rootChild,
          styles.root,
          fullWidth && styles.fullWidth,
          {
            paddingHorizontal: 32,
            paddingVertical: 16,
            borderRadius: rounded ? 4 : 0,
            backgroundColor: color,
            alignSelf:
              align === "left"
                ? "flex-start"
                : align === "center"
                ? "center"
                : align === "right"
                ? "flex-end"
                : "flex-start"
          },
          style
        ]}
      >
        {typeof children === "string" ? (
          <Text style={{ color: "#FFFFFF" }}>{children}</Text>
        ) : (
          children
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  rootChild: {
    alignItems: "center",
    justifyContent: "center"
  },
  fullWidth: {
    width: "100%"
  }
});

Button.defaultProps = {
  fullWidth: false,
  align: "left",
  color: "#4285F4",
  rounded: false
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  fullWidth: PropTypes.bool,
  align: PropTypes.oneOf(["left", "center", "right"]),
  rounded: PropTypes.bool,
  color: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ])
};

export default Button;
