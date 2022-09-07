export default {
    name:'restaurant',
    title:'Restaurant',
    type: 'document',
    fields : [
        {
            name:'name',
            type:'string',
            title:'Restaurant Name',
            validation: (Rule) => Rule.required(),
        },
        {
            name:'short_description',
            type:'string',
            title:'Short Description',
            validation: (Rule) => Rule.required(),
        },
        {
            name:'image',
            type:'image',
            title:'Images',
        },
        {
            name:'lat',
            type:'number',
            title:'Latitude of Restaurant',
        },
        {
            name:'long',
            type:'number',
            title:'Longitude of Restaurant',
        },
        {
            name:'address',
            type:'string',
            title:'Restaurant Address',
            validation: (Rule) => Rule.required(),
        },
        {
            name:'rating',
            type:'number',
            title:'Enter a rating',
            validation: (Rule) => Rule.required().min(1).max(5).error('Value should be between 1 and 5'),
        },
        {
            name:'type',
            type:'string',
            title: 'Category',
            validation: (Rule) => Rule.required(),
            types: 'reference',
            to: [{type : 'category'}],
        },
        {
            name:'dishes',
            type:'array',
            title:'Dishes',
            of: [{ type: 'reference', to: [{type: 'dish'}]}],
        }
    ]
}