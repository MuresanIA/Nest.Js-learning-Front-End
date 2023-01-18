import { Color } from "../interfaces/color.interface";
import { PreviousOwner } from "../interfaces/previous-owner.interface";

export class ItemModel {
  constructor(
    public _id?: string,
    public name?: string,
    public description?: string,
    public qty?: number,
    public color?: Array<Color>,
    public previousOwner?: Array<PreviousOwner>
  ) {}
}
