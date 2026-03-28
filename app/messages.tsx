import { useState } from "react";
import { TextInput } from "react-native";
import Container from "../components/Container";
import Header from "../components/Header";
import MessageCard from "../components/MessageCard";
import PrimaryButton from "../components/PrimaryButton";

export default function Messages() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  const addMessage = () => {
    const newMessage = {
      name,
      message,
    };

    setMessages([newMessage, ...messages]);
    setName("");
    setMessage("");
  };

  return (
    <Container>
      <Header title="Leave a Message ❤️" />

      <TextInput
        placeholder="Your name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 10, borderRadius: 10 }}
      />

      <TextInput
        placeholder="Your message"
        value={message}
        onChangeText={setMessage}
        style={{ borderWidth: 1, padding: 10, borderRadius: 10 }}
      />

      <PrimaryButton title="Send Message" onPress={addMessage} />

      {messages.map((msg, i) => (
        <MessageCard key={i} name={msg.name} message={msg.message} />
      ))}
    </Container>
  );
}
