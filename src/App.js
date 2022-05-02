
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomepageScreen from "./screens/Admin/AdminHomepageScreen";
import AdminLoginScreen from "./screens/Admin/AdminLoginScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MyProfileScreen from './screens/MyProfileScreen';
import MyWorkoutsScreen from "./screens/MyWorkoutsScreen";
import ProgramWiseScreen from "./screens/ProgramWiseScreen";
import SignupScreen from "./screens/SignupScreen";
import SubcribedWorkouts from "./screens/SubcribedWorkoutsScreen";
import AddWorkoutScreen from "./screens/Trainer/AddWorkoutScreen";
import ManageWorkout from "./screens/Trainer/ManageWorkoutScreen";
import TrainerHomepageScreen from "./screens/Trainer/TrainerHomepageScreen";
import TrainerLoginScreen from "./screens/Trainer/TrainerLoginScreen";
import TrainerSignupScreen from "./screens/Trainer/TrainerSignupScreen";
import WorkoutEditScreen from './screens/Trainer/WorkoutEditScreen';
import TrainerScreen from "./screens/TrainerScreen";
import WorkoutDetailsScreen from "./screens/WorkoutDetailsScreen";
import PaymentScreen from "./screens/PaymentScreen";
import ChatScreen from "./screens/ChatScreen";
import ViewUserScreen from "./screens/Trainer/ViewUserScreen";
function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/trainers" element={<TrainerScreen />} />
        <Route path="/myprofile" element={<MyProfileScreen />} />
        <Route path="/viewuser/:id" element={<ViewUserScreen />} />
        <Route path="/myworkouts" element={<MyWorkoutsScreen />} />
        <Route path="/adminlogin" element={<AdminLoginScreen />} />
        <Route path="/manageworkouts" element={<ManageWorkout />} />
        <Route path="/adminhome" element={<AdminHomepageScreen />} />
        <Route path="/trainer" element={<TrainerHomepageScreen />} />
        <Route path="/chat/:user/:trainer" element={<ChatScreen />} />
        <Route path="/programs/:id" element={<ProgramWiseScreen />} />
        <Route path="/trainerlogin" element={<TrainerLoginScreen />} />
        <Route path="/workoutsub/:id" element={<SubcribedWorkouts />} />
        <Route path="/workout/:id" element={<WorkoutDetailsScreen />} />
        <Route path='/trainersignup' element={<TrainerSignupScreen />} />
        <Route path="/editWorkout/:id" element={<WorkoutEditScreen />} />
        <Route path="/AddWorkoutScreen" element={<AddWorkoutScreen />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
