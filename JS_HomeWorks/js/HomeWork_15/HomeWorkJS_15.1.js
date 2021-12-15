function withoutKey(object, ...args) {
  const newObj = {...object};
  for (let i = 0; i < args.length; i++) {
    delete newObj[i]
  }
  return newObj;
}

withoutKey({ name:'Dasha', age:13 }, 'name')