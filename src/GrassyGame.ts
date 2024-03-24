import "./normalize.css";
import "./App.css";

import Phaser, { Types } from "phaser";

function assertDefined<T>(value: T | undefined | null): asserts value is T {
  if (value === undefined || value === null) {
    throw new Error("Value is undefined or null");
  }
}

/** Game construction */
export const createGame = (root: HTMLElement) => {
  const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 480 * 2,
    height: 320 * 2,
    parent: root,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0, x: 0 },
        debug: false,
      },
    },
    pixelArt: true,
    scene: {
      preload: function () {
        this.load.tilemapTiledJSON("world", "world/cat-world-1.json");
        this.load.image("grassTiles", "/world/sproutlands/tilesets/Grass.png");
        this.load.image(
          "biomeTiles",
          "/world/sproutlands/objects/Basic_Grass_Biom_things.png"
        );
        this.load.image("pathsTiles", "/world/sproutlands/objects/Paths.png");
        this.load.image("hillsTiles", "/world/sproutlands/tilesets/Hills.png");
        this.load.image(
          "milkTiles",
          "/world/sproutlands/objects/Simple_Milk_and_grass_item.png"
        );
        this.load.image("waterTiles", "/world/sproutlands/tilesets/Water.png");
        this.load.image(
          "bridgeTiles",
          "/world/sproutlands/objects/Wood_Bridge.png"
        );
        this.load.image(
          "woodenHouseTiles",
          "/world/sproutlands/tilesets/Wooden House.png"
        );
        this.load.image(
          "tilledDirtTiles",
          "/world/sproutlands/tilesets/Tilled_Dirt.png"
        );
        this.load.image(
          "fencesTiles",
          "/world/sproutlands/tilesets/Fences.png"
        );
        this.load.image(
          "furnitureTiles",
          "/world/sproutlands/objects/Basic_Furniture.png"
        );
        this.load.image(
          "chickenHouseTiles",
          "/world/sproutlands/objects/Free_Chicken_House.png"
        );
        this.load.image(
          "plantsTiles",
          "/world/sproutlands/objects/Basic_Plants.png"
        );
        this.load.image("chestTiles", "/world/sproutlands/objects/Chest.png");
      },
      create: function () {
        const map = this.make.tilemap({ key: "world" });
        const grassTiles = map.addTilesetImage("grass", "grassTiles");
        const biomeTiles = map.addTilesetImage("biome", "biomeTiles");
        const pathsTiles = map.addTilesetImage("paths", "pathsTiles");
        const hillsTiles = map.addTilesetImage("hills", "hillsTiles");
        const milkTiles = map.addTilesetImage("milk", "milkTiles");
        const waterTiles = map.addTilesetImage("water", "waterTiles");
        const bridgeTiles = map.addTilesetImage("bridge", "bridgeTiles");
        const woodenHouseTiles = map.addTilesetImage(
          "wooden house",
          "woodenHouseTiles"
        );
        const tilledDirtTiles = map.addTilesetImage(
          "tilled dirt",
          "tilledDirtTiles"
        );
        const fencesTiles = map.addTilesetImage("fences", "fencesTiles");
        const furnitureTiles = map.addTilesetImage(
          "furniture",
          "furnitureTiles"
        );
        const chickenHouseTiles = map.addTilesetImage(
          "chicken house",
          "chickenHouseTiles"
        );
        const plantsTiles = map.addTilesetImage("plants", "plantsTiles");
        const chestTiles = map.addTilesetImage("chest", "chestTiles");
        assertDefined(map);
        assertDefined(grassTiles);
        assertDefined(biomeTiles);
        assertDefined(pathsTiles);
        assertDefined(hillsTiles);
        assertDefined(milkTiles);
        assertDefined(waterTiles);
        assertDefined(bridgeTiles);
        assertDefined(woodenHouseTiles);
        assertDefined(tilledDirtTiles);
        assertDefined(fencesTiles);
        assertDefined(furnitureTiles);
        assertDefined(chickenHouseTiles);
        assertDefined(plantsTiles);
        assertDefined(chestTiles);
        const tilesets = [
          grassTiles,
          biomeTiles,
          pathsTiles,
          hillsTiles,
          milkTiles,
          waterTiles,
          bridgeTiles,
          woodenHouseTiles,
          tilledDirtTiles,
          fencesTiles,
          furnitureTiles,
          chickenHouseTiles,
          plantsTiles,
          chestTiles,
        ];
        const bottomLayer = map.createLayer("bottom layer", tilesets, 0, 0);
        const topLayer = map.createLayer("top layer", tilesets, 0, 0);
        const tileLayer3 = map.createLayer("Tile Layer 3", tilesets, 0, 0);
        const tileLayer4 = map.createLayer("Tile Layer 4", tilesets, 0, 0);
        const tileLayer5 = map.createLayer("Tile Layer 5", tilesets, 0, 0);
        assertDefined(bottomLayer);
        assertDefined(topLayer);
        assertDefined(tileLayer3);
        assertDefined(tileLayer4);
        assertDefined(tileLayer5);
        const layers = [
          bottomLayer,
          topLayer,
          tileLayer3,
          tileLayer4,
          tileLayer5,
        ];
        layers.forEach((layer) => {
          layer.setScale(2);
        });
      },
    },
  };
  const game = new Phaser.Game(config);
  return game;
};
