import { Text,Image } from "react-native";
import Container from "../components/Container";
import Header from "../components/Header";
import PhotoPlaceholder from "../components/PhotoPlaceholder";



export default function Welcome() {
  return (
    <Container>
      <Header title="Welcome, Dear Guests!" />

      <PhotoPlaceholder source={require("../assets/u2.jpg")} />

      <Text>
        Welcome to the wedding celebration of Antonia Oreoluwa & Christopher
        Boluwatife. 
      </Text>

      <Text>
        We are honored to celebrate this beautiful moment with you. Share your
        photos, enjoy the events, and leave a message for the couple ❤️
      </Text>

      <PhotoPlaceholder source={require("../assets/u3.jpg")} />
    </Container>
  );
}
