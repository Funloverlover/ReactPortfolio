import { Button, Segment } from "semantic-ui-react";
function Navbar({ navigation }) {
  return (
    <>
      <Segment
      horizontal>
        <Button
          onClick={() => navigation.navigate("home")}
        >
          Home
        </Button>
        <Button
          onClick={() => navigation.navigate("projects")}
        >
          Projects
        </Button>
        <Button
          onClick={() => navigation.navigate("about-me")}
        >
          About Me
        </Button>
      </Segment>
    </>
  );
}

export default Navbar;