import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { hooks } from './data/data';
import Layout from './components/Layout';
import Home from './components/Home';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {hooks.map((hook) => {
            return (
              <Route
                key={hook.id}
                path={hook.path}
                element={
                  <Layout heading={hook.name} about={hook.about}>
                    {hook.component}
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
