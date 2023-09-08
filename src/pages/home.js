import { Grid, } from "semantic-ui-react";
import Navbar from "../components/navbar";
import Contacts from "../components/contacts";

function Home({navigation}) {
  return (
    <>
    <Navbar navigation={navigation}/>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row centered>
          <Grid.Column width={8}>
            <p style={{ fontSize: "1.33em" }}>
            Greetings, my name is Robert and I'm a budding web developer! This is my project portfolio.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Contacts/>

    </>
  );
}

export default Home;
