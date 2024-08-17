import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url';
import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "j8kmcwec",
  dataset: "production",
  apiVersion: "2024-08-16",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})