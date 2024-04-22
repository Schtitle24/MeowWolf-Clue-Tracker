// // Import required models and faker
// const { User, Exhibit, Clue } = require('../models');
// const { faker } = require('@faker-js/faker');

// // Seed function
// const seedDatabase = async () => {
//   try {
//     // Create a user
//     const user = await User.create({
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     });

//     // Get the user_id
//     const userId = user.id;

//     // Create exhibits
//     const exhibits = await Exhibit.bulkCreate([
//       {
//         name: 'Forest Tree House',
//         description: faker.lorem.paragraph(),
//       },
//       {
//         name: 'Neon Room',
//         description: faker.lorem.paragraph(),
//       },
//       {
//         name: 'Main House',
//         description: faker.lorem.paragraph(),
//       },
//       {
//         name: 'City Scape',
//         description: faker.lorem.paragraph(),
//       },
//       {
//         name: 'Refrigerator Portal',
//         description: faker.lorem.paragraph(),
//       },
//     ]);

//     // Create clues
//     const clues = await Clue.bulkCreate([
//       { 
//         description: faker.lorem.paragraph(), 
//         category: faker.lorem.word(), 
//         exhibitId: exhibits[0].dataValues.id, 
//         userId: userId 
//       },
//       { 
//         description: faker.lorem.paragraph(), 
//         category: faker.lorem.word(), 
//         exhibitId: exhibits[0].dataValues.id, 
//         userId: userId 
//       },
//       { 
//         description: faker.lorem.paragraph(), 
//         category: faker.lorem.word(), 
//         exhibitId: exhibits[1].dataValues.id, 
//         userId: userId 
//       },
//       { 
//         description: faker.lorem.paragraph(), 
//         category: faker.lorem.word(), 
//         exhibitId: exhibits[1].dataValues.id, 
//         userId: userId 
//       },
//       { 
//         description: faker.lorem.paragraph(), 
//         category: faker.lorem.word(), 
//         exhibitId: exhibits[2].dataValues.id, 
//         userId: userId 
//       },
//       { 
//         description: faker.lorem.paragraph(), 
//         category: faker.lorem.word(), 
//         exhibitId: exhibits[2].dataValues.id, 
//         userId: userId 
//       },
//       { 
//         description: faker.lorem.paragraph(), 
//         category: faker.lorem.word(), 
//         exhibitId: exhibits[3].dataValues.id, 
//         userId: userId 
//       },
//       { 
//         description: faker.lorem.paragraph(), 
//         category: faker.lorem.word(), 
//         exhibitId: exhibits[3].dataValues.id, 
//         userId: userId 
//       },
//       { 
//         description: faker.lorem.paragraph(), 
//         category: faker.lorem.word(), 
//         exhibitId: exhibits[4].dataValues.id, 
//         userId: userId 
//       },
//       { 
//         description: faker.lorem.paragraph(), 
//         category: faker.lorem.word(), 
//         exhibitId: exhibits[4].dataValues.id, 
//         userId: userId 
//       },
//     ]);

//     console.log('Database seeded successfully!');
//   } catch (error) {
//     console.error('Error seeding database:', error);
//   }
// };

// // Call seed function
// seedDatabase();
