import { sql } from "@vercel/postgres";

// ...

export async function fetchProjectData() {
    try {
        const projectDataPromise = sql`SELECT * from projects`;

        const data = await Promise.all([
            projectDataPromise
        ]);

        return data;
    }
    catch (error) {
        console.error('Erreur de base de données', error);
        throw new Error('Impossible de récupérer les données des projets');
    }
}