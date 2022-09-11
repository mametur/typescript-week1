const  fetchQuestion = async () => {
    // Fetch a question from thehttps://the-trivia-api.com/api/questions?limit=5 API
   const response = await fetch('https://the-trivia-api.com/api/questions');
   const questions = await response.json();
       
    return questions;
}

export { fetchQuestion };