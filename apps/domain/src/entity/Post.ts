import { PostImage } from 'valueObject/PostImage'
import { Entity } from '../seed'
import { Calories } from '../valueObject/Calories'
import { Difficulty } from '../valueObject/Difficulty'
import { Material } from '../valueObject/Material'
import { PostDetail } from '../valueObject/PostDetail'
import { PostTitle } from '../valueObject/PostTitle'
import { PostId, UserId } from '../valueObject/Ulid'

type Props = {
  postId: PostId
  title: PostTitle
  detail: PostDetail
  images: PostImage[] | null
  calories: Calories | null
  difficulty: Difficulty
  createdAt: Date
  materials:
    | {
        name: Material
        count: number
      }[]
    | null
  userId: UserId
  likes: UserId[] | null
}

/**
 * 投稿
 */
export class Post extends Entity {
  private constructor(private readonly _props: Props) {
    super()
  }

  public static create(props: Props) {
    this.validate(props)
    return new Post(props)
  }

  public static validate(props: Props) {
    if (props.likes?.length) {
      // 自分の投稿にはいいね出来ない
      if (props.likes.find((like) => like.get() === props.userId.get()))
        throw new Error(`自分の投稿にいいねは出来ません userId: ${props.userId.get()}`)

      // likesにuserIdが同じユーザーは二人以上存在しない
      if (props.likes.length !== new Set(props.likes).size)
        throw new Error(`同一ユーザーに２回以上いいねされています userId: ${props.userId.get()}
      `)
    }

    // 画像は最大５枚まで
    if (props.images?.length && props.images.length > 5) {
      throw new Error(`投稿画像は5枚までです postId: ${props.postId.get()}`)
    }
  }

  get postId() {
    return this._props.postId
  }

  get title() {
    return this._props.title
  }

  get detail() {
    return this._props.detail
  }

  get calories() {
    return this._props.calories
  }

  get difficulty() {
    return this._props.difficulty
  }

  get materials() {
    return this._props.materials
  }

  get userId() {
    return this._props.userId
  }

  get likes() {
    return this._props.likes
  }

  get likesCount(): number {
    return this._props.likes?.length || 0
  }
}
