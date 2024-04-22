import React from "react";
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  ScrollView,
  Text,
  VStack,
  Center,
  AlertDialog,
  Image,
  Avatar,
  Pressable,
  Toast,
  Link,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AboutScreen extends React.Component {
  constructor(props) {
    super(props);

    this.toastID = "toast-clear-data";
  }

  showToast = () => {
    Toast.show({
      id: this.toastID,
      title: "Data already cleared!",
    });
  };

  render() {
    return (
      <>
        <ScrollView>
          <Avatar mt={"25px"} alignSelf={"center"} size={"xl"}>
            <Image
              source={require("../assets/user_image.png")}
              size={"lg"}
              alt="image"
            />
          </Avatar>
          <Text
            fontSize={"16px"}
            color={"#1A1A1A"}
            fontWeight={700}
            // fontFamily={"Poppins"}
            alignSelf={"center"}
            mt={"10px"}
          >
            FARMY
          </Text>
          <Box
            // position={"absolute"}
            mt={"10px"}
            height={"200px"}
            alignSelf={"center"}
            width={"90%"}
            bg="gray.100"
            shadow={3}
            p={"2"}
            rounded="lg"
            mb={"10px"}
          >
            <Text
              mb={"5px"}
              fontSize="16px"
              alignSelf={"center"}
              // fontFamily={"Poppins"}
            >
              Description
            </Text>

            <Text
              textAlign={"center"}
              fontSize="16px"
              color="#62C954"
              alignSelf={"center"}
            >
              FARMY merupakan aplikasi sistem berbasis mobile yang dibuat untuk
              memudahkan masyarakat untuk menanam tanaman. Aplikasi ini nantinya
              berguna untuk membantu para masyarakat dalam proses bercocok tanam
            </Text>
            <Text
              mt={"5px"}
              fontSize="16px"
              alignSelf={"center"}
              // fontFamily={"Poppins"}
            >
              API Reference
            </Text>

            <Link
              alignSelf={"center"}
              href="http://api.weatherapi.com/v1/current.json?key=d9b67edb1ea44f4f9e1150618232701&q=-7.311309,112.729024"
            >
              Weather API from weatherapi.com
            </Link>
          </Box>
          <Box
            mt={"15px"}
            alignSelf={"center"}
            width={"90%"}
            height={"200px"}
            bg="gray.100"
            shadow={3}
            rounded="lg"
          >
            <Text
              mt={"15px"}
              fontSize={"16px"}
              color={"#1A1A1A"}
              alignSelf={"center"}
            >
              Team Developer
            </Text>
            <HStack
              mb={"20px"}
              space="0"
              alignItems="center"
              justifyContent={"center"}
            >
              <Center size={16} h="40" w="20">
                <Avatar
                  size={"lg"}
                  source={{
                    uri: "",
                  }}
                >
                  <Image
                    source={require("../assets/robbi.jpg")}
                    size={"sm"}
                    borderRadius={50}
                    alt="image"
                  />
                </Avatar>
                <Text mt={"10px"} textAlign={"center"} fontSize="xs">
                  Ahmad Robbi Rodhiyan R
                </Text>
              </Center>
              <Center size={16} h="40" w="20">
                <Avatar
                  size={"lg"}
                  source={{
                    uri: "",
                  }}
                >
                  <Image
                    source={require("../assets/brilliant.jpeg")}
                    size={"sm"}
                    borderRadius={50}
                    alt="image"
                  />
                </Avatar>
                <Text mt={"10px"} textAlign={"center"} fontSize="sm">
                  M Brilliant Fikri N H
                </Text>
              </Center>
              <Center size={16} h="40" w="20">
                <Avatar
                  size={"lg"}
                  source={{
                    uri: "",
                  }}
                >
                  <Image
                    source={require("../assets/hisyam.jpeg")}
                    size={"sm"}
                    borderRadius={50}
                    alt="image"
                  />
                </Avatar>
                <Text mt={"10px"} textAlign={"center"} fontSize="xs">
                  Hisyam Mahendra P
                </Text>
              </Center>
              <Center size={16} h="40" w="20">
                <Avatar
                  size={"lg"}
                  source={{
                    uri: "",
                  }}
                >
                  <Image
                    source={require("../assets/khikam.jpeg")}
                    size={"sm"}
                    borderRadius={50}
                    alt="image"
                  />
                </Avatar>
                <Text mt={"10px"} textAlign={"center"} fontSize="xs">
                  M Khikam Aliffudin
                </Text>
              </Center>
            </HStack>
          </Box>
          <Pressable
            px="5"
            py="2"
            rounded={"xl"}
            mt={"30px"}
            shadow={4}
            bg={"gray.100"}
            alignSelf={"center"}
            onPress={() => {
              AsyncStorage.clear();
              this.showToast();
            }}
          >
            <Text alignSelf={"center"} color={"green.500"}>
              Clear
            </Text>
          </Pressable>
        </ScrollView>
      </>
    );
  }
}

export default AboutScreen;
