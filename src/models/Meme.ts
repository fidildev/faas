export interface Meme {
  id: string;
  url: string;
}

export class MemeStore {
  private static memes: Meme[] = [
    { id: '1', url: 'https://i.kym-cdn.com/entries/icons/facebook/000/010/333/why-because-fuck-you-thats-why.jpg' },
    { id: '2', url: 'http://www.quickmeme.com/img/c4/c4e5f65e70566f368f118870b49a118447e5c6a9ad3ce05cb23397b40023c805.jpg' },
    { id: '3', url: 'http://www.quickmeme.com/img/4b/4b94a42e7d20c9c425695dc405a21b31a38422758873247d103fa0b9059863ac.jpg' },
    { id: '4', url: 'https://i.kym-cdn.com/photos/images/newsfeed/000/568/330/458.jpg' },
    { id: '5', url: 'https://i.kym-cdn.com/photos/images/newsfeed/000/318/630/bca.jpg' },
    { id: '6', url: 'https://i.kym-cdn.com/photos/images/newsfeed/001/062/735/b6e.jpg' },
    { id: '7', url: 'https://i.kym-cdn.com/photos/images/newsfeed/001/062/733/387.jpg' },
    { id: '8', url: 'https://i.kym-cdn.com/photos/images/newsfeed/001/062/732/85f.jpg' },
    { id: '9', url: 'https://images2.memedroid.com/images/UPLOADED1/515421798b630.jpeg' },
    { id: '10', url: 'https://media.makeameme.org/created/because-fuck-you-ec8c211023.jpg' },
    { id: '11', url: 'http://www.quickmeme.com/img/ab/ab942c0bee614fa7d9e5cb3563bc4a11c9dd795bff9eb58ba57fb0033ef76a6e.jpg' },
    { id: '12', url: 'https://media.makeameme.org/created/because-fuck-you-c4cfc91d3a.jpg' },
    { id: '13', url: 'https://media.makeameme.org/created/because-fuck-you-923ab69e75.jpg' },
    { id: '14', url: 'https://media.giphy.com/media/NBN2nFCVQDCDe/giphy.gif' },
    { id: '15', url: 'https://media.giphy.com/media/3o85xpyzJnAn2gyKZi/giphy.gif' },
    { id: '16', url: 'https://media.giphy.com/media/l41YjCMSYNxPhhy2k/giphy.gif' },
    { id: '17', url: 'https://media.giphy.com/media/CNxc8Uz8zuqHK/giphy.gif' },
    { id: '18', url: 'https://media.giphy.com/media/hTCp28zfmxc9ig9nCc/giphy.gif' },
    { id: '19', url: 'https://media.giphy.com/media/44Eq3Ab5LPYn6/giphy.gif' },
    { id: '20', url: 'https://media.giphy.com/media/I7p8K5EY9w9dC/giphy.gif' },
    { id: '21', url: 'https://media.giphy.com/media/143cE5FtVmKrNC/giphy.gif' },
    { id: '22', url: 'https://media.giphy.com/media/8OJ8T0ZXF7BG8/giphy.gif' },
    { id: '23', url: 'https://media.giphy.com/media/w1XrYq5PsCbyE/giphy.gif' },
    { id: '24', url: 'https://media.giphy.com/media/yV5xcSTmtVPBS/giphy.gif' },
    { id: '25', url: 'https://media.giphy.com/media/4WF4YilkoC7sjzG3TY/giphy.gif' },
    { id: '26', url: 'https://media.giphy.com/media/l4FGAtDrD316rMw1i/giphy.gif' },
    { id: '27', url: 'https://d.justpo.st/media/images/2016/09/28/tank-helicopter-because-fuck-you-thats-why-1475114544.jpg' },
    { id: '28', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJspmAYwvQx1fyNoA9AwFUhvUvnEYDR9llks5syJnFt9PJxjY2Tj0oeO04c4IFOnDahU&usqp=CAU' },
    { id: '29', url: 'https://cdn.ebaumsworld.com/mediaFiles/picture/2297528/83110126.jpg' },
    { id: '30', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQng7gmm11mw4K50FLQxNaQ7zsn8DfZsEZHqg&usqp=CAU' },
    { id: '31', url: 'https://media.giphy.com/media/vW6OWFzGMVBde/giphy.gif' },
    { id: '32', url: 'https://media.giphy.com/media/3o6ozGdUpsNyXNzRaE/giphy.gif' },
    { id: '33', url: 'https://media.giphy.com/media/pYbN6SVQxeZvG/giphy.gif' },
    { id: '34', url: 'https://media.giphy.com/media/10LBiwK0D61WDK/giphy.gif' },
    { id: '35', url: 'https://media.giphy.com/media/44X9vIGbuj864/giphy.gif' },
    { id: '36', url: 'https://i.pinimg.com/originals/22/68/ab/2268ab9757e38825e30215bbcacf4b7f.jpg' },
    { id: '37', url: 'https://i.pinimg.com/564x/65/e7/c2/65e7c25e97b1bd4d44146cdb4944b6b2.jpg' },
    { id: '38', url: 'https://i.pinimg.com/originals/9d/b3/0e/9db30e2a7dd308cc5a7694ad5717c4b4.jpg' },
    { id: '39', url: 'https://media.tenor.com/cVjYAaaENPcAAAAC/fuck-you-pissed.gif' },
    { id: '40', url: 'https://i.imgur.com/KQnwjo2.gif' },
    { id: '41', url: 'https://i.pinimg.com/originals/35/17/b4/3517b4d91cc59510f143500b1f6218e9.gif' },
    { id: '42', url: 'https://reactiongifs.me/wp-content/uploads/2013/08/danny-de-vito-gif-angry-fuck-you.gif' },
    { id: '43', url: 'https://i.imgur.com/75VQFch.gif' },
    { id: '44', url: 'http://www.quickmeme.com/img/73/73620b09c56f4e73c3d995300863fff409b49e8e7611b3cc3c028b0928d62e8d.jpg' }
  ];

  static getRandomMeme(): Meme {
    const randomIndex = Math.floor(Math.random() * this.memes.length);
    return this.memes[randomIndex];
  }

  static getAllMemes(): Meme[] {
    return [...this.memes];
  }

  static getMemeById(id: string): Meme | undefined {
    return this.memes.find(meme => meme.id === id);
  }

  static addMeme(meme: Meme): void {
    this.memes.push(meme);
  }
}
