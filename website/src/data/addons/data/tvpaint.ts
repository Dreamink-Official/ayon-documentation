import { type Addon } from "../types";
import versions from "@site/docs/assets/json/Ayon_addons_version.json";

const addon: Addon = {
    title: "TVPaint",
    description:
        "TVPaint Animation is a 2D animation software that allows users to create and edit animations with a variety of tools and features. ",
    icon: "tvpaint-icon.png",
    badge: versions.TVPaint_Badge,
    features: ["localRendering", "workfiles", "reviewables"],
    products: ["image", "audio"],
    docs: {
        user: "addon_tvpaint_artist",
        admin: "addon_tvpaint_admin",
    },
    github: "https://github.com/ynput/OpenPype/tree/develop/openpype/hosts/tvpaint",
};

export default addon;
