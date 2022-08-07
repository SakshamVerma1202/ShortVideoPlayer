import {
    videologSaveAction,
    videologGetAction,
    videologDeleteAction,
    videologFindAction,
    videologGetLatestVideos,
    videologSearch,
} from "./controller/videologAction";

import {
    userSaveAction,
    getAllUser,
    loginAction,
    getFunc
} from "./controller/userAction";

import {
    fileUploadAction
} from "./controller/fileUploader"

/**
 * All application routes.
 */

export const AppRoutes = [
    {
        path:"/",
        method: "get",
        action: getFunc
    },
    {
        path: "/videolog",
        method: "post",
        action: videologSaveAction
    },
    {
        path: "/videolog",
        method: "get",
        action: videologGetAction
    },
    {
        path: "/latestvideolog",
        method: "get",
        action: videologGetLatestVideos
    },
    {
        path: "/videolog/:videoName",
        method: "get",
        action: videologFindAction
    },
    {
        path: "/videolog/:videoName",
        method: "delete",
        action: videologDeleteAction
    },
    {
        path: "/videolog/upload",
        method: "post",
        action: fileUploadAction
    },
    {
        path: "/videolog/search/:videoName",
        method: "get",
        action: videologSearch
    },
    {
        path: "/users",
        method: "post",
        action: userSaveAction
    },
    {
        path: "/users",
        method: "get",
        action: getAllUser
    },
    {
        path: "/users/login",
        method: "post",
        action: loginAction
    },
];