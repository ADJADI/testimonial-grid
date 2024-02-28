import react from "react";
import CommentPost from "./components/CommentPost";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex items-start justify-center min-h-screen text-[13px] font-medium bg-lightBlue  xl:items-center">
        <CommentPost />
      </div>
    </>
  );
}

export default App;
