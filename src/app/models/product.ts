export interface ProductRes {
    data: Product[]
    meta: Meta
  }
  
  export interface Product {
    id: number
    attributes: ProductAttributes
  }
  
  export interface ProductAttributes {
    Title: string
    Description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    Price: number
    Images: Images
    category: Category
  }
  
  export interface Images {
    data: Daum2[]
  }
  
  export interface Daum2 {
    id: number
    attributes: Attributes2
  }
  
  export interface Attributes2 {
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
    large: Large
    medium: Medium
    small: Small
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
  
  export interface Category {
    data: Product
  }
  
  export interface Product {
    id: number
    attributes3: Attributes3
  }
  
  export interface Attributes3 {
    Name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
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
  