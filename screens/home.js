import React from "react";
import { RefreshControl } from "react-native";
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
  Pressable,
  Spinner,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      refreshing: false,
      alreadyMounted: false,
    };
  }

  onRefresh = () => {
    this.setState({ refreshing: true });
    // Perform a refresh operation here (e.g. fetch data)
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  };

  componentDidMount() {
    setTimeout(() => this.requestLocationPermission(), 6000);
    this.setState({ alreadyMounted: true });
  }

  requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    } else {
      let location = await Location.getCurrentPositionAsync({});

      setTimeout(() => this.fetchWeatherData(location), 3000);
    }
  };

  fetchWeatherData = async (location) => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=d9b67edb1ea44f4f9e1150618232701&q=${location.coords.latitude}, ${location.coords.longitude}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ weatherData: data });
        console.log(this.state.weatherData);

        console.log(this.state.alreadyMounted);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { alreadyMounted } = this.state;
    return (
      <>
        {alreadyMounted ? (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }
          >
            <VStack space={26} alignItems="center">
              <Box
                mt={"30px"}
                alignSelf={"center"}
                width={"90%"}
                bg="green.500"
                p="2"
                rounded="lg"
              >
                <HStack
                  space="3"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <VStack space="5" justifyContent={"space-between"}>
                    <Text fontSize={"xl"} color={"white"}>
                      {this.state.weatherData != ""
                        ? this.state.weatherData.current.temp_c + "°C"
                        : "Data Temp Not Available"}
                    </Text>

                    <Text fontSize={"lg"} color={"white"} fontWeight={500}>
                      {this.state.weatherData != ""
                        ? this.state.weatherData.location.name +
                          ", " +
                          this.state.weatherData.location.region
                        : "Data loc Not Available"}
                    </Text>
                  </VStack>
                  {this.state.weatherData != "" ? (
                    <Image
                      source={{
                        uri: `https:${this.state.weatherData.current.condition.icon}`,
                      }}
                      alt={this.state.weatherData.current.condition.icon}
                      width="64px"
                      height="64px"
                    />
                  ) : (
                    <Image
                      source={require("../assets/icon_weather.png")}
                      alt="Weather icon"
                      width="64px"
                      height="64px"
                    />
                  )}
                </HStack>
              </Box>
              <Pressable
                alignSelf="center"
                mt={"25px"}
                width={"90%"}
                height={"120px"}
                onPress={() => this.props.navigation.navigate("Semangka")}
              >
                <Image
                  source={require("../assets/semangka1.png")}
                  borderRadius={20}
                  alt="image"
                />
              </Pressable>
              <Pressable
                alignSelf="center"
                width={"90%"}
                height={"120px"}
                onPress={() => this.props.navigation.navigate("Melon")}
              >
                <Image
                  source={require("../assets/melon1.png")}
                  borderRadius={20}
                  alt="image"
                />
              </Pressable>
              <Pressable
                alignSelf="center"
                width={"90%"}
                height={"120px"}
                onPress={() => this.props.navigation.navigate("Tebu")}
              >
                <Image
                  source={require("../assets/tebu1.png")}
                  borderRadius={20}
                  alt="image"
                />
              </Pressable>
            </VStack>
          </ScrollView>
        ) : (
          <Center flex="1">
            <Spinner size="lg" />
            <Text mt="10px" fontSize="lg">
              Loading....
            </Text>
          </Center>
        )}
      </>
    );
  }
}

export default HomeScreen;
