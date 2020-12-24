## UI Template Information

### What is this?
This is a small template I have put together to help beginners with creating experimental UI. This part of Minecraft Addon Development has very little documentation. In my efforts to give you a smooth gateway into experimental UI, you have this template. It's small and simple to understand.

### Structure Analysis
I'll run through the files and folders in the template, explaining their purpose.

#### Folder: `behaviours`
This folder contains all the resources related to the behaviour pack side of the template.

Contents
- Folder `scripts` - Contains the scripts used in the template. This folder contains two folders, `client` and `server`. Each one of the folders containing a single javascript file.
- File `manifest.json` - This defines the properties of the behaviour pack. The name, description, metadata, etc, will be in this file.
- File `pack_icon.png` - The behaviour pack's icon.

The `manifest.json` and `pack_icon.png` serve the same purpose in the `resources` folder so I will not be explaining them again.

#### Folder: `resources`
This folder contains all the resources related to the resource pack side of your project. This is also where the source file for the ui itself will be kept.

Contents
- Folder `experimental_ui` - See [Experimental UI](#folder-experimental_ui-)
- File `manifest.json`
- File `pack_icon.png`

##### Folder `experimental_ui`
This is a sub folder of `resources`. This is where UI related things will be done. I'll assume you have basic knowledge of HTML and CSS.

Contents
- Folder `assets` - This is where any static assets **aside** the styles(css) and the javascript files.
- Folder `js` - Contains all the javascript file to be used in your project.
- Folder `lib` - This contains all the external libraries you'll use in your project. The file, `UIEngine.js`, that allows for interaction with the scripting API is kept here as well.
- Folder `styles` - Contains the .css files to be used in your project.
- Folder `views` - This folder is where the html files used in your project should be kept.

Note: When loading UI, remember, the file path must be relative to the `experimental_ui` folder. **DO NOT FORGET TO TURN ON ADDITIONAL MODDING CAPABILITIES**

### Useful resources
[Scripting Tutorial](https://wiki.bedrock.dev/scripting/hello-world-tutorial)

[Scripting Documentation](https://bedrock.dev/docs/stable/Scripting)

[UI Documentation](https://bedrock.dev/docs/stable/UI)

Note: The last two links are unofficial documentation. They are as close to the official docs as possible. The links may be subject to change.

### Additional Information
You might find having a development server useful. You'll be able to preview your changes to the UI without opening minecraft. If you have python installed, you can use **http.server** like  or alternatively with nodejs, you can install **live-server**. There are multiple to choose from so I'll leave that decision to you.







