
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 1. Create the four book genres
  const fiction = await prisma.genre.upsert({
    where: { name: "Fiction" },
    update: {},
    create: {
      name: "Fiction",
      description: "Imaginative stories and novels",
    },
  });

  const technology = await prisma.genre.upsert({
    where: { name: "Technology" },
    update: {},
    create: {
      name: "Technology",
      description: "Books about computing and technology",
    },
  });

  const history = await prisma.genre.upsert({
    where: { name: "History" },
    update: {},
    create: {
      name: "History",
      description: "Books about historical events and people",
    },
  });

  const science = await prisma.genre.upsert({
    where: { name: "Science" },
    update: {},
    create: {
      name: "Science",
      description: "Books about scientific discoveries and knowledge",
    },
  });

  // 2. Create 16 books across the four genres
  const books = [
    {
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      isbn: "9780385474542",
      genreId: fiction.id,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "9780743273565",
      genreId: fiction.id,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      isbn: "9780141439518",
      genreId: fiction.id,
    },
    {
      title: "1984",
      author: "George Orwell",
      isbn: "9780451524935",
      genreId: fiction.id,
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      isbn: "9780132350884",
      genreId: technology.id,
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt and David Thomas",
      isbn: "9780135957059",
      genreId: technology.id,
    },
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      isbn: "9780262046305",
      genreId: technology.id,
    },
    {
      title: "Code Complete",
      author: "Steve McConnell",
      isbn: "9780735619678",
      genreId: technology.id,
    },
    {
      title: "A People's History of the United States",
      author: "Howard Zinn",
      isbn: "9780062397348",
      genreId: history.id,
    },
    {
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      isbn: "9780307594006",
      genreId: history.id,
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      isbn: "9780062316097",
      genreId: history.id,
    },
    {
      title: "The Silk Roads",
      author: "Peter Frankopan",
      isbn: "9781101912379",
      genreId: history.id,
    },
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      isbn: "9780553380163",
      genreId: science.id,
    },
    {
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      isbn: "9780198788607",
      genreId: science.id,
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      isbn: "9780345539434",
      genreId: science.id,
    },
    {
      title: "The Gene",
      author: "Siddhartha Mukherjee",
      isbn: "9781476733500",
      genreId: science.id,
    },
  ];

  // 3. Insert books without creating duplicates
  for (const book of books) {
    await prisma.book.upsert({
      where: { isbn: book.isbn },
      update: {},
      create: book,
    });
  }

  console.log("Seeding completed successfully!");
  console.log("4 genres created or already exist.");
  console.log("16 books created or already exist.");
}

// 4. Run the seed function
main()
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
