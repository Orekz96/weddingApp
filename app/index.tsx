import { useRouter } from "expo-router";
import Container from "../components/Container";
import Header from "../components/Header";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import PrimaryButton from "../components/PrimaryButton";



export default function Home() {
  const router = useRouter();

  return (
    <Container>
      <Header title="Antonia ❤️ Christopher 2026" />




      <PhotoPlaceholder source={require("../assets/bbbbz (6).jpg")} />

      <PrimaryButton title="Our Welcome message to you" onPress={() => router.push("/welcome")} />

      <PrimaryButton
        title="Event Schedule"
        onPress={() => router.push("/events")}
      />

      <PrimaryButton
        title="Upload Photos"
        onPress={() => router.push("/upload")}
      />

      <PrimaryButton
        title="View Gallery"
        onPress={() => router.push("/gallery")}
      />

      <PrimaryButton
        title="Leave Message"
        onPress={() => router.push("/messages")}
      />
    </Container>
  );
}
