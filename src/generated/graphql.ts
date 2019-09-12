import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
 **/
  DateTime: any,
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any,
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any,
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any,
};



/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
   __typename?: 'Asset',
  sys: Sys,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  contentType?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  linkedFrom?: Maybe<AssetLinkingCollections>,
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>
};

export type AssetCollection = {
   __typename?: 'AssetCollection',
  total: Scalars['Int'],
  skip: Scalars['Int'],
  limit: Scalars['Int'],
  items: Array<Maybe<Asset>>,
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>,
  title_exists?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  description_exists?: Maybe<Scalars['Boolean']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  url_exists?: Maybe<Scalars['Boolean']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  size_exists?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>,
  size_not?: Maybe<Scalars['Int']>,
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  size_gt?: Maybe<Scalars['Int']>,
  size_gte?: Maybe<Scalars['Int']>,
  size_lt?: Maybe<Scalars['Int']>,
  size_lte?: Maybe<Scalars['Int']>,
  contentType_exists?: Maybe<Scalars['Boolean']>,
  contentType?: Maybe<Scalars['String']>,
  contentType_not?: Maybe<Scalars['String']>,
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  contentType_contains?: Maybe<Scalars['String']>,
  contentType_not_contains?: Maybe<Scalars['String']>,
  fileName_exists?: Maybe<Scalars['Boolean']>,
  fileName?: Maybe<Scalars['String']>,
  fileName_not?: Maybe<Scalars['String']>,
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  fileName_contains?: Maybe<Scalars['String']>,
  fileName_not_contains?: Maybe<Scalars['String']>,
  width_exists?: Maybe<Scalars['Boolean']>,
  width?: Maybe<Scalars['Int']>,
  width_not?: Maybe<Scalars['Int']>,
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  width_gt?: Maybe<Scalars['Int']>,
  width_gte?: Maybe<Scalars['Int']>,
  width_lt?: Maybe<Scalars['Int']>,
  width_lte?: Maybe<Scalars['Int']>,
  height_exists?: Maybe<Scalars['Boolean']>,
  height?: Maybe<Scalars['Int']>,
  height_not?: Maybe<Scalars['Int']>,
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  height_gt?: Maybe<Scalars['Int']>,
  height_gte?: Maybe<Scalars['Int']>,
  height_lt?: Maybe<Scalars['Int']>,
  height_lte?: Maybe<Scalars['Int']>,
  OR?: Maybe<Array<Maybe<AssetFilter>>>,
  AND?: Maybe<Array<Maybe<AssetFilter>>>,
};

export type AssetLinkingCollections = {
   __typename?: 'AssetLinkingCollections',
  entryCollection?: Maybe<EntryCollection>,
  categoryCollection?: Maybe<CategoryCollection>,
  productCollection?: Maybe<ProductCollection>,
  brandCollection?: Maybe<BrandCollection>,
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};


export type AssetLinkingCollectionsCategoryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};


export type AssetLinkingCollectionsProductCollectionArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};


export type AssetLinkingCollectionsBrandCollectionArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/bswbys9qvg7q/content_types/brand) */
export type Brand = Entry & {
   __typename?: 'Brand',
  sys: Sys,
  linkedFrom?: Maybe<BrandLinkingCollections>,
  companyName?: Maybe<Scalars['String']>,
  logo?: Maybe<Asset>,
  companyDescription?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
  twitter?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phone?: Maybe<Array<Maybe<Scalars['String']>>>,
};


/** [See type definition](https://app.contentful.com/spaces/bswbys9qvg7q/content_types/brand) */
export type BrandLogoArgs = {
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};

export type BrandCollection = {
   __typename?: 'BrandCollection',
  total: Scalars['Int'],
  skip: Scalars['Int'],
  limit: Scalars['Int'],
  items: Array<Maybe<Brand>>,
};

