import { DIFFICULTY_KEY } from '@recipeaceful/library/dist/const'
import { Post } from '../../src/entity/Post'
import { ulid } from 'ulid'
import { Calories } from '../../src/valueObject/Calories'
import { Difficulty } from '../../src/valueObject/Difficulty'
import { Material } from '../../src/valueObject/Material'
import { PostDetail } from '../../src/valueObject/PostDetail'
import { PostTitle } from '../../src/valueObject/PostTitle'
import { PostId, UserId } from '../../src/valueObject/Ulid'
import { PostImage } from '../../src/valueObject/PostImage'

describe('Post', () => {
  const postId = new PostId(ulid())
  const userId = new UserId(ulid())
  describe('normal cases', () => {
    it('If likes is exists', () => {
      const entity = Post.create({
        postId: postId,
        title: new PostTitle('卵焼き'),
        detail: new PostDetail('ちょー簡単な料理です。'),
        images: null,
        calories: new Calories(120),
        difficulty: new Difficulty(DIFFICULTY_KEY.EASY),
        createdAt: new Date(),
        materials: [
          {
            name: new Material('卵'),
            count: 1,
          },
          {
            name: new Material('油'),
            count: 1,
          },
        ],
        userId: userId,
        likes: [new UserId(ulid()), new UserId(ulid()), new UserId(ulid()), new UserId(ulid())],
      })

      expect(entity.postId.get()).toBe(postId.get())
      expect(entity.title.get()).toBe('卵焼き')
      expect(entity.detail.get()).toBe('ちょー簡単な料理です。')
      expect(entity.calories?.get()).toBe(120)
      expect(entity.difficulty.get()).toBe(DIFFICULTY_KEY.EASY)
      entity.materials?.forEach((material, i) => {
        expect(material.count).toBe(entity.materials![i]?.count)
        expect(material.name.get()).toBe(entity.materials![i]?.name.get())
      })
      expect(entity.userId.get()).toBe(userId.get())
      entity.likes?.forEach((like, i) => {
        expect(like.get()).toBe(entity.likes![i]?.get())
      })
      expect(entity.likesCount).toBe(4)
    })
    it('do not exist', () => {
      const entity = Post.create({
        postId: postId,
        title: new PostTitle('卵焼き'),
        detail: new PostDetail('ちょー簡単な料理です。'),
        calories: null,
        images: null,
        difficulty: new Difficulty(DIFFICULTY_KEY.EASY),
        createdAt: new Date(),
        materials: [
          {
            name: new Material('卵'),
            count: 1,
          },
        ],
        userId: userId,
        likes: null,
      })

      expect(entity.calories).toStrictEqual(null)
      expect(entity.likes).toStrictEqual(null)
      expect(entity.likesCount).toBe(0)
    })
  })
  describe('error cases', () => {
    it('画像が６枚以上', () => {
      expect(() =>
        Post.create({
          postId: postId,
          title: new PostTitle('卵焼き'),
          detail: new PostDetail('ちょー簡単な料理です。'),
          images: [
            new PostImage('data:image/png;base64,iVBOR'),
            new PostImage('data:image/png;base64,iVBOR'),
            new PostImage('data:image/png;base64,iVBOR'),
            new PostImage('data:image/png;base64,iVBOR'),
            new PostImage('data:image/png;base64,iVBOR'),
            new PostImage('data:image/png;base64,iVBOR'),
          ],
          calories: new Calories(120),
          difficulty: new Difficulty(DIFFICULTY_KEY.EASY),
          createdAt: new Date(),
          materials: [],
          userId: userId,
          likes: null,
        })
      ).toThrow('投稿画像は5枚までです postId: ' + postId.get())
    })
    it('If like list include me', () => {
      expect(() =>
        Post.create({
          postId: postId,
          title: new PostTitle('卵焼き'),
          images: null,
          detail: new PostDetail('ちょー簡単な料理です。'),
          calories: new Calories(120),
          difficulty: new Difficulty(DIFFICULTY_KEY.EASY),
          createdAt: new Date(),
          materials: [
            {
              name: new Material('卵'),
              count: 1,
            },
          ],
          userId: userId,
          likes: [userId],
        })
      ).toThrow('自分の投稿にいいねは出来ません userId: ' + userId.get())
    })
    it('If the like list contains the same user at twice', () => {
      const sameId = new UserId(ulid())

      expect(() =>
        Post.create({
          postId: postId,
          title: new PostTitle('卵焼き'),
          detail: new PostDetail('ちょー簡単な料理です。'),
          images: null,
          calories: new Calories(120),
          difficulty: new Difficulty(DIFFICULTY_KEY.EASY),
          createdAt: new Date(),
          materials: [
            {
              name: new Material('卵'),
              count: 1,
            },
          ],
          userId: userId,
          likes: [sameId, sameId, new UserId(ulid()), new UserId(ulid()), new UserId(ulid())],
        })
      ).toThrow('同一ユーザーに２回以上いいねされています userId: ' + userId.get())
    })
  })
})
