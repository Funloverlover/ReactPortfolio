import { Header, Grid, Segment } from "semantic-ui-react";
import data from "./projects.json";
import Navbar from "../components/navbar";
import Contacts from "../components/contacts";

function Projects({navigation}) {
  return (
    <>
      <Navbar navigation={navigation} />
      <Grid container stackable verticalAlign="middle" style={{ padding: "6em 0em" }}>
        <Grid.Row centered>
          <Grid.Column width={8}>
            {
              data.map(element => {
                return <>
                  <Header>
                    {element.header}
                  </Header>
                  <Segment>
                    <p>{element.description}</p>
                    <a href={element.url} target="_blank" rel="noreferer">{element.url}</a>
                  </Segment>
                </>

              })
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Contacts/>

    </>
  );
}

export default Projects;