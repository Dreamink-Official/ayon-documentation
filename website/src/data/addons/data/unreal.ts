import { type Addon } from "../types";
import versions from "@site/docs/assets/json/Ayon_addons_version.json";

const addon: Addon = {
    title: "Unreal Engine",
    description:
        "Unreal Engine is a powerful real-time 3D creation tool used by game developers, architects, filmmakers, and others.",
    descriptionLong:`
Unreal Engine is a powerful real-time 3D creation tool used by game developers, architects, filmmakers, and others.

**Versions**: \`5.0\`, \`5.1\`
    `,
    preview: "unreal.png",
    badge: versions.Unreal_Badge,
    features: [
        "loader",
        "publisher",
        "sceneManager",
    ],
    products: [
        "model",
        "pointcache",
        "look",
        "rig",
        "layout",
        "camera",
        "render",
    ],
    docs: {
        user: "addon_unreal_artist",
        admin: "addon_unreal_admin",
    },
    github: "https://github.com/ynput/OpenPype/tree/develop/openpype/hosts/unreal",
};

export default addon;
