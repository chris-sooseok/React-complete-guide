import fs from 'node:fs';
import sql from 'better-sqlite3'
import slugify from "slugify";
import xss from "xss";

// ! pure functions used in actions or server-side components

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {
    // ? get for retrieving a single record
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const filename = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${filename}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error(error);
        }
    });

    meal.image = `/images/${filename}`;
    db.prepare(`
        INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (@title,
                @summary,
                @instructions,
                @creator,
                @creator_email,
                @image,
                @slug)
    `).run(meal);
}