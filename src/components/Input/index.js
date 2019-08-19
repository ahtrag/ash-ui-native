import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "../IconButton";
import { View, TextInput, StyleSheet } from "react-native";

const Input = props => {
  const { type, extra, placeholder, color, value, onChangeText, style } = props;
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  let keyboardType = "default";

  switch (type) {
    case "email":
      keyboardType = "email-address";
      break;
    case "number":
      keyboardType = "numeric";
      break;
    case "tel":
      keyboardType = "phone-pad";
      break;
    default:
      break;
  }

  if (type === "password") {
    return (
      <View style={[styles.root, { borderBottomColor: color }, style]}>
        {extra.start}
        <TextInput
          placeholderTextColor={color}
          placeholder={placeholder}
          secureTextEntry={passwordVisibility ? false : true}
          style={[styles.input, { color }]}
          value={value}
          onChangeText={onChangeText}
        />
        <IconButton
          icon={{ type: "Feather", color }}
          onPress={() => setPasswordVisibility(!passwordVisibility)}
        >
          {passwordVisibility ? "eye-off" : "eye"}
        </IconButton>
      </View>
    );
  }

  return (
    <View style={[styles.root, { borderBottomColor: color }, style]}>
      {extra.start}
      <TextInput
        placeholderTextColor={color}
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
      {extra.end}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderStyle: "solid",
    marginTop: 8,
    marginBottom: 8
  },
  input: {
    flex: 1,
    marginLeft: 16
  }
});

Input.defaultProps = {
  type: "text",
  color: "#DDDDDD"
};

Input.propTypes = {
  type: PropTypes.oneOf(["email", "password", "number", "tel", "text"]),
  extra: PropTypes.shape({
    start: PropTypes.element,
    end: PropTypes.element
  }),
  placeholder: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ])
};

export default Input;
