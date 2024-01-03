import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Landing from './Pages/Landing';
import Auth from './Pages/Auth';
import SingleView from './Pages/SingleView';
import List from './Pages/List';
import Home from './Admin/home/Home';
import ManageUsers from './Admin/ManageUsers/ManageUsers';
import ManageHostel from './Admin/ManageHostels/ManageHostel';
import ManageFeedback from './Admin/ManageFeedback/ManageFeedback';
import Pnf from './Pages/Pnf';
import AddHostels from './Admin/AddHostels/AddHostels';
import EditHstl from './Admin/EditHostel/EditHstl';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/single/:id' element={<SingleView/>}/>
        <Route path='/list/:category/:address' element={<List/>}/>
        <Route path='/admin/home' element={<Home/>}/>
        <Route path='/admin/manage-user' element={<ManageUsers/>}/>
        <Route path='/admin/manage-hostel' element={<ManageHostel/>}/>
        <Route path='/admin/manage-feedbacks' element={<ManageFeedback/>}/>
        <Route path='/admin/add-hostel' element={<AddHostels/>}/>
        <Route path='/admin/edit-hostel/:id' element={<EditHstl />}/>
        <Route path='*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
