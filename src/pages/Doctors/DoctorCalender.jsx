import { InlineWidget } from "react-calendly";

const App = () => {
  const user = localStorage.getItem("user");
  console.log(user);
  return (
    <div className="App drop-shadow-2xl p-3 lg:p-5 rounded-md">
      <InlineWidget url="https://calendly.com/drlaurawilliams82" />
    </div>
  );
};

export default App;
