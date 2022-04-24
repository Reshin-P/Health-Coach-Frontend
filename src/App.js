
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MyProfileScreen from './screens/MyProfileScreen';
import MyWorkoutsScreen from "./screens/MyWorkoutsScreen";
import ProgramWiseScreen from "./screens/ProgramWiseScreen";
import SignupScreen from "./screens/SignupScreen";
import SubcribedWorkouts from "./screens/SubcribedWorkoutsScreen";
import AddWorkoutScreen from "./screens/Trainer/AddWorkoutScreen";
import TrainerHomepageScreen from "./screens/Trainer/TrainerHomepageScreen";
import TrainerLoginScreen from "./screens/Trainer/TrainerLoginScreen";
import TrainerSignupScreen from "./screens/Trainer/TrainerSignupScreen";
import TrainerScreen from "./screens/TrainerScreen";
import WorkoutDetailsScreen from "./screens/WorkoutDetailsScreen";


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
        <Route path="/programs/:id" element={<ProgramWiseScreen />} />
        <Route path="/trainerlogin" element={<TrainerLoginScreen />} />
        <Route path="/workout/:id" element={<WorkoutDetailsScreen />} />
        <Route path="/workout-sub/id" element={<SubcribedWorkouts />} />
        <Route path='/trainersignup' element={<TrainerSignupScreen />} />
        <Route path="/AddWorkoutScreen" element={<AddWorkoutScreen />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
