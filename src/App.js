import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Ivinteach from "./Ivin";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import Category from "./Main/Category";
import Plp from './Pages/Plp';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import Weather from './Other/Weather';
import { Home } from './Main/Home';
import Pdp from './Pages/Pdp';
import MyAdmin from './Admin/MyAdmin';
import HeroBanner from './Main/HeroBanner';
import NotFound from './Redirects/NotFound';  // Import the NotFound component
import NavBar from './NavBar';
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import OrderConfirmation from "./Pages/OrderConfirmation"; // Import the NavBar component

const MainLayout = ({ children }) => (
    <>
        <Header />
        <NavBar />  {/* Include NavBar here */}
        <Category />
        <Weather />
        <p className="avatar">Test avatar</p>
        <h1>Welcome to my app</h1>
        <MyButton />
        <Ivinteach />
        {children}
        <Footer />
    </>
);

const HomeLayout = ({ children }) => (
    <>
        <Header />
        <NavBar />  {/* Include NavBar here */}
        <Category />
        <HeroBanner />
        <Weather />
        <p className="avatar">Test avatar</p>
        <h1>Welcome to my app</h1>
        <MyButton />
        <Ivinteach />
        {children}
        <Footer />
    </>
);

const AppContent = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname === "/admin/index";

    return (
        <Routes>
            {!isAdminRoute && (
                <>
                    <Route
                        path="/"
                        element={
                            <HomeLayout>
                                <Home />
                            </HomeLayout>
                        }
                    />
                    <Route
                        path="/Home"
                        element={
                            <HomeLayout>
                                <Home />
                            </HomeLayout>
                        }
                    />
                    <Route
                        path="/plp"
                        element={
                            <MainLayout>
                                <Plp />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/plp/pdp"
                        element={
                            <MainLayout>
                                <Pdp />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <MainLayout>
                                <Cart />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/checkout"
                        element={
                            <MainLayout>
                                <Checkout />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/order-confirmation"
                        element={
                            <MainLayout>
                                <OrderConfirmation />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/Login"
                        element={
                            <MainLayout>
                                <Login />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/Sign-up"
                        element={
                            <MainLayout>
                                <SignUp />
                            </MainLayout>
                        }
                    />
                </>
            )}
            <Route path="/admin/index" element={<MyAdmin />} />
            <Route path="*" element={<NotFound />} /> {/* Render NotFound for any unmatched routes */}
        </Routes>
    );
};

function App() {
    return (
        <div className="App">
            <AppContent />
        </div>
    );
}

function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

export default function MyApp() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
