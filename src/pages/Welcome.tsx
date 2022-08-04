import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Welcome() {
  const {navigate} = useNavigation();

  function handleStart() {
    //@ts-ignore
    navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          {" "}
          Gerencie {"\n"}
          suas plantas de{"\n"}
          forma fácil
        </Text>
        <View style={styles.img}>
          <Image
            source={wateringImg}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.7}
            onPress={handleStart}
          >
            <Feather name="chevron-right" style={styles.btnIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItens: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  button: {
    alignItems: "center",
  },
  btn: {
    backgroundColor: Platform.OS === "ios" ? "red" : colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56,
  },
  btnIcon: {
    fontSize: 28,
    color: colors.white,
  },
  img: {
    alignItems: "center",
  },
});
