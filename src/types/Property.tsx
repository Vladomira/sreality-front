type Labels = string[];
type Price_czk = {
    alt: { unit: string; value_raw: number };
    name: string;
    unit: string;
    value_raw: number;
};

type Seo = {
    category_main_cb: number;
    category_sub_cb: number;
    category_type_cb: number;
    locality: string;
};
type Embedded = {
    company: {
        id: string;
        logo_small: string;
        name: string;
        url: string;
    };
    favourite: {
        is_favourite: boolean;
        _links: {
            self: {
                href: string;
                profile: string;
                title: string;
            };
        };
    };
    note: {
        has_note: boolean;
        note: string;
        _links: {
            self: {
                href: string;
                profile: string;
                title: string;
            };
        };
    };
};
type Href = {
    href: string;
};
type Links = {
    dynamicDown: {
        href: string;
    }[];
    dynamicUp: Href[];
    image_middle2: Href[];
    images: { href: string }[];
    iterator: Href;
    self: Href;
};
export interface Property {
    advert_images_count: number;
    attractive_offer: number;
    auctionPrice: number;
    category: number;
    exclusively_at_rk: number;
    gps: { lat: number; lon: number };
    has_floor_plan: number;
    has_matterport_url: boolean;
    has_panorama: number;
    has_video: boolean;
    hash_id: number;
    is_auction: boolean;
    labels: string[];
    labelsAll: Labels[];
    labelsReleased: Labels[];
    locality: string;
    name: string;
    new: boolean;
    paid_logo: number;
    price: number;
    price_czk: Price_czk;
    region_tip: number;
    rus: boolean;
    seo: Seo;
    type: number;
    _embedded: Embedded;
    _links: Links;
}
