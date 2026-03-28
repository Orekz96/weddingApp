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
     Welcome to the beautiful celebration of love between **Antonia Oreoluwa & Christopher Boluwatife** 💍✨

We are so, so happy you’re here! Truly — your presence means the world, and it wouldn’t be the same without you. Today is all about love, laughter, great vibes… and yes, plenty of unforgettable moments 📸❤️

This little app is your personal guide (and memory keeper!) for the day. Here’s how to make the most of it:

🌿 **Welcome Section** – You’re here! Take in the love and good energy ✨
📅 **Events** – Stay in the loop so you don’t miss any special moment (or the food 👀🍽️)
📸 **Upload Photos** – Capture the fun and share your favorite moments with everyone
🖼️ **Gallery** – Relive the magic and see the day through everyone’s eyes
💌 **Messages** – Leave a heartfelt note, a prayer, or even a little joke for the couple 💕

Don’t be shy — snap pictures, smile big, dance freely, and share the joy! This is a **once-in-a-lifetime kind of love**, and you’re part of the story now 🥹💖

Let’s make memories, spread love, and have an absolutely amazing time together! 🎉💃🕺

With love and gratitude,
**The Happy Couple** 💚✨
#ACozylovestory26

      </Text>

      <PhotoPlaceholder source={require("../assets/u3.jpg")} />
    </Container>
  );
}
