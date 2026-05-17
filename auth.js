const supabaseUrl = 'https://hvsilwppchtpaghqhzcy.supabase.co';

const supabaseKey = 'BURAYA_ANON_PUBLIC_KEY';

const client = supabase.createClient(supabaseUrl, supabaseKey);

async function loginWithDiscord() {
    const { error } = await client.auth.signInWithOAuth({
        provider: 'discord',
        options: {
            redirectTo: window.location.origin
        }
    });

    if(error){
        console.error(error);
        alert('Discord giriş hatası!');
    }
}
