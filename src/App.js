
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import ProgramWiseScreen from "./screens/ProgramWiseScreen";
import TrainerScreen from "./screens/TrainerScreen";
import WorkoutDetailsScreen from "./screens/WorkoutDetailsScreen"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubcribedWorkouts from "./screens/SubcribedWorkoutsScreen";
import MyWorkoutsScreen from "./screens/MyWorkoutsScreen";
import MyProfileScreen from './screens/MyProfileScreen';
import TrainerSignupScreen from "./screens/Trainer/TrainerSignupScreen";
import TrainerLoginScreen from "./screens/Trainer/TrainerLoginScreen";
import TrainerHomepageScreen from "./screens/Trainer/TrainerHomepageScreen";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/trainers" element={<TrainerScreen />} />
        <Route path="/myprofile" element={<MyProfileScreen />} />
        <Route path="/myworkouts" element={<MyWorkoutsScreen />} />
        <Route path="/trainer" element={<TrainerHomepageScreen />} />
        <Route path="/viewprograms" element={<ProgramWiseScreen />} />
        <Route path="/trainerLogin" element={<TrainerLoginScreen />} />
        <Route path="/workout/id" element={<WorkoutDetailsScreen />} />
        <Route path="/workout-sub/id" element={<SubcribedWorkouts />} />
        <Route path='/trainersignup' element={<TrainerSignupScreen />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
