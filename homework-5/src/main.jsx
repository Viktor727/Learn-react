import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import HomePage from './pages/HomePage.jsx'
import CountryPage from "./pages/CountryPage.jsx";
import CountriesListPage from './pages/CountriesListPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/countries/:country",
    element: <CountryPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/countries",
    element: <CountriesListPage />,
    // errorElement: <ErrorPage />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


// Tech stack:

// ✅React
// ✅React Router
// ✅Redux
// ✅react-redux
// 🌟 redux-thunk - ну я підключив трохи інший мідлвейр (getDefaultMiddleware)
// ✅🌟 redux-toolkit
// ✅🌟 MUI


// Routes:

// 1. Home
// Page components: 
// ✅Home Component. A component for displaying text, for example <h3>Home Component 🏡</h3> 
// ✅Country Form Component. A component with a form. Compound forms:
// Select with capitals of countries – property country.capitals[0]. Example for Ukraine: <option>🇺🇦 Kyiv</option>.❗️Important when choosing the capital:
// In the second Select with languages, a corresponding list of country.translations should be created.
// In button Read more about {country} the corresponding name of the country is formed.
// Select with the selection of the translation language of the country – property country.translations. Example for Ukraine:
// <option>ara</option>
// <option>bre</option>
// <option>ces</option>
// Read more about {country} button, where country – the name of the country depending on the selected capital in the first Select with a list of capitals.
// When submitting the form, a redirect to the page "/countries/{country}?translation={translation}" should work, where {country} is the country according to the selected capital in the first Select, {translation} is the selected language from the second Select.

// 2. Countries
// Page components:
// Countries List Component. A component for displaying a list of countries. Each item on the list consists of:
// The country flag is the country.flag property.
// The country name is the country.name.official property. Clicking on the country name should trigger a redirect to the"/countries/{country}" page, where {country} is the corresponding country name.
// Delete button. When you click on the button, the item is removed from the list and from store.countries.

// 3. Country
// Page components:
// Country Card Component. A component for displaying country data. The card consists of:
// <h3>{сountry name}</h3>, where {сountry name} – property country.name.official.
// ❗️Important: if the transition to the Country page occurred when submitting the CountryFormComponent, then depending on the value of the translation parameter in searchParam, the {country name} value will be output from the country.translations[{translation}].official property. For example, if the capital Kyiv and the language "ces" were selected on the Home page in the form, then when submitting the form, a redirect to the page "/countries/Ukraine?translation=ces" is activated. In h3 there will be the name of the country "Ukrajina" from the property country.translations["ces"].official.
// List with all country data. All properties are displayed in a loop.
// Delete button. When pressing the button:
// The country object is removed from store.countries
// Redirecting to the Countries page.
// Redirect Button Component. A component for displaying a button that, when pressed, will trigger a redirect to the specified route. For example, for the Country page, the button will have the text "Back to Countries" and will redirect to the "countries" route.


