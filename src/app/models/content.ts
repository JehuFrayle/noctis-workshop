export interface ServiceResponse {
    data: Service[];
    meta: Meta;
}

export interface Service {
    id:         number;
    attributes: ServiceAttributes;
}

export interface ServiceAttributes {
    name:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    image:       Image;
}

export interface Image {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    url: string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
//
export interface CoverImage {
    src: string;
    alt: string;
    service: string;
}