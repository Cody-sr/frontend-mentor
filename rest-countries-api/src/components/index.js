import React from "react";
import ThemeButton from "./buttons/ThemeButton";
import BackButton from "./buttons/BackButton";
import InputSearch from "./Inputs/InputSearch";
import InputSelect from "./Inputs/InputSelect";
import Header from "./header/Header";
import CardSkeleton from "./card/CardSkeleton";

const Card = React.lazy(() => delayForDemo(import("./card/Card")));

// Add a fixed delay so you can see the loading state
async function delayForDemo(promise) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return promise;
}

export {
  ThemeButton,
  BackButton,
  InputSearch,
  InputSelect,
  Header,
  Card,
  CardSkeleton,
};
