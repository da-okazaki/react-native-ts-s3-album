/* react */
import * as React from "react";
import { View } from "react-native";

/* expo */
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";

/* react native paper */
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

/* components */
import { Topbar, S3Gallery } from "./components";

/* styles */
import { styles } from "./styles/global-style";

/* AWS Amplify */
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports";
Amplify.configure(awsconfig);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Topbar />
        <S3Gallery />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}
