
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import restaurant from './restaurant'
import featured from './featured'
import dish from './dish'
import category from './category'
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    /* Your types here! */
    restaurant,
    featured,
    dish, 
    category,
  ]),
})
