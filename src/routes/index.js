import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import UploadLayout from "~/components/Layouts/UploadLayout";

export const publicRoutes = [
    {
        path: "/",
        component: Home,
    },

    {
        path: "/following",
        component: Following,
    },
    {
        path: "/upload",
        component: Upload,
        layout: UploadLayout,
    },
];

export const privateRoutes = [];
