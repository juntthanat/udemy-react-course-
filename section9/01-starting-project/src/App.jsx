import ProjectBar from "./components/ProjectBar";

function App() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <div className="w-full flex-auto h-4"/>
      <section className="w-full flex-auto h-5/6">
        <ProjectBar></ProjectBar>
        MainPage
      </section>
      <div className="w-full flex-auto h-2 bg-stone-700"/>
    </main>
  );
}

export default App;
