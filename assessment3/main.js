import { fetchQuestion } from './modules/question.api.js';
import { createQuestion } from './modules/question.component.js';

fetchQuestion()
.then((data) => {
    const $question = createQuestion(data[0]);

        const $app = document.getElementById('app');
        $app.innerHTML = '';
        $app.appendChild($question);
})

// const $question = createQuestion(question.then(result=>result));

// const $app = document.getElementById('app');
// $app.innerHTML = '';
