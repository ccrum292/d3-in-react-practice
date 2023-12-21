import { useData } from "./custom-hooks/getData";
import ScatterPlot from "./components/svg/ScatterPlot";

function App() {
  const data = useData();

  if (!data) return;

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <ScatterPlot data={data} />
    </div>
  );
}

export default App;
