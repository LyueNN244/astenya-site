const supabaseUrl = 'https://hvsilwppchtpaghqhzcy.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2c2lsd3BwY2h0cGFnaHFoemN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5ODI3MDcsImV4cCI6MjA5NDU1ODcwN30.iVREIgMlleFcyRVRQZiet8Xmvzr-nKXTha4UgiFlzV4';

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
