import "./normalize.css";
import "./App.css";

import Phaser, { Types } from "phaser";

function assertDefined<T>(value: T | undefined | null): asserts value is T {
  if (value === undefined || value === null) {
    throw new Error("Value is undefined or null");
  }
}

/** Main game scene */
class MainScene extends Phaser.Scene {
  map!: Phaser.Tilemaps.Tilemap;
  tilesets!: Phaser.Tilemaps.Tileset[];

  constructor() {
    super({ key: "mainScene" });
  }

  preload() {
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
    this.load.image("fencesTiles", "/world/sproutlands/tilesets/Fences.png");
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
    this.load.audio("catMagic", "/cat-magic.mp3");
  }

  addTilesetImage(name: string, key: string): Phaser.Tilemaps.Tileset {
    const tiles = this.map.addTilesetImage(name, key);
    assertDefined(tiles);
    this.tilesets.push(tiles);
    return tiles;
  }

  createLayer(name: string): Phaser.Tilemaps.TilemapLayer {
    const layer = this.map.createLayer(name, this.tilesets, 0, 0);
    assertDefined(layer);
    layer.setScale(2);
    return layer;
  }

  create() {
    this.map = this.make.tilemap({ key: "world" });
    this.tilesets = [];
    this.addTilesetImage("grass", "grassTiles");
    this.addTilesetImage("biome", "biomeTiles");
    this.addTilesetImage("paths", "pathsTiles");
    this.addTilesetImage("hills", "hillsTiles");
    this.addTilesetImage("milk", "milkTiles");
    this.addTilesetImage("water", "waterTiles");
    this.addTilesetImage("bridge", "bridgeTiles");
    this.addTilesetImage("wooden house", "woodenHouseTiles");
    this.addTilesetImage("tilled dirt", "tilledDirtTiles");
    this.addTilesetImage("fences", "fencesTiles");
    this.addTilesetImage("furniture", "furnitureTiles");
    this.addTilesetImage("chicken house", "chickenHouseTiles");
    this.addTilesetImage("plants", "plantsTiles");
    this.addTilesetImage("chest", "chestTiles");
    this.createLayer("bottom layer");
    this.createLayer("top layer");
    this.createLayer("Tile Layer 3");
    this.createLayer("Tile Layer 4");
    this.createLayer("Tile Layer 5");
    const music = this.sound.add("catMagic", { loop: true });
    music.play();
  }
}

/** Game construction */
export const createGame = (root: HTMLElement) => {
  const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 480 * 2,
    height: 320 * 2,
    parent: root,
    pixelArt: true,
    scene: [MainScene],
  };
  return new Phaser.Game(config);
};
