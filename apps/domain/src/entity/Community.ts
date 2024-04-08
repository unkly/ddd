import { Entity } from 'seed'
import { CommunityDescription } from 'valueObject/CommunityDescription'
import { CommunityName } from 'valueObject/CommunityName'
import { CommunityId, UserId } from 'valueObject/Ulid'

type Props = {
  communityId: CommunityId
  name: CommunityName
  description: CommunityDescription
  createdBy: UserId
  createdAt: Date
  users: UserId[] | null
}

export class Community extends Entity {
  private constructor(private readonly _props: Props) {
    super()
  }

  public static create(props: Props) {
    this.validate(props)
    return new Community(props)
  }

  public static validate(props: Props) {
    // likesにuserIdが同じユーザーは二人以上存在しない
    if (props.users && props.users.length !== new Set(props.users).size)
      throw new Error(`コミュニティにIDが重複しているユーザーがいます communityId: ${props.communityId.get()}
      `)
  }

  get communityId() {
    return this._props.communityId
  }

  get name() {
    return this._props.name
  }

  get description() {
    return this._props.description
  }

  get createdBy() {
    return this._props.createdBy
  }

  get createdAt() {
    return this._props.createdAt
  }

  get users() {
    return this._props.users
  }
}
