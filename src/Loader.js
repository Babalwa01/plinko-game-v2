import { LoaderConfig } from "./LoaderConfig";
import { Globals } from "./Globals";

export class Loader {
    constructor(loader) {
        this.loader = loader;
        this.resources = LoaderConfig;
    }

    /**
     * 
     * @returns promise and loads images after promise is resolved
     */
    preload() {
        return new Promise(resolve => {
            for(let key in this.resources) {
                this.loader.add(key, this.resources[key]);
            }

            this.loader.load((loader, resources) => {
                Globals.resources = resources;
                console.log("resources loaded!", resources);
                resolve();
            });
        });
    }
}