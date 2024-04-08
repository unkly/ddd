import { Regex } from '@recipeaceful/library/dist/const/Regex'
import { PrimitiveValueObject } from '../seed'

/**
 * 画像
 */
export class PostImage extends PrimitiveValueObject<string> {
  public constructor(value: string) {
    super(value)
    this.valid(value)
  }

  get(): string {
    return this._value
  }

  protected valid(value: string) {
    if (!value.match(Regex.BASE_64)) {
      throw new Error(`invalid postImage: ${value}`)
    }
  }
}
