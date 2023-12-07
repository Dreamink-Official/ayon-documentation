import { type Addon } from "../types";
import versions from "@site/docs/assets/json/Ayon_addons_version.json";

const addon: Addon = {
    title: "Fusion",
    description:
        "Fusion is a visual effects and motion graphics tool that helps you create high-quality effects.",
    badge: versions.Fusion_Badge,
    docs: {
        user: "artist_hosts_resolve",
        admin: "admin_hosts_resolve",
    },
    products: ["image", "review", "render", "plate", "model", "pointcache"],
    features: [
        "workfiles",
        "loader",
        "publisher",
        "sceneManager",
        "libraryLoader",
        "reviewables",
        "slates",
        "colorManaged",
        "localRendering",
        "farmRendering",
        "nodePresets",
    ],
    icon: "fusion-icon.png",
    github: "https://github.com/ynput/OpenPype/tree/develop/openpype/hosts/fusion",
};

export default addon;
