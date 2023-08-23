import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layouts";
import { Fragment } from "react";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        var Page = route.component;
                        var Layout = DefaultLayout;

                        if (route.layout) {
                            console.log(route.layout);
                            Layout = route.layout;
                        } else if (route.layout === null) Layout = Fragment;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
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

export default App;
