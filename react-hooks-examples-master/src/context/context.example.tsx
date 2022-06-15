import { FC } from "react";
import { Contacts } from "./contacts";
import { authorData, AuthorDataContext } from "./context";

const Main = () => (
  <main>
    <h1>Hello, this is my blog page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, rerum sint
      obcaecati corporis perferendis amet esse nemo quos repellendus magnam ipsa
      aliquid tempora dolorum mollitia quasi possimus nulla, velit modi?
    </p>

    <Contacts />
  </main>
);
const Footer: FC<{ author: string }> = ({ author }) => {
  const year = new Date().getFullYear();
  return (
    <footer>
      By {author}. (C) {year}
    </footer>
  );
};

const App = () => {
  const { authorName } = authorData;
  return (
    <>
      <AuthorDataContext.Provider value={authorData}>
        <Main />
      </AuthorDataContext.Provider>
      <Footer author={authorName} />
    </>
  );
};
export default App;
