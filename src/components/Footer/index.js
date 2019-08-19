import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import Button from "../Button";
import Icon from "../Icon";

const Footer = props => {
  const { items, active, activeColor, onChangePage } = props;

  return (
    <View style={styles.root}>
      {items.map((item, index) => (
        <Button
          key={item.key}
          color="transparent"
          style={{ flex: 1, paddingHorizontal: 0 }}
          onPress={() => onChangePage(index)}
        >
          {item.icon ? (
            <Icon
              type={item.icon.type}
              color={active === index ? activeColor : item.icon.color}
            >
              {item.icon.name}
            </Icon>
          ) : (
            <Image
              source={active === index ? item.activeImage : item.image}
              style={{ height: 25, width: 25 }}
              resizeMode="contain"
            />
          )}
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              marginTop: 4,
              color:
                active === index
                  ? item.activeColor
                    ? item.activeColor
                    : activeColor
                  : "#DDDDDD"
            }}
          >
            {item.label}
          </Text>
        </Button>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    left: 0,
    bottom: 0,
    width: Dimensions.get("window").width,
    height: 65,
    borderTopColor: "#4285F4",
    borderTopWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

Footer.defaultProps = {
  activeColor: "#4285F4"
};

Footer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      component: PropTypes.element.isRequired,
      image: PropTypes.number,
      activeImage: PropTypes.number,
      activeColor: PropTypes.string,
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
        size: PropTypes.number,
        name: PropTypes.string
      })
    })
  ).isRequired,
  active: PropTypes.number.isRequired,
  activeColor: PropTypes.string,
  onChangePage: PropTypes.func
};

export default Footer;
