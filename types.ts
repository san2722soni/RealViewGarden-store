export interface Billboard {
    id: string;
    label: string;
    imageUrl: string
};

export interface Category {
    id: string,
    name: string,
    billboard: Billboard;
}

export interface Product {
    id: string, 
    category: Category, 
    name: string, 
    price: string,
    isArchived: boolean,
    isFeatured: boolean,
    isBestSeller: boolean,
    size: Size,
    color: Color;
    pot: Pot;
    images: Image[];
}

export interface Image{
    id: string,
    url: string
}

export interface Size {
    id: string, 
    name: string,
    value: string
}

export interface Pot {
    id: string, 
    name: string,
    value: string
}

export interface Color {
    id: string, 
    name: string,
    value: string
}

export interface Review {
    id: string,
    name: string,
    email: string,
    imageUrl: string,
    occupation: string,
    description: string,
    createdAt: string,
}