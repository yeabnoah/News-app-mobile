import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  useState,
} from "react-native";
import axios from "axios";
import Navbar from "../components/Navbar";
import Choice from "../components/Choice";
import Post from "../components/Post";

const { height, width } = Dimensions.get("window");

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.style}>
      <ScrollView style={styles.container}>
        <Navbar navigation={navigation} />
        <Choice />
        <Post navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  style: {
    backgroundColor: "#fff",
    paddingTop: height * 0.04,
    flex: 1,
    // marginBottom: 50,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    // marginBottom: 10,
  },
});

export default Home;
