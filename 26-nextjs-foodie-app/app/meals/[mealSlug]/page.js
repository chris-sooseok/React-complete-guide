import classes from './page.module.css'
import Image from "next/image";
import {getMeal} from "@/lib/meals";
import {notFound} from "next/navigation";
import sql from 'better-sqlite3'

export async function generateMetadata({ params }) {
    const meal = getMeal(params.mealSlug);

    // const db = sql('meals.db');
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // const meal = db.prepare("SELECT * FROM meals").all();

    if (!meal) {
        notFound();
    }

    return {
        title: meal.title,
        description: meal.summary,
    };
}

export default async function MealDetailPage({params}) {
    const meal = await getMeal(params.mealSlug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return <>
    <header className={classes.header}>
        <div className={classes.image}>
            <Image src={meal.image} alt={meal.title}fill/>
        </div>
        <div className={classes.headerText}>
            <h1>{meal.title}</h1>
            <p className={classes.creator}>
                by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
            </p>
            <p className={classes.summary}>
                {meal.summary}
            </p>
        </div>
    </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{
                __html: meal.instructions
            }}>
            </p>
        </main>
    </>
}