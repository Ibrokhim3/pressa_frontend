import { About, AddPost, AdminPanel, LoginPage, PostInfo } from "./pages";
import { MainPage } from "./pages/main-page/main-page";
import { ConfigRoutes } from "./routes";

function App() {
  let hours = 5;
  let now = new Date().getTime();
  let setupTime = localStorage.getItem("setupTime");
  if (setupTime == null) {
    localStorage.setItem("setupTime", now);
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.clear();
      localStorage.setItem("setupTime", now);
    }
  }

  return (
    <div className="App">
      <ConfigRoutes></ConfigRoutes>
    </div>
  );
}

export default App;
