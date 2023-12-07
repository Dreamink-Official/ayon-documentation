import { type Addon } from "../types";
import versions from "@site/docs/assets/json/Ayon_addons_version.json";

const addon: Addon = {
    title: "Deadline",
    description:
        "Deadline is a vfx localRendering farm software that manages jobs and helps you get renders done faster.",
    preview: "deadline.png",
    badge: versions.Deadline_Badge,
    docs: {
        developer: "dev_deadline",
        admin: "addon_deadline_admin",
    },
    features: [
        "publisher", 
        "colorManaged", 
        "farmRendering", 
        "reviewables", 
        "slates"],
    products: ["render", "plate", "image", "review", "pointcache", "prerender"],
    addons: ["nuke", "harmony", "maya", "afterEffects"],
};

export default addon;
