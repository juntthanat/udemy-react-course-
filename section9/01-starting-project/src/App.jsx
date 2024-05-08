import ProjectBar from "./components/ProjectBar";

function App() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <div className="w-full h-12"/>
      <section className="w-full h-5/6 flex flex-auto flex-row">
        <ProjectBar></ProjectBar>
        MainPage
      </section>
      {/* <div className="w-full flex-auto h-2 bg-stone-700"/> */}
    </main>
  );
}

export default App;
