import React from "react";
import { Box, Text, HStack, View, Center } from "native-base";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View height={"40px"} bgColor={"cyan.100"} justifyContent={"center"}>
        <HStack space="1">
          {this.props.backButton && (
            <Pressable onPress={() => navigation.pop()} mr={"15px"}>
              <Ionicons name="ios-arrow-back-outline" size={25} />
            </Pressable>
          )}
          <Text fontSize="xl" fontWeight={"bold"}>
            {this.props.title}
          </Text>
        </HStack>
      </View>
    );
  }
}

export default Header;
