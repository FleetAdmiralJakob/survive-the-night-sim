export interface RendererAssets {
  loading: boolean;
  loaded: boolean;
  bg: HTMLImageElement | null;
  box: HTMLImageElement | null;
  landmine: HTMLImageElement | null;
  player: HTMLImageElement | null;
  rock: HTMLImageElement | null;
  zombieDead: HTMLImageElement | null;
  zombieIdleFrame1: HTMLImageElement | null;
  zombieIdleFrame2: HTMLImageElement | null;
  zombieIdleFrame3: HTMLImageElement | null;
  zombieIdleFrame4: HTMLImageElement | null;
  zombieWalkingFrame1: HTMLImageElement | null;
  zombieWalkingFrame2: HTMLImageElement | null;
  zombieWalkingFrame3: HTMLImageElement | null;
  zombieWalkingFrame4: HTMLImageElement | null;
}

export const assets: RendererAssets = {
  loading: false,
  loaded: false,
  bg: null,
  box: null,
  landmine: null,
  player: null,
  rock: null,
  zombieDead: null,
  zombieIdleFrame1: null,
  zombieIdleFrame2: null,
  zombieIdleFrame3: null,
  zombieIdleFrame4: null,
  zombieWalkingFrame1: null,
  zombieWalkingFrame2: null,
  zombieWalkingFrame3: null,
  zombieWalkingFrame4: null,
};

export async function loadAssets() {
  if (assets.loading || assets.loaded) {
    return;
  }

  assets.loading = true;

  const [
    bg,
    box,
    landmine,
    player,
    rock,
    zombieDead,
    zombieIdleFrame1,
    zombieIdleFrame2,
    zombieIdleFrame3,
    zombieIdleFrame4,
    zombieWalkingFrame1,
    zombieWalkingFrame2,
    zombieWalkingFrame3,
    zombieWalkingFrame4,
  ] = await Promise.all([
    loadAssetImage("/map.webp"),
    loadAssetImage("/entities/box.svg"),
    loadAssetImage("/entities/landmine.svg"),
    loadAssetImage("/entities/player-attacking.svg"),
    loadAssetImage("/entities/rock.svg"),
    loadAssetImage("/entities/zombie-dead.png"),
    loadAssetImage("/entities/zombie-idle-frame1.png"),
    loadAssetImage("/entities/zombie-idle-frame2.png"),
    loadAssetImage("/entities/zombie-idle-frame3.png"),
    loadAssetImage("/entities/zombie-idle-frame4.png"),
    loadAssetImage("/entities/zombie-walking-frame1.png"),
    loadAssetImage("/entities/zombie-walking-frame2.png"),
    loadAssetImage("/entities/zombie-walking-frame3.png"),
    loadAssetImage("/entities/zombie-walking-frame4.png"),
  ]);

  assets.loaded = true;
  assets.bg = bg;
  assets.box = box;
  assets.landmine = landmine;
  assets.player = player;
  assets.rock = rock;
  assets.zombieDead = zombieDead;
  assets.zombieIdleFrame1 = zombieIdleFrame1;
  assets.zombieIdleFrame2 = zombieIdleFrame2;
  assets.zombieIdleFrame3 = zombieIdleFrame3;
  assets.zombieIdleFrame4 = zombieIdleFrame4;
  assets.zombieWalkingFrame1 = zombieWalkingFrame1;
  assets.zombieWalkingFrame2 = zombieWalkingFrame2;
  assets.zombieWalkingFrame3 = zombieWalkingFrame3;
  assets.zombieWalkingFrame4 = zombieWalkingFrame4;
}

export async function loadAssetImage(src: string): Promise<HTMLImageElement> {
  return await new Promise((resolve) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.src = src;
  });
}