export type BrandFilter = {
  sys?: Maybe<SysFilter>,
  companyName_exists?: Maybe<Scalars['Boolean']>,
  companyName?: Maybe<Scalars['String']>,
  companyName_not?: Maybe<Scalars['String']>,
  companyName_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  companyName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  companyName_contains?: Maybe<Scalars['String']>,
  companyName_not_contains?: Maybe<Scalars['String']>,
  companyDescription_exists?: Maybe<Scalars['Boolean']>,
  companyDescription?: Maybe<Scalars['String']>,
  companyDescription_not?: Maybe<Scalars['String']>,
  companyDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  companyDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  companyDescription_contains?: Maybe<Scalars['String']>,
  companyDescription_not_contains?: Maybe<Scalars['String']>,
  website_exists?: Maybe<Scalars['Boolean']>,
  website?: Maybe<Scalars['String']>,
  website_not?: Maybe<Scalars['String']>,
  website_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  website_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  website_contains?: Maybe<Scalars['String']>,
  website_not_contains?: Maybe<Scalars['String']>,
  twitter_exists?: Maybe<Scalars['Boolean']>,
  twitter?: Maybe<Scalars['String']>,
  twitter_not?: Maybe<Scalars['String']>,
  twitter_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  twitter_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  twitter_contains?: Maybe<Scalars['String']>,
  twitter_not_contains?: Maybe<Scalars['String']>,
  email_exists?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  phone_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>,
  phone_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>,
  phone_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>,
  OR?: Maybe<Array<Maybe<BrandFilter>>>,
  AND?: Maybe<Array<Maybe<BrandFilter>>>,
};

export type BrandLinkingCollections = {
   __typename?: 'BrandLinkingCollections',
  entryCollection?: Maybe<EntryCollection>,
};


export type BrandLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};

export enum BrandOrder {
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/bswbys9qvg7q/content_types/category) */
export type Category = Entry & {
   __typename?: 'Category',
  sys: Sys,
  linkedFrom?: Maybe<CategoryLinkingCollections>,
  title?: Maybe<Scalars['String']>,
  icon?: Maybe<Asset>,
  categoryDescription?: Maybe<Scalars['String']>,
};


/** [See type definition](https://app.contentful.com/spaces/bswbys9qvg7q/content_types/category) */
export type CategoryIconArgs = {
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};

export type CategoryCollection = {
   __typename?: 'CategoryCollection',
  total: Scalars['Int'],
  skip: Scalars['Int'],
  limit: Scalars['Int'],
  items: Array<Maybe<Category>>,
};

export type CategoryFilter = {
  sys?: Maybe<SysFilter>,
  title_exists?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  categoryDescription_exists?: Maybe<Scalars['Boolean']>,
  categoryDescription?: Maybe<Scalars['String']>,
  categoryDescription_not?: Maybe<Scalars['String']>,
  categoryDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoryDescription_contains?: Maybe<Scalars['String']>,
  categoryDescription_not_contains?: Maybe<Scalars['String']>,
  OR?: Maybe<Array<Maybe<CategoryFilter>>>,
  AND?: Maybe<Array<Maybe<CategoryFilter>>>,
};

export type CategoryLinkingCollections = {
   __typename?: 'CategoryLinkingCollections',
  entryCollection?: Maybe<EntryCollection>,
  productCollection?: Maybe<ProductCollection>,
};


export type CategoryLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};


export type CategoryLinkingCollectionsProductCollectionArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};

export enum CategoryOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}



export type Entry = {
  sys: Sys,
};

export type EntryCollection = {
   __typename?: 'EntryCollection',
  total: Scalars['Int'],
  skip: Scalars['Int'],
  limit: Scalars['Int'],
  items: Array<Maybe<Entry>>,
};


export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /** 
 * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
 **/
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /** 
 * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
 **/
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /** 
 * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
 **/
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>,
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>,
  /** 
 * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
 **/
  quality?: Maybe<Scalars['Quality']>,
  /** 
 * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
 **/
  cornerRadius?: Maybe<Scalars['Int']>,
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>,
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>,
  /** 
 * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
 **/
  backgroundColor?: Maybe<Scalars['HexColor']>,
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>,
};

