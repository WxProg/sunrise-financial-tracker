import { MainLayout } from "./styles/Layouts";
// import { GlobalStyle } from "./styles/GlobalStyle";
import styled from "styled-components";
import bg from "./assets/img/bg1.jpg";
import Float from "./Components/Float/Float";

function App() {
  return (
    <AppStyling bg={bg} className="App">
      <Float />
      <MainLayout></MainLayout>
    </AppStyling>
  );
}

/* I am using es6 template literals below (` `) */
const AppStyling = styled.div`
  height: 100vh;
  background-image: url(${(props) =>
    props.bg}); /* This method provides a dynamic way to set the background image based on the prop you provide to the styled component.*/
  background-size: cover; /* this will ensure your background image covers the entire div */
  background-repeat: no-repeat; /* this will prevent the image from repeating */
  background-position: center; /* this will center the image in the div */
`;

export default App;
