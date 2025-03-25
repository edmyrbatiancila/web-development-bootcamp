import { AnimeWallpaper, AnimeSource } from 'anime-wallpaper';
const wallpaper = new AnimeWallpaper();

const wallpaper1 = await wallpaper.random({ resolution: "1920x1080" });
console.log(wallpaper1);