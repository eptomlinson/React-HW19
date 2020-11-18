import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";
import friends from "./friends.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <SpongeBobCard info = {friends[0]}/>
      <MrKrabsCard info = {friends[1]}/>
      <SquidwardCard info = {friends[2]}/>
    </Wrapper>
  );
}

export default App;