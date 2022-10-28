import { connect, model } from 'mongoose';
connect('mongodb://localhost:27017/test');

const Cat = model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));