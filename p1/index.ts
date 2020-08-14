const { ObjectType, Field } = process.env.SHIM
  ? await import('type-graphql/dist/browser-shim.js')
  : await import('type-graphql')

console.log(Field)

export default 'Hello World!'
