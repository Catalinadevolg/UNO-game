import { EntityTypes, GamePlayerType, HandEntityTypes } from '../types';
import {
  calcCanvasMaxSizes,
  createCanvas,
  createColorBox,
  createLayer,
  createNameLayer,
  createUnoButton,
} from '../utils';

export class Entity<T extends EntityTypes> {
  protected layer!: HTMLDivElement;
  protected context!: CanvasRenderingContext2D;
  protected name!: HTMLParagraphElement;
  protected colorBox: HTMLDivElement | null = null;

  protected entityName: T;

  protected player: GamePlayerType | null = null;
  protected width = 0;
  protected height = 0;

  constructor(entityName: T) {
    this.entityName = entityName;
  }

  create(zIndex: number) {
    const { width, height } = calcCanvasMaxSizes(this.entityName);

    const layer = createLayer(this.entityName, zIndex);

    const canvas = createCanvas(this.entityName, width, height, zIndex);
    layer.appendChild(canvas);

    if (this.player) {
      if (this.player.name === undefined) {
        this.player.name = 'Игрок';
      }

      this.name = createNameLayer(
        this.entityName as HandEntityTypes,
        this.player.name
      );

      layer.appendChild(this.name);
    } else {
      const button = createUnoButton();
      this.colorBox = createColorBox();

      layer.appendChild(button);
      layer.appendChild(this.colorBox);
    }

    this.layer = layer;
    this.width = width;
    this.height = height;
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  getLayer() {
    return this.layer;
  }
}
