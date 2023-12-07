import { type Addon } from "../types";
import versions from "@site/docs/assets/json/Ayon_addons_version.json";

const addon: Addon = {
    title: "Royal Render",
    description:
        "Royal Render is a powerful render farm management application that helps you organize, control, and check your renders.",
    icon: "royal-render-icon.png",
    badge: versions.RoyalRender_Badge,
    github: "https://github.com/ynput/OpenPype/tree/develop/openpype/hosts/royal_render",
};

export default addon;
