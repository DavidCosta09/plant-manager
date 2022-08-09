import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { Header } from "../components/Header";
import { EnviromentButton } from "../components/EnviromentButton";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import api from "../services/api";

interface EnviromentProps {
  key: string;
  title: string;
}

export const PlantSelect = () => {
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);

  const getList = async () => {
    try {
      const { data } = await api.get("plants_environments");
      console.log("data: ", data);

      setEnviroments([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    } catch (error: any) {
      console.log("error.response", error);
    }
  };

  useEffect(() => {
    // console.log("teste");
    getList();
  }, []);

  // console.log(enviroments);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={enviroments}
          renderItem={({ item }) => (
            <EnviromentButton title={item.title} active />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: "100%",
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 20,
    color: colors.heading,
  },
  enviromentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});
