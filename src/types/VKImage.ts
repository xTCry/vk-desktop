export interface VKImageSize {
  /**
   * Описаны только типы, которые есть в документации.
   *
   * s - фотография с максимальной стороной 75px
   *
   * m - фотография с максимальной стороной 130px
   *
   * o - фотография с максимальной стороной 130px, которая в
   * зависимости от соотношения обрезана по горизонтали или вертикали
   *
   * p - фотография с максимальной стороной 200px, которая в
   * зависимости от соотношения обрезана по горизонтали или вертикали
   *
   * q - фотография с максимальной стороной 320px, которая в
   * зависимости от соотношения обрезана по горизонтали или вертикали
   *
   * r - фотография с максимальной стороной 510px, которая в
   * зависимости от соотношения обрезана по горизонтали или вертикали
   *
   * x - фотография с максимальной стороной 604px
   *
   * y - фотография с максимальной стороной 807px
   *
   * z - фотография с максимальным размером 1080x1024px
   *
   * w - фотография с максимальным размером 2560x2048px
   */
  type: 's' | 'm' | 'o' | 'p' | 'q' | 'r' | 'x' | 'y' | 'z' | 'w'
  url: string
  /**
   * Если фотография была загружена до 2012 года, то может вернуться значение 0
   */
  width: number
  /**
   * Если фотография была загружена до 2012 года, то может вернуться значение 0
   */
  height: number
}

export interface VKImage {
  id: number
  album_id: number
  owner_id: number
  date: number
  user_id: number
  text: string
  sizes: VKImageSize[]
}
