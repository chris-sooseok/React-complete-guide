'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import {revalidatePath} from "next/cache";

function isInvalidText(text) {
    return !text || text.trim() === '';
}

// ! initially only accepts formData, but with useFormState together in share/page.js
// ! we accepts prevState as well
export async function shareMeal(prevState, formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
    ) {
        return {
            message: 'Invalid input',
        }
    }

    await saveMeal(meal);

    // revalidate caches after save
    // ('/', 'layout') will revalidate all nested pages
    revalidatePath('/meals', );
    redirect('/meals');
}