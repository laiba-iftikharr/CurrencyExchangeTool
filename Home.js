import React, { useEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from '../components/Container';
import Logo from "../components/Logo";

const Home= () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("currencyPage");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (

  <Container>
  <Logo></Logo>
  </Container>

  );
};

export default Home;