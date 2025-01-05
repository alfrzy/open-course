import Quiz from "../../components/Quiz/quiz";
import DashboardNavbar from "../../components/Navbar/DashboardNavbar";

const DetailQuiz = ({ courseId }) => {
    return (
     <div className="min-h-screen font-poppins bg-gray-200">
      <DashboardNavbar />
        <main className="p-5">
          <Quiz courseId={courseId} />
        </main>
      </div>
    );
  };
  
  export default DetailQuiz;