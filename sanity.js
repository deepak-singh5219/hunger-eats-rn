import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: 'bvdz90sj',
  dataset: 'production',
  apiVersion: '2022-03-25', // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;