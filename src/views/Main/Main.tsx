import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { usePopup } from "../../contexts/popup/PopupContext";
import {
  Container,
  Content,
  BackgroundImage,
  styles,
} from "./styles";
import { Title } from "../../styles/components/Typography";
import Button from "../../components/Button/Button";
import AddUserPopup from "../../components/AddUserPopup/AddUserPopup";

const Main: React.FC = () => {
  const [openPopup] = usePopup();

  const handlePopup = (): void => {
    openPopup({
      component: AddUserPopup,
    });
  };

  return (
    <BackgroundImage
      style={styles.backgroundImage}
      // eslint-disable-next-line global-require
      source={require("../../assets/background.png")}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <Container>
          <Content>
            <Title fontSize={32}>
              Bill Splitting
            </Title>
          </Content>

          <Button onPress={handlePopup}>
            <Icon name="plus" size={24} />
          </Button>
        </Container>
      </KeyboardAvoidingView>
    </BackgroundImage>
  );
};

export default Main;