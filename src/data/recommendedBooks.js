
const recommendedBooks = [
    {
        title: 'All the Light we Cannot See',
        author: 'Anthony Doerr',
        category: 'Fiction',
        publisher: 'Scribner',
        pagesNumber: 531,
        coverImg: '/images/book1.jpg',
        description: 'From the multiple award-winning Anthony Doerr, the stunningly beautiful instant New York Times bestseller about a blind French girl and a German boy whose paths collide in occupied France as both try to survive the devastation of World War II.'
    },
    {
        title: 'Everything I Never Told You',
        author: 'Celeste Ng',
        category: 'Fiction',
        publisher: 'Blackfriars',
        pagesNumber: 298,
        coverImg: '/images/book2.jpg',
        description: 'The story about a Chinese American family living in 1970s small-town Ohio. Everything I Never Told You is a gripping page-turner, about secrets, love, longing, lies & race.'
    },
    {
        title: 'Where the Crawdads Sing',
        author: 'Delia Owens',
        category: 'Fiction',
        publisher: 'G.P. Putnam\'s Sons',
        pagesNumber: 384,
        coverImg: '/images/book3.jpg',
        description: 'The story asks how isolation influences the behavior of a young woman, who like all of us, has the genetic propensity to belong to a group. The clues to the mystery are brushed into the lush habitat and natural histories of its wild creatures.'
    },
    {
        title: 'The Introvert\'s Way',
        author: 'Sophia Dembling',
        category: 'Self-Help',
        publisher: 'Perigee Trade',
        pagesNumber: 208,
        coverImg: '/images/book4.jpg',
        description: 'By honoring what makes them unique, this astute and inspiring book challenges introverts to "own” their introversion, igniting a quiet revolution that will change how they see themselves and how they engage with the world.'
    },
    {
        title: 'A Brief History Of Time',
        author: 'Stephen Hawking',
        category: 'Physics',
        publisher: 'Random House',
        pagesNumber: 272,
        coverImg: '/images/book5.jpg',
        description: 'This new edition includes updates from Stephen Hawking with his latest thoughts about the No Boundary Proposal and offers new information about dark energy, the information paradox, eternal inflation, the microwave background radiation observations, and the discovery of gravitational waves. It was published in tandem with the app, Stephen Hawking\'s Pocket Universe.'
    },
    {
        title: '21 Lessons for the 21st Century',
        author: 'Yuval Noah Harari',
        category: 'Anthropology',
        publisher: 'Random House',
        pagesNumber: 400,
        coverImg: '/images/book6.jpg',
        description: 'How do computers and robots change the meaning of being human? How do we deal with the epidemic of fake news? Are nations and religions still relevant? What should we teach our children? Yuval Noah Harari\'s 21 Lessons for the 21st Century is a probing and visionary investigation into today\'s most urgent issues as we move into the uncharted territory of the future. '
    },
    {
        title: 'Why We Sleep',
        author: 'Matthew Walker',
        category: 'Medicine',
        publisher: 'Scribner',
        pagesNumber: 368,
        coverImg: '/images/book7.jpg',
        description: 'Neuroscientist and sleep expert Matthew Walker provides a revolutionary exploration of sleep, examining how it affects every aspect of our physical and mental well-being. Charting the most cutting-edge scientific breakthroughs, and marshalling his decades of research and clinical practice, Walker explains how we can harness sleep to improve learning, mood and energy levels, regulate hormones, prevent cancer, Alzheimer\'s and diabetes, slow the effects of aging, and increase longevity. He also provides actionable steps towards getting a better night\'s sleep every night. '
    },
    {
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson',
        category: 'Self-Help',
        publisher: 'HarperOne',
        pagesNumber: 304,
        coverImg: '/images/book8.jpg',
        description: 'There are only so many things we can give a f**k about so we need to figure out which ones really matter, Manson makes clear. While money is nice, caring about what you do with your life is better, because true wealth is about experience. A much-needed grab-you-by-the-shoulders-and-look-you-in-the-eye moment of real-talk, filled with entertaining stories and profane, ruthless humor, The Subtle Art of Not Giving a F**k is a refreshing slap for a generation to help them lead contented, grounded lives.'
    },
    {
        title: 'The Book Thief',
        author: 'Markus Zusak',
        category: 'Fiction',
        publisher: 'Alfred A. Knopf',
        pagesNumber: 608,
        coverImg: '/images/book9.jpg',
        description: 'It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will be busier  still.'
    },
    {
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
        category: 'Fiction',
        publisher: 'Penguin',
        pagesNumber: 400,
        coverImg: '/images/book10.jpg',
        description: 'Review The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father\'s servant, caught in the tragic sweep of history, The Kite Runner transports readers to Afghanistan at a tense and crucial moment of change and destruction. A powerful story of friendship, it is also about the power of reading, the price of betrayal, and the possibility of redemption; and an exploration of the power of fathers over sons—their love, their sacrifices, their lies.'
    },
    {
        title: 'And Then There Were None',
        author: 'Agatha Christie',
        category: 'Crime',
        publisher: 'HarperCollins',
        pagesNumber: 258,
        coverImg: '/images/book11.jpg',
        description: 'Ten strangers, apparently with little in common, are lured to an island mansion off the coast of Devon by a mysterious host. They sit down for dinner and a record begins to play. The voice of their host accuses each person of hiding a guilty secret. By the end of the night one of them will be dead. Stranded by a violent storm, they begin to die - one by one. Each of them is guilty. But who is the killer?'
    },
    {
        title: 'The Stranger',
        author: 'Albert Camus',
        category: 'Fiction',
        publisher: 'Vintage',
        pagesNumber: 123,
        coverImg: '/images/book12.jpg',
        description: 'Behind the subterfuge, Camus explores what he termed "the nakedness of man faced with the absurd" and describes the condition of reckless alienation and spiritual exhaustion that characterized so much of twentieth-century life.'
    },
    {
        title: 'The Clean Coder',
        author: 'Robert C. Martin',
        category: 'Programming',
        publisher: 'Prentice Hall',
        pagesNumber: 244,
        coverImg: '/images/book13.jpg',
        description: 'Programmers who endure and succeed amidst swirling uncertainty and nonstop pressure share a common attribute: They care deeply about the practice of creating software. They treat it as a craft. They are professionals. In The Clean Coder: A Code of Conduct for Professional Programmers, legendary software expert Robert C. Martin introduces the disciplines, techniques, tools, and practices of true software craftsmanship.'
    },
    {
        title: 'Think Like a Programmer',
        author: 'V. Anton Spraul',
        category: 'Programming',
        publisher: 'No Starch Press',
        pagesNumber: 260,
        coverImg: '/images/book14.jpg',
        description: 'Instead of learning by trial and error, you can learn problem solving in a systematic way. That\'s what this book is all about. You can learn techniques to organize your thoughts, procedures to discover solutions, and strategies to apply to certain classes of problems. By studying these approaches, you can unlock your creativity. Make no mistake: Programming, and especially problem solving, is a creative activity.'
    },
    {
        title: 'The Way I Used to Be',
        author: 'Smith Amber',
        category: 'Fiction',
        publisher: 'Margaret K. McElderry Books',
        pagesNumber: 385,
        coverImg: '/images/book15.jpg',
        description: 'Told in four parts—freshman, sophomore, junior, and senior year—this provocative debut reveals the deep cuts of trauma. But it also demonstrates one young woman\'s strength as she navigates the disappointment and unbearable pains of adolescence, of first love and first heartbreak, of friendships broken and rebuilt, and while learning to embrace a power of survival she never knew she had hidden within her heart.'
    },
]

export default recommendedBooks;