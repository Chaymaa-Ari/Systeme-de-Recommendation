// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import Topbar from "D:/IID2/S2/Projet tuto/Django/frontend/src/Components/Topbar.js";
import Sidebar from "D:/IID2/S2/Projet tuto/Django/frontend/src/Components/Sidebar.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "D:/IID2/S2/Projet tuto/Django/frontend/src/Components/theme/theme.js";
import './Adm.css';
import Search from 'D:/IID2/S2/Projet tuto/Django/frontend/src/Components/search.js';

//import Calendar from "./scenes/calendar/calendar";

function Adm() {


    const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
         <Sidebar/>
          <main className="content">
            <Topbar />
            <Search/>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
   
  );
}

export default Adm;
