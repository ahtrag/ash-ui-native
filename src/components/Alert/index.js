import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import Button from "../Button";

const images = {
  success: require("../../../assets/success.png"),
  info: require("../../../assets/info.png"),
  warning: require("../../../assets/warning.png"),
  error: require("../../../assets/error.png")
};

const { height, width } = Dimensions.get("window");

const Alert = props => {
  const { show, type, title, message, onClose } = props;

  if (show) {
    return (
      <Fragment>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>

        <View style={styles.root}>
          <Image
            source={images[type]}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <Button
            align="center"
            onPress={onClose}
            style={styles.button}
            fullWidth
          >
            Tutup
          </Button>
        </View>
      </Fragment>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height,
    width,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 80
  },
  root: {
    position: "absolute",
    width: width - 64,
    left: 32,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    zIndex: 100
  },
  image: { width: 250, height: 250, marginTop: -16 },
  title: {
    fontWeight: "700",
    fontSize: 24,
    letterSpacing: 1,
    lineHeight: 40,
    marginTop: -40,
    color: "#4285F4"
  },
  message: {
    textAlign: "center",
    lineHeight: 25
  },
  button: {
    marginTop: 24
  }
});

Alert.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "info", "warning", "error"]),
  onClose: PropTypes.func
};

export default Alert;