/** [See type definition](https://app.contentful.com/spaces/bswbys9qvg7q/content_types/product) */
export type Product = Entry & {
   __typename?: 'Product',
  sys: Sys,
  linkedFrom?: Maybe<ProductLinkingCollections>,
  productName?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  productDescription?: Maybe<Scalars['String']>,
  sizetypecolor?: Maybe<Scalars['String']>,
  imageCollection?: Maybe<AssetCollection>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  categoriesCollection?: Maybe<ProductCategoriesCollection>,
  price?: Maybe<Scalars['Float']>,
  brand?: Maybe<Entry>,
  quantity?: Maybe<Scalars['Int']>,
  sku?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
};


/** [See type definition](https://app.contentful.com/spaces/bswbys9qvg7q/content_types/product) */
export type ProductImageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};


/** [See type definition](https://app.contentful.com/spaces/bswbys9qvg7q/content_types/product) */
export type ProductCategoriesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};


/** [See type definition](https://app.contentful.com/spaces/bswbys9qvg7q/content_types/product) */
export type ProductBrandArgs = {
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};

export type ProductCategoriesCollection = {
   __typename?: 'ProductCategoriesCollection',
  total: Scalars['Int'],
  skip: Scalars['Int'],
  limit: Scalars['Int'],
  items: Array<Maybe<Category>>,
};

export type ProductCollection = {
   __typename?: 'ProductCollection',
  total: Scalars['Int'],
  skip: Scalars['Int'],
  limit: Scalars['Int'],
  items: Array<Maybe<Product>>,
};

export type ProductFilter = {
  sys?: Maybe<SysFilter>,
  productName_exists?: Maybe<Scalars['Boolean']>,
  productName?: Maybe<Scalars['String']>,
  productName_not?: Maybe<Scalars['String']>,
  productName_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  productName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  productName_contains?: Maybe<Scalars['String']>,
  productName_not_contains?: Maybe<Scalars['String']>,
  slug_exists?: Maybe<Scalars['Boolean']>,
  slug?: Maybe<Scalars['String']>,
  slug_not?: Maybe<Scalars['String']>,
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug_contains?: Maybe<Scalars['String']>,
  slug_not_contains?: Maybe<Scalars['String']>,
  productDescription_exists?: Maybe<Scalars['Boolean']>,
  productDescription?: Maybe<Scalars['String']>,
  productDescription_not?: Maybe<Scalars['String']>,
  productDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  productDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  productDescription_contains?: Maybe<Scalars['String']>,
  productDescription_not_contains?: Maybe<Scalars['String']>,
  sizetypecolor_exists?: Maybe<Scalars['Boolean']>,
  sizetypecolor?: Maybe<Scalars['String']>,
  sizetypecolor_not?: Maybe<Scalars['String']>,
  sizetypecolor_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  sizetypecolor_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  sizetypecolor_contains?: Maybe<Scalars['String']>,
  sizetypecolor_not_contains?: Maybe<Scalars['String']>,
  image_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>,
  image_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>,
  image_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>,
  tags_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>,
  tags_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>,
  tags_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>,
  categories_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>,
  categories_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>,
  categories_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_exists?: Maybe<Scalars['Boolean']>,
  price?: Maybe<Scalars['Float']>,
  price_not?: Maybe<Scalars['Float']>,
  price_in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  price_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  price_gt?: Maybe<Scalars['Float']>,
  price_gte?: Maybe<Scalars['Float']>,
  price_lt?: Maybe<Scalars['Float']>,
  price_lte?: Maybe<Scalars['Float']>,
  quantity_exists?: Maybe<Scalars['Boolean']>,
  quantity?: Maybe<Scalars['Int']>,
  quantity_not?: Maybe<Scalars['Int']>,
  quantity_in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  quantity_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  quantity_gt?: Maybe<Scalars['Int']>,
  quantity_gte?: Maybe<Scalars['Int']>,
  quantity_lt?: Maybe<Scalars['Int']>,
  quantity_lte?: Maybe<Scalars['Int']>,
  sku_exists?: Maybe<Scalars['Boolean']>,
  sku?: Maybe<Scalars['String']>,
  sku_not?: Maybe<Scalars['String']>,
  sku_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  sku_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  sku_contains?: Maybe<Scalars['String']>,
  sku_not_contains?: Maybe<Scalars['String']>,
  website_exists?: Maybe<Scalars['Boolean']>,
  website?: Maybe<Scalars['String']>,
  website_not?: Maybe<Scalars['String']>,
  website_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  website_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  website_contains?: Maybe<Scalars['String']>,
  website_not_contains?: Maybe<Scalars['String']>,
  OR?: Maybe<Array<Maybe<ProductFilter>>>,
  AND?: Maybe<Array<Maybe<ProductFilter>>>,
};

