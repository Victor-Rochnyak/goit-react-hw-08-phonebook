import { HomePageBox } from "./Home.styled";

export default function Home() {
    return (
      <HomePageBox>
        <h1>
        Welcome to Phonebook
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </HomePageBox>
    );
  }