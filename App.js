// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import TrainerAuth from './components/trainers/TrainerAuth';
import ClientAuth from './components/clients/ClientAuth';
import TrainersDashboard from './components/trainers/TrainersDashboard';
import ClientsDashboard from './components/clients/ClientsDashboard';
import RoutineList from './components/routines/RoutineList';
import CreateRoutine from './components/routines/CreateRoutine';
import RoutineDetail from './components/routines/RoutineDetail';
import AddClientForm from './components/clients/AddClientForm';
import ClientList from './components/clients/ClientList';
import ClientDetail from './components/clients/ClientDetail';
import ClientRoutines from './components/clients/ClientRoutines';
import ClientNutrition from './components/clients/ClientNutrition';
import ClientMetrics from './components/clients/ClientMetrics';
import ClientMetricsForm from './components/clients/ClientMetricsForm';
import UpdateMetrics from './components/clients/UpdateMetrics';
import AssignRoutine from './components/clients/AssignRoutine';
import AssignNutrition from './components/clients/AssignNutrition';
import HeaderClient from './components/clients/HeaderClient';
import Notification from './components/common/Notification';
import ClientProfile from './components/clients/ClientProfile';
import SidebarTrainers from './components/trainers/SidebarTrainers';
import TrainersProfile from './components/trainers/TrainersProfile';
import TrainerDetailForClient from './components/trainers/TrainerDetailForClient'; 
import CreateNutritionPlan from './components/clients/CreateNutritionPlan'; 
import ViewNutritionPlan from './components/clients/ViewNutritionPlan';
import TrainersList from './components/trainers/TrainersList';
import ClientAdvice from './components/clients/ClientAdvice';
import FitnessAdvice from './components/clients/FitnessAdvice';
import NutritionAdvice from './components/clients/NutritionAdvice';
import MentalHealthAdvice from './components/clients/MentalHealthAdvice';
import RegisterClient from './components/clients/RegisterClient';
import RegisterTrainer from './components/trainers/RegisterTrainer';
import Header2 from './components/common/Header2';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trainers/auth" element={<TrainerAuth />} />
                <Route path="/clients/auth" element={<ClientAuth />} />
                <Route path="/trainers/dashboard" element={<TrainersDashboard />} />
                <Route path="/clients/dashboard" element={<ClientsDashboard />} />
                <Route path="/routines" element={<RoutineList role="trainer" />} />
                <Route path="/routines/create" element={<CreateRoutine />} />
                <Route path="/routine/:id" element={<RoutineDetail />} />
                <Route path="/add-client" element={<AddClientForm role="trainer" />} />
                <Route path="/client-list" element={<ClientList role="trainer" />} />
                <Route path="/client/:id" element={<ClientDetail role="trainer" />} />
                <Route path="/client/:id/routines" element={<ClientRoutines />} />
                <Route path="/client/:id/nutrition" element={<ClientNutrition />} />
                <Route path="/client/:id/metrics" element={<ClientMetrics />} />
                <Route path="/client/:id/metrics/create" element={<ClientMetricsForm />} />
                <Route path="/client/:id/metrics/update" element={<UpdateMetrics role="trainer" />} />
                <Route path="/client/:id/assign-routine" element={<AssignRoutine role="trainer" />} />
                <Route path="/client/:id/assign-nutrition" element={<AssignNutrition role="trainer" />} />
                <Route path="/client/:id/header" element={<HeaderClient />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/client/:id/profile" element={<ClientProfile />} />
                <Route path="/trainer/:id/profile" element={<TrainersProfile />} />
                <Route path="/sidebar-trainers" element={<SidebarTrainers />} />
                <Route path="/client/:id/trainer" element={<TrainerDetailForClient role="client" />} />
                <Route path="/client/:id/nutrition/create" element={<CreateNutritionPlan />} />
                <Route path="/client/:id/nutrition/view" element={<ViewNutritionPlan role="client" />} />
                <Route path="/trainers/list" element={<TrainersList role="trainer" />} />
                <Route path="/client/:id/advice" element={<ClientAdvice />} />
                <Route path="/client/advice/fitness" element={<FitnessAdvice />} />
                <Route path="/client/advice/nutrition" element={<NutritionAdvice />} />
                <Route path="/client/advice/mental-health" element={<MentalHealthAdvice />} />
                <Route path="/client/register-client" element={<RegisterClient />} />
                <Route path="/trainers/register-trainer" element={<RegisterTrainer />} />
                <Route path="/client/:id/header" element={<Header2 />} />
            </Routes>
        </Router>
    );
}

export default App;