import TopMenu from "./TopMenu/TopMenu";
import { HomePage } from "./HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import { SearchMenu } from "./SearchMenu/SearchMenu";

export const App = () => {
  return (
    <>
      <TopMenu />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<SearchMenu />}></Route>
      </Routes>
    </>
  )
}