export type ProductLinkingCollections = {
   __typename?: 'ProductLinkingCollections',
  entryCollection?: Maybe<EntryCollection>,
};


export type ProductLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};

export enum ProductOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SizetypecolorAsc = 'sizetypecolor_ASC',
  SizetypecolorDesc = 'sizetypecolor_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  SkuAsc = 'sku_ASC',
  SkuDesc = 'sku_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}


export type Query = {
   __typename?: 'Query',
  asset?: Maybe<Asset>,
  assetCollection?: Maybe<AssetCollection>,
  category?: Maybe<Category>,
  categoryCollection?: Maybe<CategoryCollection>,
  product?: Maybe<Product>,
  productCollection?: Maybe<ProductCollection>,
  brand?: Maybe<Brand>,
  brandCollection?: Maybe<BrandCollection>,
};


export type QueryAssetArgs = {
  id: Scalars['String'],
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};


export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>,
  where?: Maybe<AssetFilter>,
  order?: Maybe<Array<Maybe<AssetOrder>>>
};


export type QueryCategoryArgs = {
  id: Scalars['String'],
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};


export type QueryCategoryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>,
  where?: Maybe<CategoryFilter>,
  order?: Maybe<Array<Maybe<CategoryOrder>>>
};


export type QueryProductArgs = {
  id: Scalars['String'],
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};


export type QueryProductCollectionArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>,
  where?: Maybe<ProductFilter>,
  order?: Maybe<Array<Maybe<ProductOrder>>>
};


export type QueryBrandArgs = {
  id: Scalars['String'],
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>
};


export type QueryBrandCollectionArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  preview?: Maybe<Scalars['Boolean']>,
  locale?: Maybe<Scalars['String']>,
  where?: Maybe<BrandFilter>,
  order?: Maybe<Array<Maybe<BrandOrder>>>
};

export type Sys = {
   __typename?: 'Sys',
  id: Scalars['String'],
  spaceId: Scalars['String'],
  environmentId: Scalars['String'],
  publishedAt?: Maybe<Scalars['DateTime']>,
  firstPublishedAt?: Maybe<Scalars['DateTime']>,
  publishedVersion?: Maybe<Scalars['Int']>,
};

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['String']>,
  id_not?: Maybe<Scalars['String']>,
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  id_contains?: Maybe<Scalars['String']>,
  id_not_contains?: Maybe<Scalars['String']>,
  publishedAt_exists?: Maybe<Scalars['Boolean']>,
  publishedAt?: Maybe<Scalars['String']>,
  publishedAt_not?: Maybe<Scalars['String']>,
  publishedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  publishedAt_contains?: Maybe<Scalars['String']>,
  publishedAt_not_contains?: Maybe<Scalars['String']>,
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>,
  firstPublishedAt?: Maybe<Scalars['String']>,
  firstPublishedAt_not?: Maybe<Scalars['String']>,
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  firstPublishedAt_contains?: Maybe<Scalars['String']>,
  firstPublishedAt_not_contains?: Maybe<Scalars['String']>,
  publishedVersion_exists?: Maybe<Scalars['Boolean']>,
  publishedVersion?: Maybe<Scalars['String']>,
  publishedVersion_not?: Maybe<Scalars['String']>,
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  publishedVersion_contains?: Maybe<Scalars['String']>,
  publishedVersion_not_contains?: Maybe<Scalars['String']>,
};
export type ProductsQueryVariables = {};


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { productCollection: Maybe<(
    { __typename?: 'ProductCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Product' }
      & Pick<Product, 'productName' | 'productDescription' | 'price'>
    )>> }
  )> }
);

export const ProductsDocument = gql`
    query Products {
  productCollection {
    items {
      productName
      productDescription
      price
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProductsGQL extends Apollo.Query<ProductsQuery, ProductsQueryVariables> {
    document = ProductsDocument;
    
  }