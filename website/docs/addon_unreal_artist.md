---
id: addon_unreal_artist
title: Unreal
sidebar_label: Unreal
---

## Working with AYON in Unreal Engine

AYON in Unreal Engine allows you to create, publish and manage assets and scenes across different projects and platforms. AYON handles tasks such as versioning, validation, synchronization, rendering and publishing in Unreal.

To launch **Unreal Engine** with AYON user does not use Epic Games Launcher but **AYON Launcher** instead.

import loaderVideoUE from './assets/unreal/artist/unreal_launch.mp4'

<video controls style={{width: "100%" }}>
  <source src={loaderVideoUE}/>
</video>


## Getting started with Unreal Engine in AYON

### Prerequisites

AYON supports Unreal Engine 5.0 and 5.1. To use it, you need to install the [AYON Integration plugin](https://temp.com) from the Unreal Marketplace.

## Unreal project and data structure

While other hosts in AYON have specific workfiles for each task, Unreal Engine is a bit different.
An Unreal project is made by design to contain all the content of a project, so it wouldn't make sense to have more than one.
We recommend creating a task in AYON specifically for Unreal, and use that task to manage the Unreal project.
This way user selects the dedicated task for Unreal Project in AYON Launcher and launch it by UE icon at the bottom.

![Unreal Launcher](assets/unreal/artist/unreal_launcher.png)


:::note
For linear animation projects, and in particular for episodic formats, we still recommend keeping only one Unreal project. Having a project for each episode would result in duplicated data between the episodes, and it would be hard to manage.
:::


### AYON Menu and Tools

import loaderVideoUE2 from './assets/unreal/artist/unreal_menu.mp4'

<video controls style={{width: "100%" }}>
  <source src={loaderVideoUE2}/>
</video>

The AYON menu will be the main tool to interact with AYON in Unreal. It will allow you to create, load, publish and manage assets.

-   [Load](artist_tools_loader) is the tool to load assets from AYON into Unreal.
-   [Publisher](artist_tools_publisher) is the tool to create and publish assets from Unreal to AYON.
-   [Manage (Inventory)](artist_tools_inventory) is the tool to manage loaded assets.
-   *Render* starts the render for a selected `AyonPublishInstance`.
-   *Experimental tools* contains tools under developement.


![Unreal AYON Menu](assets/unreal/artist/unreal_ayon_menu.png)

### Default structure

The structure of the project data is handled by AYON. The first time you create an instance or load an asset, AYON will create a folder called `AYON` in the Content Browser. This folder will contain all the data handled by AYON, and it is organised as follows:

- `/Content/AYON/Assets` contains all the single assets that are loaded from AYON.
- `/Content/AYON/PublishInstances` contains all the instances that are created in Unreal.
- The rest of the directories contain all shot data of your AYON project, keeping same structure as the AYON project. In particular, they contain the levels and level sequences that are generated when you load Layout and Camera assets via **Load** tool.

![Unreal AYON Assets](assets/unreal/artist/unreal_ayon_assets.png)

:::note
AYON data folders are color coded by unique color scheme for easier navigation. As seen on the picture above.
:::

### DataAssets

AYON introduces two type of Unreal Assets acting as sort of containers: `AyonAssetContainer`

![Unreal AYON Asset CON](assets/unreal/artist/unreal_asset_con.png)

and `AyonPublishInstance`.
 
![Unreal AYON Asset Publish](assets/unreal/artist/unreal_asset_publish.png)

These assets are **used only to manage Ayon metadata** in Unreal, and they are not meant to be used directly in the scene. The first ones, with `_CON` suffix in the name, are used to store metadata of loaded assets, while the second ones, with `_INS` suffix in the name, for metadata of assets that are going to be published.

## Static and Skeletal Meshes

Unreal handles models and rigs as [Static](https://docs.unrealengine.com/en-US/Engine/Content/Importing/FBX/StaticMeshes/index.html) and [Skeletal](https://docs.unrealengine.com/en-US/Engine/Content/Importing/FBX/SkeletalMeshes/index.html) Meshes.
These meshes can be loaded as FBX or as Alembic. The latter can be also be loaded as a point cache, but with some [limitations](https://docs.unrealengine.com/5.1/en-US/alembic-file-importer-in-unreal-engine/).

### Loading

To load a Mesh, follow these steps:
- Choose **AYON → Load ...**.
- Right-click your mesh.
- Select **Import Static Mesh** or **Import Skeletal Mesh**.

![Unreal AYON Tools Load](assets/unreal/artist/unreal_ayon_menu_load.png)
![Unreal AYON Load Model](assets/unreal/artist/unreal_load_model.png)

The meshes will be loaded in the `/Content/AYON/Assets` folder, and they will be automatically added to the `AyonAssetContainer` asset that is created in the same folder. The Container will only contain the metadata of the asset, and it will not be used in the scene. Instead, in the same folder you will find the imported mesh, which can be added to the scene [as usual](https://docs.unrealengine.com/5.1/en-US/assets-and-content-packs-in-unreal-engine/).

### Updating

To manage loaded assets, click on the AYON icon in Unreal’s main taskbar, and select **Manage**.

![Unreal AYON Tools Manage](assets/unreal/artist/
unreal_ayon_menu_manage.png)

You will get a list of all the assets that have been loaded in the project.
The version number will be in red if it isn’t the latest version.

To update the asset:
- Right click on the element that has available updates.
- Click **Update**.

### Publishing

To publish a mesh from Unreal, you need to create a publish instance.

- Select the mesh in the Content Browser. 
- Click on **AYON → Publisher ...** to open the Publisher screen.
  - On the top bar, switch to the **Create** tab.
  - In the Creator screen, select *Static Mesh* or *Skeletal Mesh*.
  - Set the name of the product.
  - Set *Use selection*.
  - Click on **Create**. This will create a `AyonPublishInstance` file in `/Content/AYON/PublishInstances`, with the metadata necessary to publish the asset.

![Unreal AYON Tools Publisher](assets/unreal/artist/unreal_ayon_menu_publisher.png)
![Unreal AYON Create Model](assets/unreal/artist/unreal_create_staticmesh.png)

- Click on **AYON → Publisher ...** to open the Publisher screen.
  - On the top bar, switch to the **Publish** tab.
  - On the left, you will see all the publish instances that you have created. 
  - Select the ones that you want to publish, and click on **Publish**.

## Look development

AYON supports look development in Unreal Engine.

### Loading model

First, you will need a model as Static Mesh. To load it: 
- Click on **AYON → Load ...**.
- Right-click your mesh.
- Select **Import Static Mesh**.

![Unreal AYON Tools Load](assets/unreal/artist/unreal_ayon_menu_load.png)
![Unreal AYON Load Model](assets/unreal/artist/unreal_load_model.png)

You will find the loaded Static Mesh in `/Content/AYON/Assets`.

### Creating look

To create the look, you will need to create the [Materials](https://docs.unrealengine.com/5.1/en-US/Engine/Rendering/Materials/) for the model you loaded, and assign them to the model. You can create the materials in Unreal, or you can import them from AYON as UAsset.

### Publishing look

To publish a look from Unreal, you need to create a publish instance.

- Select the model with the materials in the Content Browser.
- Click on **AYON → Publisher ...** to open the Publisher screen.
  - On the top bar, switch to the **Create** tab.
  - In the Creator screen, select *Look*.
  - Set the name of the product.
  - Click on **Create**. This will create a `AyonPublishInstance` file in `/Content/AYON/PublishInstances`, with the metadata necessary to publish the asset.

![Unreal AYON Tools Publisher](assets/unreal/artist/unreal_ayon_menu_publisher.png)
![Unreal AYON Create Look](assets/unreal/artist/unreal_create_look.png)

- Click on **AYON → Publisher ...** to open the Publisher screen.
  - On the top bar, switch to the **Publish** tab.
  - On the left, you will see all the publish instances that you have created. 
  - Select the ones that you want to publish, and click on **Publish**.

To get the look ready to be publishable, AYON will create a new folder `/Content/AYON/Looks`. In here, it will be created a folder that will contain a simple model with the materials you created assigned, that will be used to publish the look. This folder will be named after product name you chose when creating the instance. You don't need to do anything with this folder, it is just for the publishing process.

## UAssets

Unreal Engine uses [UAssets](https://docs.unrealengine.com/5.1/en-US/working-with-assets-in-unreal-engine/) to store assets. AYON supports publishing and loading of this kind of assets.

### Loading

To load a UAsset, follow these steps:
- Choose **AYON → Load ...**.
- Right-click your asset.
- Select **Load UAsset**.

![Unreal AYON Tools Load](assets/unreal/artist/unreal_ayon_menu_load.png)

The UAssets will be loaded in the `/Content/AYON/Assets` folder, and they will be automatically added to the `AyonAssetContainer` asset that is created in the same folder. The Container will only contain the metadata of the asset, and it will not be used in the scene.

### Updating

To manage loaded assets, click on the AYON icon in Unreal’s main taskbar, and select **Manage**.

![Unreal AYON Tools Manage](assets/unreal/artist/unreal_ayon_menu_manage.png)

You will get a list of all the assets that have been loaded in the project.
The version number will be in red if it isn’t the latest version.

To update the asset:
- Right click on the element that has available updates.
- Click **Update**.

### Publishing

:::note
Publishing UAssets has some limitations currently. You can only publish a single UAssets, and it must not have any dependencies.
:::

To publish a UAsset, you need to create a publish instance.

- Select the UAsset in the Content Browser. 
- Click on **AYON → Publisher ...** to open the Publisher screen.
  - On the top bar, switch to the **Create** tab.
  - In the Creator screen, select *UAsset*.
  - Set the name of the product.
  - Click on **Create**. This will create a `AyonPublishInstance` file in `/Content/AYON/PublishInstances`, with the metadata necessary to publish the asset.

![Unreal AYON Tools Publisher](assets/unreal/artist/unreal_ayon_menu_publisher.png)
![Unreal AYON Create Uasset](assets/unreal/artist/unreal_create_uasset.png)

- Click on **AYON → Publisher ...** to open the Publisher screen.
  - On the top bar, switch to the **Publish** tab.
  - On the left, you will see all the publish instances that you have created.
  - Select the ones that you want to publish, and click on **Publish**.

## Layouts for linear animation

There are two different layout options in Unreal, depending on the type of project you are working on. This section explains how to handle layouts for linear animation. To do this, AYON generates [Master Sequences](https://docs.unrealengine.com/5.1/en-US/master-sequences-shots-and-takes-in-unreal-engine/) to track the whole level sequence hierarchy.
To set this mode, you should turn **on** the setting *Generate level sequences when loading layouts* in AYON **Project Settings → Unreal Engine**.

![Unreal AYON Settings Level Sequence](assets/unreal/artist/unreal_setting_level_sequence_on.png)

### Loading

To load a layout, follow these steps:
- Choose **AYON → Load ...**.
- Right-click your layout.
- Select **Load Layout**.

![Unreal AYON Tools Load](assets/unreal/artist/unreal_ayon_menu_load.png)
![Unreal Layout Load](assets/unreal/artist/unreal_load_layout.png)

If you need to load multiple layouts, you can select more than one task on the left, and you can load them together.

![Unreal Layout Load Batch](assets/unreal/artist/unreal_load_layout_batch.png)

### Navigating the project

The layout will be imported in the directory `/Content/AYON`. The layout will be split into two subfolders. In `/Content/AYON/Assets` you will find all the rigs and models contained in the layout, while the folder with the name of the layout will contain the levels and the level sequences.

Typically, in a linear animation project, the project will be split into several shots, and shots are organised in scenes. If the project is episodic, scenes will also be organised in episodes. To reflect this structure, whenever you load a layout, AYON will create the same hierarchy of your project with [Level Sequences](https://docs.unrealengine.com/5.1/en-US/unreal-engine-sequencer-movie-tool-overview/) and Levels.

Cameras and Layouts follow the same structures, so when loading one of the two, you will get the same hierarchy. If you load one of them first, the whole hierarchy will be generated. If you load the other one later, and the hierarchy was already generated, the new asset will be added to the existing hierarchy.

In the main folder of the layout (or the episode folder, in case of an episodic project), you will find the *master level* and the *master level sequence* and the folders for all the scenes in the episodes. AYON is then flexible to accomodate any kind of project structure, and each layer will have its own level sequence. Finally, each shot will have again their own level sequence, and their own level.

#### Adding environment or lighting to the master level

After opening the master level, open the *Levels* window (from the menu **Windows → Levels**), and you will see the list of the levels of each shot of the episode for which a layout has been loaded.

![Unreal Level List](assets/unreal/artist/unreal_level_list.png)

Here you will be able to add any other level that you need to the master level. For example, you can add the environment level to the master level, so that it is always loaded when you open the master level, or any level that contains the lighting.

To add a level to the master level:

- Open the *Levels* window from the menu  **Windows → Levels**.
- Click on the **Levels** menu in the top right corner of the window.
- Click **Add Existing...**.
- Select the level you want to add to the master level.

![Unreal Add Level](assets/unreal/artist/unreal_add_level.png)

After adding the environment level to the master level, you will need to set it as always loaded by right clicking it, and selecting **Change Streaming Method** and selecting **Always Loaded**.

![Unreal Level Streaming Method](assets/unreal/artist/unreal_level_streaming_method.png)

Otherwise, you will need to set the visibility in the master sequence.

<!-- TODO: Add image of visibility track from level sequence -->

### Updating

To manage loaded layouts, click on the AYON icon in Unreal’s main taskbar, and select **Manage**.

![Unreal AYON Tools Manage](assets/unreal/artist/unreal_ayon_menu_manage.png)

You will get a list of all the assets that have been loaded in the project.
The version number will be in red if it isn’t the latest version.

To update the layout:
- Right click on the element that has available updates.
- Click **Update**.

:::warning
**DO NOT** update rigs or models imported with a layout. Update only the layout.
:::

## Layouts for interactive projects

There are two different layout options in Unreal, depending on the type of project you are working on. This section explains how to handle layouts for interactive projects. In this case, AYON will not generate the level sequences hierarchy, but will load the layout in a single level and with a single level sequence.
To set this mode, you should turn **off** the setting *Generate level sequences when loading layouts* in AYON **Project Settings → Unreal Engine**.

![Unreal AYON Settings Level Sequence](assets/unreal/artist/unreal_setting_level_sequence_off.png)

### Loading

To load a layout, follow these steps:
- Choose **AYON → Load ...**.
- Right-click your layout.
- Select **Load Layout**.

![Unreal AYON Tools Load](assets/unreal/artist/unreal_ayon_menu_load.png)
![Unreal Layout Load](assets/unreal/artist/unreal_load_layout.png)

The layout will be imported in the directory `/Content/AYON`. The layout will be split into two subfolders. In `/Content/AYON/Assets` you will find all the rigs and models contained in the layout, while the folder with the name of the layout will contain the levels and the level sequences.

The layout level will and should contain only the data included in the layout. To add other elements, like the environment or the lighting, you have to create a *master level*, and add the layout level as a [streaming level](https://docs.unrealengine.com/5.1/en-US/level-streaming-in-unreal-engine/).

- Create the master level.
  - To create a level, click on **File → New Level**.
  - Select **Empty Level** or one of the presets.
  - Save the level.
- Open the master level.
- Open the *Levels* window from the menu  **Windows → Levels**.
- Click on the **Levels** menu in the top right corner of the window.
- Click **Add Existing...**.
- Select the level you want to add to the master level.

The following example shows a master level in which have been added a level with lighing and the layout level.

![Unreal Add Level](assets/unreal/artist/unreal_add_level.png)
![Unreal Level List](assets/unreal/artist/unreal_level_list_no_sequences.png)

### Updating

To manage loaded layouts, click on the AYON icon in Unreal’s main taskbar, and select **Manage**.

![Unreal AYON Tools Manage](assets/unreal/artist/unreal_ayon_menu_manage.png)

You will get a list of all the assets that have been loaded in the project.
The version number will be in red if it isn’t the latest version.

To update the layout:
- Right click on the element that has available updates.
- Click **Update**.

:::warning
**DO NOT** update rigs or models imported with a layout. Update only the layout.
:::

### Publishing layouts

To publish a layout, you need to create a publish instance.

- Open a level from which you want to publish a layout from.
- Select the actors you want to include in the layout.
- Click on **AYON → Publisher ...** to open the Publisher screen.
  - On the top bar, switch to the **Create** tab.
  - In the Creator screen, select *UAsset*.
  - Set the name of the product.
  - Click on **Create**. This will create a `AyonPublishInstance` file in `/Content/AYON/PublishInstances`, with the metadata necessary to publish the layout.

![Unreal AYON Tools Publisher](assets/unreal/artist/unreal_ayon_menu_publisher.png)
![Unreal AYON Create Layout](assets/unreal/artist/unreal_create_layout.png)

- Click on **AYON → Publisher ...** to open the Publisher screen.
  - On the top bar, switch to the **Publish** tab.
  - On the left, you will see all the publish instances that you have created.
  - Select the ones that you want to publish, and click on **Publish**.

## Layout on existing project

In case you already loaded the assets in Unreal, or imported them manually, and have assembled a scene in Unreal, you can still load the layout to match the existing assets. 

- Publish a layout from Maya or Blender.
- In Unreal, open a level that contains the assets you want to match with the layout.
- Choose **AYON → Load ...**.
- Right-click your layout.
- Select **Load Layout on Existing Scene**.

![Unreal AYON Tools Load](assets/unreal/artist/unreal_ayon_menu_load.png)
![Unreal Layout Load](assets/unreal/artist/unreal_load_layout_existing.png)

This will create the *AyonAssetContainer* for each asset you have in the scene that does not have one yet, and will create the *AyonAssetContainer* for the layout.

You have the option, in **Project Settings → Unreal Engine** to delete any unmatched asset in the scene.

## Cameras with master sequences

There are two different camera options in Unreal, depending on the type of project you are working on. This section explains how to handle cameras with the generation of [Master Sequences](https://docs.unrealengine.com/5.1/en-US/master-sequences-shots-and-takes-in-unreal-engine/).
To set this mode, you should turn **on** the setting *Generate level sequences when loading layouts* in AYON **Project Settings → Unreal Engine**.

![Unreal AYON Settings Level Sequence](assets/unreal/artist/unreal_setting_level_sequence_on.png)

### Loading

To load a camera, follow these steps:
- Choose **AYON → Load ...**.
- Right-click your camera.
- Select **Load Camera**.

<!-- TODO: Change images to camera -->

![Unreal AYON Tools Load](assets/unreal/artist/unreal_ayon_menu_load.png)
![Unreal Layout Load](assets/unreal/artist/unreal_load_camera.png)

If you need to load multiple cameras, you can select more than one task on the left, and you can load them together.

![Unreal Layout Load Batch](assets/unreal/artist/unreal_load_camera_batch.png)

### Navigating the project

The camera will be imported in the directory `/Content/AYON`.

Typically, in a linear animation project, the project will be split into several shots, and shots are organised in scenes. If the project is episodic, scenes will also be organised in episodes. To reflect this structure, whenever you load a camera (or a layout), AYON will create the same hierarchy of your project with [Level Sequences](https://docs.unrealengine.com/5.1/en-US/unreal-engine-sequencer-movie-tool-overview/) and Levels.

Cameras and Layouts follow the same structures, so when loading one of the two, you will get the same hierarchy. If you load one of them first, the whole hierarchy will be generated. If you load the other one later, and the hierarchy was already generated, the new asset will be added to the existing hierarchy.

In the main folder of the camera (or the episode folder, in case of an episodic project), you will find the master level and the master level sequence and the folders for all the scenes in the episodes. AYON is then flexible to accomodate any kind of project structure, and each layer will have its own level sequence. Finally, each shot will have again their own level sequence, and their own level.

### Updating

To manage loaded cameras, click on the AYON icon in Unreal’s main taskbar, and select **Manage**.

![Unreal AYON Tools Manage](assets/unreal/artist/unreal_ayon_menu_manage.png)

You will get a list of all the assets that have been loaded in the project.
The version number will be in red if it isn’t the latest version. 

To update the camera:
- Right click on the element that has available updates.
- Click **Update**.

## Cameras for a single level

Cameras do not require a master sequence. If you are working on a project that does not require a master sequence, you can simply load the camera in the level you currently have open.
To set this mode, you should turn **off** the setting *Generate level sequences when loading layouts* in AYON **Project Settings → Unreal Engine**.

![Unreal AYON Settings Level Sequence](assets/unreal/artist/unreal_setting_level_sequence_off.png)

### Loading

To load a camera, follow these steps:
- Choose **AYON → Load ...**.
- Right-click your camera.
- Select **Load Camera**.

![Unreal AYON Tools Load](assets/unreal/artist/unreal_ayon_menu_load.png)
![Unreal Layout Load](assets/unreal/artist/unreal_load_camera.png)

In `/Content/AYON` you will find a folder with the name of the camera that contains the camera level sequence. The camera will be loaded in the current level open, so you will need to save it, if you haven’t already.

### Updating

To manage loaded cameras, click on the AYON icon in Unreal’s main taskbar, and select **Manage**.

![Unreal AYON Tools Manage](assets/unreal/artist/unreal_ayon_menu_manage.png)

You will get a list of all the assets that have been loaded in the project.
The version number will be in red if it isn’t the latest version. 

To update the camera:
- Right click on the element that has available updates.
- Click **Update**.

## Animations

:::note
Loading animations requires a layout loaded with the option to create the level sequences **on**.
:::

AYON allows you to load animations in Unreal. To load an animation, you will first need to load a layout with the option to create the level sequences **on**. This is because the animations will be added to the same level sequences generated for the layout.

### Loading the layout

To load a layout, follow these steps:
- Choose **AYON → Load ...**.
- Right-click your layout.
- Select **Load Layout**.

![Unreal AYON Tools Load](assets/unreal/artist/unreal_ayon_menu_load.png)
![Unreal Layout Load](assets/unreal/artist/unreal_load_layout.png)

The layout will be imported in the directory `/Content/AYON`. For more information, we recommend reading the section dedicated to the [layout for linear animation](#layouts-for-linear-animation).

### Loading the animation

To load an animation, follow these steps:
- Choose **AYON → Load ...**.
- Right-click your animation.
- Select **Load Animation**.

![Unreal AYON Tools Load](assets/unreal/artist/unreal_ayon_menu_load.png)
![Unreal Layout Load](assets/unreal/artist/unreal_load_animation.png)

The animation itself will be imported in `/Content/AYON/Animations`.
The animation will be added to the level sequence generated for the layout.

### Updating

To manage loaded animations, click on the AYON icon in Unreal’s main taskbar, and select **Manage**.

![Unreal AYON Tools Manage](assets/unreal/artist/unreal_ayon_menu_manage.png)

You will get a list of all the assets that have been loaded in the project.
The version number will be in red if it isn’t the latest version.

To update the animation:
- Right click on the element that has available updates.
- Click **Update**.

## Rendering

:::note
The rendering requires a layout loaded with the option to create the level sequences **on**.
:::

### Prerequisites

To render with AYON in Unreal, you will need to set a new root in AYON Project Settings. This root will be the folder where all the renders will be published.

- Open AYON Project Settings from the tray icon from **Admin → Studio Settings**
- Go to **Project Settings → Anatomy → Roots**.
- Add a new root with the name `renders`.
- Add the path you want to use for the renders. This path should be an absolute path.

![](assets/unreal/artist/unreal_rendering_root.png)

### Render settings

AYON offers a set of render settings that you can set from the Projects Settings. Settings like frame rate, frame range, and resolution can be set in the **Project Settings → Anatomy → Attributes**. Settings more specific to Unreal can be found in **Project Settings → Unreal Engine**, and these are:
- Render Format, Unreal supports **EXR**, **PNG**, **JPG** and **BMP**. 
- Pre-roll Frames, the amount of warm up frames that will be rendered before the actual render.

Additionally, AYON allows you to prepare a [preset of settings](https://docs.unrealengine.com/5.1/en-US/cinematic-render-settings-in-unreal-engine/) directly from the [Movie Render Queue](https://docs.unrealengine.com/5.1/en-US/render-cinematics-in-unreal-engine/) and pass them to the render. To do so, you will need to set the path of the preset in **Project Settings → Unreal Engine**.

### Creating the render instance for existing hierarchy

To render and publish an episode, a scene or a shot, you will need to create a Render `AyonPublishInstance`. The publish instance for the rendering is based on one level sequence. That means that if you want to render the whole project (or a the whole episode), you will need to create it for the master level sequence, but if you want to render just one shot, you will need to create it for that shot.

- Navigate to the folder that contains the level sequence that you need to render.
- Select the level sequence.
- Click on **AYON → Publisher ...** to open the Publisher screen.
  - On the top bar, switch to the **Create** tab.
  - In the Creator screen, select *Render*.
  - Set the name of the product.
  - Check the **Use Hierarchy** checkbox.
  - Click on **Create**. This will create a `AyonPublishInstance` file in `/Content/AYON/PublishInstances`, with the metadata necessary to render and publish it.

![Unreal AYON Tools Publisher](assets/unreal/artist/unreal_ayon_menu_publisher.png)
![Unreal AYON Create Render](assets/unreal/artist/unreal_create_render_use_hierarchy.png)

### Creating the render instance with new level sequence

To render just a scene, without creating a whole hierarchy, you can create an `AyonPublishInstance` and a new level sequence from the Publisher.

- Click on **AYON → Publisher ...** to open the Publisher screen.
  - On the top bar, switch to the **Create** tab.
  - In the Creator screen, select *Render*.
  - Set the name of the product.
  - Check the **Create a new Level Sequence** checkbox.
  - Set *Start* and *End Frames*.
  - Click on **Create**. This will create a `AyonPublishInstance` file in `/Content/AYON/PublishInstances`, with the metadata necessary to render and publish it.

![Unreal AYON Tools Publisher](assets/unreal/artist/unreal_ayon_menu_publisher.png)
![Unreal AYON Create Render](assets/unreal/artist/unreal_create_render_create_level_sequence.png)

### Start the rendering

To start the rendering, just select the render `AyonPublishInstance` you want to render, and then click on the AYON icon in Unreal’s main taskbar, and select **Render**. You can render more than one instance at a time, if needed. Just select all the instances that you need to render before selecting the **Render** button from the AYON menu.

![Unreal AYON Tools Render](assets/unreal/artist/unreal_ayon_menu_render.png)

### Publish the render

Once the render is finished, you can publish the render. Click on the AYON icon in Unreal’s main taskbar, and select **Publish**.

- Click on **AYON → Publisher ...** to open the Publisher screen.
  - On the top bar, switch to the **Publish** tab.
- On the left, you will see all the publish instances that you have created.
  - They will be automatically reorganised to have an instance for each shot. So, for example, if you have created the render instance for the whole episode, here you will have an instance for each shot in the episode.
- Select the ones that you want to publish, and click on **Publish**.

![Unreal AYON Tools Publish](assets/unreal/artist/unreal_ayon_menu_publisher.png)
