import React from "react";
import {
  Text,
  Avatar,
  Box,
  Pressable,
  HStack,
  VStack,
  Center,
  Image,
  View,
  ScrollView,
  FlatList,
  CheckIcon,
} from "native-base";
import { ImageBackground } from "react-native";

class DetailFromDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { route } = this.props;
    const data = route.params.data;
    return (
      <>
        <View width={"90%"} mt={"15px"} alignSelf={"center"}>
          <ImageBackground
            source={{
              uri: data.pic,
            }}
            alt="Alternate Text"
            size={"100%"}
            resizeMode={"cover"}
            rounded="10px"
            borderRadius={10}
          >
            <View p={"25px"}>
              <Text textAlign={"right"} color={"white"} fontSize="xl">
                {data.day}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <ScrollView>
          <Box
            // position={"absolute"}
            mt={"10px"}
            alignSelf={"center"}
            width={"90%"}
            bg="gray.100"
            shadow={3}
            p="4"
            rounded="lg"
            mb={"10px"}
          >
            <Text
              mb={"5px"}
              fontSize="20px"
              fontWeight="bold"
              alignSelf={"center"}
              // fontFamily={"Poppins"}
            >
              {data.data}
            </Text>

            <Text
              textAlign={"center"}
              fontSize="16px"
              color="#62C954"
              alignSelf={"center"}
            >
              {data.desk}
            </Text>
          </Box>
        </ScrollView>
      </>
    );
  }
}

export default DetailFromDetail;
