import { Header, Grid, Segment } from "semantic-ui-react";
import Navbar from "../components/navbar";
import Contacts from "../components/contacts";

function Aboutme({ navigation }) {
  return (
    <>
      <Navbar navigation={navigation} />

      <Header>
        About Me!
      </Header>
      <Segment>
        <p>Hello, my name is Robert and this is my first project portfolio made in react for my coding bootcamp!</p>
      </Segment>
      <Contacts />

    </>
  );
}

export default Aboutme;