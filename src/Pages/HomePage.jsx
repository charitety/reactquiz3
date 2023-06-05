import React from "react";
import {TodoList} from "../Components/TodoList";
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Router, Routes } from "react-router-dom";


export const HomePage = () => {

    const myQueryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={myQueryClient}>
                {/* <BrowserRouter>
                <Routes> */}
                <TodoList />
                {/* </Routes>
                </BrowserRouter> */}
               
            </QueryClientProvider>
        </>
    )
}