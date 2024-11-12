
const quotes = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Marilyn Monroe', 
     'quote': 'selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.t deserve me at my best'
    },
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe'
    },
    {'author': 'Albert Einstein', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul'
    },
    {'author': 'Andre Gide, Autumn Leaves', 
        'quote': 'It is better to be hated for what you are than to be loved for what you are not.'
    },
    {'author': 'Stephen Chbosky', 
        'quote': 'We accept the love we think we deserve.'
    },
    {'author': 'Andre Gide, Autumn Leaves', 
        'quote': 'It is better to be hated for what you are than to be loved for what you are not.'
    },
];

function Gen(){
    const random = Number.parseInt(Math.random()*quotes.length + 1);
    document.querySelector('#text').textContent = `\"${quotes[random].quote}\"`;
    document.querySelector('#author').textContent = `--${quotes[random].author}`;
    
}
