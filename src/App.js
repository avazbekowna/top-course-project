
import './App.scss';
import "./style/Style.scss"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Routes,Route} from "react-router-dom";
import School from "./components/School/School";
import About from "./components/About/About";
import Sign from "./components/Header/Sign/Sign"
import Home from "./components/Home/Home"
import Follow from "./components/Header/Follow/Follow";
import MasterClass from "./components/School/Master_school/Master-class/Master-class";
import Reactivity from "./components/School/Master_school/Master-class/Reactivity/Reactivity";
import Youtube from "./components/School/Master_school/Master-class/Reactivity/youtube/Youtube";
import Blog from "./components/School/Master_school/Master-class/Blog/Blog";
import HomeRead from "./components/Home/Home-read/Home_read";
import GetAccess from "./components/Home/Home-read/Get-access/Get_access";
import ShowMore from "./components/Home/Show-more/Show_more";
import SubscribePackage from "./components/Home/Subscribe-package/Subscribe_package";
import Courses from "./components/Courses/Courses";
import CoursesFrontend from "./components/Courses/Courses-frontend/Courses-frontend";
import CoursesJava from "./components/Courses/Courses-java/Courses-java";
import RegisterCourse from "./components/Courses/Courses-frontend/Register-course/Register-course";
import BuyedCourses from "./components/Courses/Courses-frontend/Register-course/Buyed-courses/Buyed-courses";
import Profiles from "./components/Courses/Courses-frontend/Register-course/Buyed-courses/Profiles/Profiles";
import Offer from "./components/Home/Offer/Offer";
import {ToastContainer} from "react-toastify";



function App() {
  return (
      <div className="App">
        <Routes>
          <Route path={"/School"} element={<School/>}/>
          <Route path={"/Courses"} element={<Courses/>}/>
          <Route path={"/About"} element={<About/>}/>
          <Route path={"/Sign"} element={<Sign/>}/>
          <Route path={"/Header"} element={<Header/>}/>
          <Route path={"/Footer"} element={<Footer/>}/>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/Home"} element={<Home/>}/>
          <Route path={"/Home_read"} element={<HomeRead/>}/>
          <Route path={"/Offer"} element={<Offer/>}/>
          <Route path={"/Get_access"} element={<GetAccess/>}/>
          <Route path={"/Show_more"} element={<ShowMore/>}/>
          <Route path={"/Subscribe_package"} element={<SubscribePackage/>}/>
          <Route path={"/Courses-frontend"} element={<CoursesFrontend/>}/>
          <Route path={"/Courses-java"} element={<CoursesJava/>}/>
          <Route path={"/Register-course"} element={<RegisterCourse/>}/>
          <Route path={"/Buyed-courses"} element={<BuyedCourses/>}/>
          <Route path={"/Profiles"} element={<Profiles/>}/>
          <Route path={"/Follow"} element={<Follow/>}/>
          <Route path={"/Master-class"} element={<MasterClass/>}/>
          <Route path={"/Reactivity"} element={<Reactivity/>}/>
          <Route path={"/Youtube"} element={<Youtube/>}/>
          <Route path={"/Blog"} element={<Blog/>}/>
        </Routes>


        <ToastContainer    position="top-right"
                           autoClose={5000}    theme="light"
        /><ToastContainer />

      </div>
  );
}

export default App;
