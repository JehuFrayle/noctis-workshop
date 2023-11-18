export interface CategoryRes {
    data: Data[]
    meta: Meta
}

export interface Data {
    id: number
    attributes: Attributes
}

export interface Attributes {
    Name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    Images: Images
}

export interface Images {
    data: ImagesData[]
}

export interface ImagesData {
    id: number
    attributes: ImagesAttributes
}

export interface ImagesAttributes {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
}

export interface Formats {
    thumbnail: Thumbnail
    large?: Large
    small: Small
    medium?: Medium
}

export interface Thumbnail {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
}

export interface Large {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
}

export interface Small {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
}

export interface Medium {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
}

export interface Meta {
    pagination: Pagination
}

export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

export interface CategoryCoverImage {
    src: string
    alt: string
    name: string
}