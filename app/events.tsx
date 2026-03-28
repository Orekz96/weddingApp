import Container from "../components/Container";
import EventCard from "../components/EventCard";
import Header from "../components/Header";
import PhotoPlaceholder from "../components/PhotoPlaceholder";

export default function Events() {
  return (
    <Container>
      <Header title="Wedding Events" />

      <PhotoPlaceholder source={require("../assets/PAP_1829.jpg")} />

      <EventCard
        title="Engagement"
        time="April 9th • 1PM"
        venue="Jotab Domin Hall, Ilorin"
      />

      <EventCard
        title="Wedding Ceremony"
        time="April 10th • 10AM"
        venue="Holy Family Catholic Church"
      />

      <EventCard
        title="Reception"
        time="After Church"
        venue="Latara Events Hall"
      />

      <PhotoPlaceholder source={require("../assets/PAP_1866.jpg")} />
    </Container>
  );
}
