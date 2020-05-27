const Mutations = {
  createDog(parent, args, ctx, info) {
    global.dogs = global.dogs || [];
    // Create a dog!
    const newDogs = { name: args.name };
    global.dogs.push(newDogs);
    return newDog;
  },
};

module.exports = Mutations;
