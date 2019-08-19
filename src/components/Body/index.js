import React from "react";
import PropTypes from "prop-types";
import { ScrollView, StyleSheet } from "react-native";

const Body = props => {
  const { align, justify, children, style } = props;

  return (
    <ScrollView
      contentContainerStyle={[
        styles.root,
        {
          alignItems:
            align === "start"
              ? "flex-start"
              : align === "center"
              ? "center"
              : align === "end"
              ? "flex-end"
              : "flex-start",
          justifyContent:
            justify === "start"
              ? "flex-start"
              : justify === "center"
              ? "center"
              : justify === "end"
              ? "flex-end"
              : "flex-start"
        },
        style
      ]}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    position: "relative"
  }
});

Body.defaultProps = {
  align: "start",
  justify: "start"
};

Body.propTypes = {
  children: PropTypes.any.isRequired,
  align: PropTypes.oneOf(["start", "center", "end"]),
  justify: PropTypes.oneOf(["start", "center", "end"]),
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ])
};

export default Body;
