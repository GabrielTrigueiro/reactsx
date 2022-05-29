import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<p>teste de rota pagina inicial</p>}/>
            <Route path="/pagina-login" element={<Button variant="contained" color="primary">Login</Button>}/>
            
            {/* redireciona para a página inicial caso não atenda nenhuma das rotas a cima */}
            <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
        </Routes>
    );
}