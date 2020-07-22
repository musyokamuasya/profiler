const data = [{
        name: 'Fake Paul Pogba',
        age: '24',
        club: 'Man U',
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
        salary: $2400K
    },
    {
        name: 'Fake Anthony Martial',
        age: '20',
        club: 'Man U',
        image: 'https://randomuser.me/api/portraits/men/15.jpg',
        salary: $2900K
    },

    {
        name: 'Fake Christiano Ronaldo',
        age: '30',
        club: 'PSG',
        image: 'https://randomuser.me/api/portraits/men/6.jpg',
        salary: $99999K
    }
];



document.getElementById("next").addEventListener('click', nextAthelete());
console.log('Button clicked');
const atheletes = atheleteIterator(data);

function nextAthelete() {
    const currentAthelete = atheletes.next().value;
    document.querySelector('#profile-display').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentAthelete.name}</li>
        <li class="list-group-item">Age: ${currentAthelete.age}</li>
        <li class="list-group-item">Club: ${currentAthelete.club}</li>
        <li class="list-group-item">Salary: ${currentAthelete.salary}</li>
    </ul>
`;

    document.querySelector('#image-display').innerHTML = `
    <img src = "${currentAthelete.image}"></img>
`;
}

// Iterator
function atheleteIterator(atheletes) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < atheletes.length ? { value: atheletes[nextIndex++], done: false } : { done: true };
        }
    };
}