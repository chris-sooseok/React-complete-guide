import classes from './page.module.css';
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import {getMeals} from "@/lib/meals";
import {Suspense} from "react";

export const metadata = {
    title: 'All meals',
    description: 'Browse the meals shared by a food-loving community.',
};

async function Meals() {
    // ! executed on the server side to populate data
    const meals = await getMeals();
    return <MealsGrid meals={meals}/>

}

export default function MealsPage() {

    return <>
        <header className={classes.header}>
            <h1>
                Delicious meals, created{' '}<span className={classes.highlight}>
                by you
            </span>
            </h1>
            <p>Choose your favorite recipe and </p>
            {/* cta: call to action */}
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share Your Recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={ <p className={classes.loading}>Fetching meals...</p>}>
                <Meals/>
            </Suspense>
        </main>
    </>
}